# Working Rules — Ditto Multi-Page Clone via API + Live Preview Verification

These rules are absolute. Re-read this file before starting any clone work.

**The overall workflow is strict:** Multi-page clone first (up to 25 routes from the home URL), download everything, identify any missed routes from those 25 limits, then fill gaps with single-page jobs one by one. After every step that adds code or routes, verify a working live preview exists that a user can see and interact with. Before any visual tweaking begins, the entire site must be cloned, merged into one running project folder, and accessible as a live preview. This is not rushed — each step is explicit, verified, and preserves everything; nothing is deleted recklessly.

---

## 0. Scope and target for this run

**Target site:** Bang & Olufsen (`https://www.bang-olufsen.com`)

**In-scope pages, priority order:**
1. Home — `https://www.bang-olufsen.com/en/int`
2. Collection — `https://www.bang-olufsen.com/en/int/headphones`
3. Product — `https://www.bang-olufsen.com/en/int/earphones/beograce?variant=beograce-natural-aluminium`
4. Resources (listing) — `https://www.bang-olufsen.com/en/int/stories`
5. Resource read page — `https://www.bang-olufsen.com/en/int/story/bang-olufsen-brand-ambassador-john-legend`
6. About — `https://www.bang-olufsen.com/en/int/story/about-bang-and-olufsen`

**Explicitly out of scope for this run:** the Configurator and all its subpages (`/composer`, `/composer?page=productselection`, `/composer/product/beolab-8`, quick-compose flow). Do not clone these. They will be handled in a separate run.

**Non-negotiable outcome:** total 1:1 visual accuracy across all cloned pages — font weight, size, color, spacing, placement, imagery, and animation/interaction behavior. A live preview that works, that a real user can see and use. No creative reinterpretation, no simplification, no assumed content. Work methodically, verify each step, but accuracy is never traded for speed.

**Note on language:** If the multi-page crawl captures pages in languages other than English (German, French, etc.), that is acceptable — do not reject them or try to filter them out. They will be kept, archived if not currently in focus, and the preview will work for all of them. The goal is a working clone, not a single-language clone.

---

## 1. Project structure and file preservation rules

### 1.1 Dedicated project folder (not the root of anything)

All generated code and assets go into a dedicated folder: `/bang-olufsen-clone/` or similar descriptive name. This is not the root. Nothing is stored at the file system root. Everything stays inside this folder, organized clearly.

Within `/bang-olufsen-clone/`, the structure will be:
- `/bang-olufsen-clone/project/` — the active Next.js project (app code, routes, components, public assets, etc.). This is where the live preview runs.
- `/bang-olufsen-clone/archive/` — a holding area for generated pages that aren't currently linked into the active project or are duplicates/experimental. Nothing is deleted; everything is preserved here.
- `/bang-olufsen-clone/ditto_resolve_guide.md` — the audit trail of how each page was cloned and resolved (see Section 2.5).
- `/bang-olufsen-clone/explored_routes.json` — a record of all routes Ditto explored/generated in the multi-page job, for later comparison against the in-scope list.

### 1.2 What never gets deleted

- No crucial Next.js files: `package.json`, `next.config.js`, `tsconfig.json`, `.env`, `.eslintrc`.
- No routes that are already working in the live preview, even if they're not currently in the in-scope list.
- No shared components, utilities, or config that multiple routes depend on.
- No media assets that are in use by any route.
- When a conflict arises (e.g. Ditto generates a `/pages/index.ts` that clashes with an existing `/app/page.tsx`), the resolution is documented in `ditto_resolve_guide.md` before anything is changed; the old version is moved to `/bang-olufsen-clone/archive/` if it's not the active version, not deleted.

### 1.3 Reckless relocation is prohibited

Do not move files around casually. Do not rename routes mid-project. Do not restructure the `/project/` folder on a whim. If a move is necessary (e.g. consolidating duplicate components), document exactly why, what was moved, and where it went in `ditto_resolve_guide.md` before doing it. Leave a clear trail.

---

## 2. Roles and the agent's responsibilities

**Ditto's job:** produce real, componentized, typed code for up to 25 routes starting from the home URL, crawling and linking them as one site. This includes layout structure, componentization, design tokens, media assets, and extracted interactions/hover states.

**The agent's job, in strict order:**
1. Submit the first multi-page job, wait for completion, download everything.
2. Inspect what Ditto returned: which routes it explored, which assets it pulled.
3. Compare the explored routes against the in-scope list (Section 0). Identify any routes in-scope that Ditto missed (outside the 25-route limit, or just not discovered).
4. For each missed in-scope route, submit a single-page Ditto job to fill the gap.
5. After every addition (multi-page result, single-page fills), resolve everything into one working Next.js project at `/bang-olufsen-clone/project/` and verify a user-facing live preview works.
6. Only after the entire site (all 6 in-scope pages, plus any other routes Ditto discovered) is cloned, merged, and previewing correctly does the visual tweak/fix phase begin (Section 4).

**Subagent deployment:** If any subagent is deployed for resolving a live preview, handling file merges, or any other step:
- The subagent must be told: "This is a Next.js project. Do not delete crucial files like `package.json`, `next.config.js`, `tsconfig.json`, or `.env`. Do not recklessly move or rename files. Everything lives in `/bang-olufsen-clone/`. When in doubt, archive instead of delete."
- The subagent must be given this entire file as context.
- The subagent must have access to the current state of `ditto_resolve_guide.md` and `/bang-olufsen-clone/explored_routes.json`.
- The subagent must append its own entry to `ditto_resolve_guide.md` after any step that changes the project state.

---

## 3. Ditto API workflow

### 3.1 Phase 1: submit multi-page job (first, crawl up to 25 routes)

Submit one multi-page job starting from the home URL. Ditto will crawl outward, discovering and generating up to 25 routes as a linked site.

```bash
curl -X POST https://api.ditto.site/v1/clones \
  -H "Authorization: Bearer $DITTO_API_KEY" \
  -H "content-type: application/json" \
  -d '{
    "url": "https://www.bang-olufsen.com/en/int",
    "options": {
      "mode": "multi",
      "framework": "next",
      "styling": "tailwind",
      "verify": true,
      "maxRoutes": 25
    }
  }'
```

Notes:
- `mode: "multi"` crawls from the home URL, discovering routes via link-following. It will stop at 25 routes.
- `maxRoutes: 25` gives breathing room to capture the 6 in-scope pages plus any other discoverable pages on the site (local landing pages, category pages, etc.).
- `verify: true` enables Ditto's own verification if available.
- `framework: "next"` and `styling: "tailwind"` — keep these unless your existing stack differs.

Record the `jobId` from the response.

### 3.2 Poll until completion

Do not poll in a tight loop. Ditto's own docs describe multi-page clones as typically resolving within minutes. Wait 10–15 minutes before the first status check, then poll every few minutes:

```bash
curl https://api.ditto.site/v1/clones/$JOB_ID \
  -H "Authorization: Bearer $DITTO_API_KEY"
```

Or follow the events stream for live progress:

```bash
curl https://api.ditto.site/v1/clones/$JOB_ID/events?after=0 \
  -H "Authorization: Bearer $DITTO_API_KEY"
```

Continue polling until `status` indicates completion (e.g., `status: "complete"`).

### 3.3 Download and unpack the result

Once complete, retrieve the entire generated project:

```bash
curl -L -H "Authorization: Bearer $DITTO_API_KEY" \
  "https://api.ditto.site/v1/clones/$JOB_ID/bundle?format=tgz" \
  -o ditto-multi-page.tgz

tar -xzf ditto-multi-page.tgz -C /bang-olufsen-clone/
```

This unpacks the generated project. The result includes a manifest or file listing that shows which routes Ditto generated. Extract and save this list to `/bang-olufsen-clone/explored_routes.json` for later reference.

### 3.4 Phase 2: Identify missed in-scope routes

Compare the list of routes Ditto explored (from `explored_routes.json`) against the in-scope list from Section 0:
1. Home
2. Collection
3. Product
4. Resources (listing)
5. Resource read page
6. About

For any in-scope route **not** in Ditto's explored list, note it. These are candidates for Phase 3 (single-page fill jobs).

### 3.5 Phase 3: Single-page jobs for missed routes (one by one, only if needed)

If any in-scope route was missed by the multi-page crawl, submit single-page jobs one at a time for each missed route.

For each missed route:

```bash
curl -X POST https://api.ditto.site/v1/clones \
  -H "Authorization: Bearer $DITTO_API_KEY" \
  -H "content-type: application/json" \
  -d '{
    "url": "<MISSED_ROUTE_URL>",
    "options": {
      "mode": "single",
      "framework": "next",
      "styling": "tailwind",
      "verify": true
    }
  }'
```

Poll for completion, download, unpack to a temporary location. Do not merge into `/bang-olufsen-clone/project/` yet — hold it separately until reviewed.

### 3.6 Resolve everything into one working Next.js project (after all cloning is done)

**This is the critical step before any tweaking begins.**

At this point, you have:
- The multi-page output from Phase 1.
- Single-page outputs from Phase 3 (if any).

Now merge them into a single, coherent Next.js project at `/bang-olufsen-clone/project/`:

1. **Copy the multi-page output to `/bang-olufsen-clone/project/`** (if starting fresh, this is the foundation). Verify the structure: `package.json`, `next.config.js`, app routes, components, public assets, etc.
2. **For each single-page result from Phase 3:**
   - Extract the new routes and components from the single-page output.
   - Merge them into `/bang-olufsen-clone/project/` alongside existing routes — do not overwrite or delete existing routes unless there is a confirmed duplicate.
   - If a conflict arises (two routes generating the same path, or two component files with the same name), archive the older one to `/bang-olufsen-clone/archive/` and document the conflict resolution in `ditto_resolve_guide.md` before deleting anything.
3. **Resolve any config/dependency mismatches:**
   - If single-page jobs generated different `package.json` dependencies, merge them (union of all dependencies, newest versions preferred).
   - If two jobs generated different `next.config.js` or `tsconfig.json` entries, merge carefully and document in the resolve guide.
4. **Do not delete anything** that isn't a confirmed duplicate or an actual error. When in doubt, archive.
5. **Verify the merged project structure is sound** before proceeding: `npm install` should work, `npm run build` should complete, `npm run dev` should start a server.

### 3.7 Verify a working live preview (user-facing, not internal)

Install dependencies and start the live preview:

```bash
cd /bang-olufsen-clone/project/
npm install
npm run dev
```

Verify:
- The development server starts without errors.
- The home page is accessible (e.g., `http://localhost:3000`).
- Every in-scope route from Section 0 is accessible and renders (check by visiting each URL in the dev server).
- All images, CSS, and JavaScript load correctly — no 404s in the browser console.
- If other routes from Ditto's crawl are present (e.g., category pages, policy pages), they also render without error.

**This preview must be visible to a user** — it should be browsable, clickable, and interactive. If the server fails to start or routes 404, stop here and debug before proceeding. Do not proceed to Section 4 (tweaking) until this preview works smoothly.

### 3.8 Archive unused or experimental routes

If the multi-page crawl captured routes that are not in the in-scope list and are not needed (e.g., legal pages, sitemap, robots.txt), leave them in the project — they do not hurt. If they are taking up significant space or causing confusion, move them to `/bang-olufsen-clone/archive/<route-name>/` and update `next.config.js` or the routing config so they are not served, but keep the files.

### 3.9 Document the resolution process

Append an entry to `/bang-olufsen-clone/ditto_resolve_guide.md` covering:
- Multi-page job ID and submission command.
- Which routes Ditto explored (list them).
- Which in-scope routes were missed, and which single-page jobs were submitted to fill gaps.
- Which routes had conflicts during merge, and how they were resolved.
- Confirmation that the live preview starts, all in-scope routes render, and no console errors appear.
- Any routes archived and why.

---

## 4. Fix phase — visual verification against the real site

This phase only begins once Section 3.7 confirms a working, user-facing live preview for all in-scope routes. Do not tweak a page's visuals before the live preview exists and works.

### 4.1 Source of truth for comparison — hard rule on screenshot origin

**The real, external site must never be captured with an internal screenshot tool.** Any screenshot of the live B&O URL must be taken by forcing an external screenshot service — MicroLink or screenshotmachine.com — never a local/internal screenshot of the agent's own browser, rendering, or preview used as a stand-in for the real site. This applies every single time a comparison is made, for every page, for both desktop and mobile. Internal/local screenshot capability may only ever be used on the *generated clone's own live preview*, never on the real external site.

- Compare the clone's generated page (from its own working live preview, screenshotted locally/internally — that side is fine) against real screenshots of the corresponding live B&O URL (captured externally via MicroLink/screenshotmachine — that side is never internal).
- Never scrape the real site's HTML/markdown/text to infer content. If you didn't see it in a screenshot (or, where explicitly permitted below, in code for animation-only purposes), don't build it.

### 4.1.1 Screenshot capture method (literal, do not deviate)

#### Step 1 — Capture real screenshots before fixing anything

Use the microlink.io free screenshot API (no key required) for real device/viewport emulation:

- Desktop full-page: `https://api.microlink.io/?url=<PAGE_URL>&screenshot=true&meta=false&fullPage=true&viewport.width=1440&viewport.height=900`
- Mobile full-page: `https://api.microlink.io/?url=<PAGE_URL>&screenshot=true&meta=false&fullPage=true&viewport.width=390&viewport.height=844&viewport.isMobile=true` (note `isMobile=true` — required for a true mobile layout, not a rescaled desktop one)

Each call returns JSON with `data.screenshot.url` pointing to the actual PNG. Download both PNGs before doing anything else.

**Two interchangeable capture tools — use either, freely, in any order:**
1. microlink.io (no key required) — URLs above.
2. screenshotmachine.com — key: `968a61`. Example request shape: `https://api.screenshotmachine.com/?key=968a61&url=<PAGE_URL>&device=desktop&format=png&cacheLimit=0&delay=2000` for desktop, and `device=phone` for mobile.

If one tool produces a bad/rescaled/incomplete capture, switch to the other. If both fail, retry with a longer `delay` before giving up.

Sanity-check both images: the mobile image's aspect ratio must be dramatically different from desktop's (tall/narrow vs wide/short). If mobile looks like a rescaled desktop (same layout, same line breaks, just smaller), the capture failed — retry.

#### Step 2 — Chunk both images

Full-page screenshots are very tall (often 5,000–15,000+ px). Do not try to view a full-page screenshot at once.

- Slice each image (desktop and mobile separately) into sequential horizontal chunks, ~1000–1200px tall, full width, native resolution (no downscaling).
- Number them in order: `desktop_chunk_01`, `desktop_chunk_02`, ... and `mobile_chunk_01`, `mobile_chunk_02`, ...
- Allow ~100px vertical overlap between consecutive chunks so nothing straddling a cut line is missed.

#### Step 3 — View desktop and mobile in lockstep, not sequentially by device

Do not view all desktop chunks then all mobile chunks. Work section-by-section down the page:
1. View the matching desktop and mobile chunk together.
2. Identify which real section(s) of the page these chunks cover (mobile stacks content taller, so alignment won't be perfect — use judgment).
3. Confirm content, layout, colors, and spacing are consistent between the two views.
4. Only then move to the next chunk pair.

#### Step 4 — Compare against the clone, section by section

Go down the page in order. For each visible section in the real site's screenshots:
1. Take a fresh screenshot of that same section from the clone's live preview (internal screenshot is fine here).
2. Compare the two side by side.
3. Note any divergence: layout structure, spacing, colors, typography, imagery, functionality.
4. Only move to the next section once this one is confirmed matching or marked for fixing.

### 4.2 What code access is permitted for, and only for

Default to browsing/observing the real site directly (scroll behavior, load/intro animations, hover states, transitions) rather than reading its code. Prioritize direct observation over code inspection wherever both are possible.

Access to the real site's code is permitted **only** when needed to accurately reproduce:
- animation timing and easing
- transitions
- hover states
- preloaders/intro animations (only if the real site actually has one — do not invent one if absent)

Code access is not permitted for inferring layout, color, spacing, typography, or content — those come only from screenshots. Do not assume visual likeness from code. Do not use code access as a shortcut around the screenshot-comparison process for anything non-animation-related.

### 4.3 Per-route fix loop (one by one, only after 3.7 confirms working preview)

For each in-scope route (and any other route you choose to fix), in priority order:

1. Take a fresh desktop screenshot of the clone's live preview for this route (internal screenshot — this is your own work).
2. Take a fresh desktop full-page screenshot of the real, external URL (external tool only — Section 4.1.1).
3. Compare the two side by side, section by section, top to bottom.
4. Fix inconsistencies found — structure, spacing, font weight/size, color, placement, missing functionality (dropdown nav, sliders, marquees, etc.). Fixing means patching the existing code, not regenerating the section from scratch or overriding working parts.
5. Do not change the color scheme or any design decision that already matches the real site — this is a 1:1 recreation, not a redesign. Nothing about intentional design (colors, layout choices that are already correct) gets altered; only actual mismatches get fixed.
6. Only after desktop is confirmed correct for this route, repeat the same process for mobile: take chunked mobile screenshots (per Section 4.1.1 Step 2 — ~1000–1200px slices with ~100px overlap) of both the clone's mobile view and the real site's mobile view, compare section by section, and fix any mobile-specific inconsistencies.
7. Do not move to the next route until the current route is confirmed correct on both desktop and mobile.

### 4.4 Functionality-specific handling

For interactive elements (dropdown navigation, sliders/carousels, hover states, expandable sections, etc.):
- Check first whether Ditto's output already implements the functionality — verify what it actually produced before assuming it's missing.
- If present but behaving incorrectly, fix the existing implementation to match the real site's behavior (observed via browsing, not guessed).
- If genuinely absent, build it to match the real site's actual behavior, observed directly rather than assumed.
- Never flatten a slider/carousel/dropdown into a static, non-functional equivalent — if it moves, expands, or loops on the real site, it must do so in the clone.

---

## 5. Subagent handling

If any subagent is deployed for resolving the project, merging outputs, verifying the live preview, or any other step:

**Critical context the subagent must know before starting:**
- "This is a Next.js project."
- "Do not delete crucial files: `package.json`, `next.config.js`, `tsconfig.json`, `.env`."
- "Do not recklessly move or rename files. If a move is necessary, document it in `ditto_resolve_guide.md` before doing it."
- "Everything lives in `/bang-olufsen-clone/`. The active project is at `/bang-olufsen-clone/project/`. Unused or archived items go to `/bang-olufsen-clone/archive/`."
- "When in doubt about whether to delete something, archive it instead."

**Context files the subagent must be given:**
- This entire file (DITTO_CLONE_COMMAND.md).
- The current state of `/bang-olufsen-clone/ditto_resolve_guide.md`.
- The current state of `/bang-olufsen-clone/explored_routes.json`.

**What the subagent must do after any step:**
- Append its own entry to `ditto_resolve_guide.md`, documenting exactly what was done, what conflicts arose, and how they were resolved.
- Leave a clear audit trail. Future subagents (or humans) must be able to read the resolve guide and understand the project state.

**The subagent inherits every rule here exactly** — no rule may be relaxed, reinterpreted, or skipped for the sake of speed.

---

## 6. Working discipline

- Maximize tokens on actual build and verification work. Do not produce summaries, recaps, or narration of progress instead of doing the work — the deliverable is the accurate frontend and a working live preview, not a description of it (the resolve guide is a required deliverable, not narration).
- Strict, methodical order: multi-page job → download → identify missed routes → single-page fills → merge into one project → verify live preview works → only then begin tweaking. Do not skip steps, reorder them, or parallelize them.
- Every addition to the project (multi-page result, single-page result) must be followed by a verification that the live preview still works and that all in-scope routes are accessible.
- No reckless deletion, no reckless file relocation. When in doubt, archive. Document every decision.
- No creative liberties: no added/removed sections, no reordering, no modernized or "improved" layout, no assumed copy. If the clone's output diverges from the real site in any visible way, that is treated as a defect to fix, not a variant to keep.
- The real external site is never captured with an internal screenshot tool, at any point in this pipeline, for any page. This is restated because it is the single easiest rule to accidentally violate under time pressure.
- If the clone includes pages in languages other than English (German, French, etc.), that is acceptable. Do not filter them out. They stay in the project, they preview correctly, and they are documented in the resolve guide.
- Do not touch the Configurator routes in this run. When this run is complete and verified across all 6 in-scope pages (and any other routes captured by Ditto's crawl), stop — do not proceed to the Configurator without a separate, explicit instruction to do so.
