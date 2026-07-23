# Ditto Resolve Guide

## Run — All 6 Pages in One Pass (July 23 2026)

### Phase: Single-page jobs (all cached)

All 6 Ditto single-page jobs were submitted simultaneously and returned cached results instantly.

| Label      | Job ID                                   | Status |
|------------|------------------------------------------|--------|
| home       | 3f35207e-48ff-454c-b9d9-b200d6d04aab     | cached |
| headphones | 7368d184-b3b0-4147-92a0-10467874e001     | cached |
| product    | ccac3934-721c-4129-9a34-3a0d21f5454c     | cached |
| stories    | 3292d656-df0e-4e6d-a9d1-da87b86533e1     | cached |
| john       | b433a4b5-fb16-4d33-9595-9848fb51ff0f     | cached |
| about      | 50f570c0-2ce0-4848-864d-cafa52789cc8     | cached |

### Merge strategy

- `home` bundle was used as the project foundation (copied to `project/`).
- Each other page was placed under its corresponding Next.js App Router path inside `src/app/`:
  - `headphones` → `src/app/en/int/headphones/`
  - `product` → `src/app/en/int/earphones/beograce/`
  - `stories` → `src/app/en/int/stories/`
  - `john` → `src/app/en/int/story/bang-olufsen-brand-ambassador-john-legend/`
  - `about` → `src/app/en/int/story/about-bang-and-olufsen/`

### Conflicts resolved

1. **layout.tsx html/body conflict**: Each Ditto bundle exports a full `RootLayout` with `<html>` and `<body>` tags. In Next.js App Router, only the root layout may contain these. Resolution: sub-route `layout.tsx` files were rewritten to return `<>{children}</>` while retaining their `metadata` and `viewport` exports.

2. **Relative lib import paths**: Components in each bundle imported `../../lib/utils` and `../lib/site` relative to their original location (`src/app/components/`). After relocation to deeper route directories, these paths broke. Resolution: added `@/*` → `./src/*` path alias to `tsconfig.json`; replaced all 46 broken relative lib imports with `@/lib/utils` and `@/lib/site` via automated script.

3. **`output: "export"` in next.config.mjs**: Incompatible with `next dev`. Removed.

4. **No component name conflicts**: Each page's components live inside their own route directory (`/en/int/headphones/components/`, etc.) — no naming collision with root or sibling route components.

### Public assets

All bundles share content-hashed asset filenames (`/assets/cloned/images/abc123.webp`, `/assets/cloned/fonts/xyz.woff2`, etc.). All 6 bundles' `public/` directories were merged into one — zero collisions.

### Live preview confirmation

- Dev server: `next dev -H 0.0.0.0 -p 3000`
- All 6 routes verified with HTTP 200:
  - `/` (home)
  - `/en/int/headphones`
  - `/en/int/earphones/beograce`
  - `/en/int/stories`
  - `/en/int/story/bang-olufsen-brand-ambassador-john-legend`
  - `/en/int/story/about-bang-and-olufsen`

### Archived

Nothing archived — all Ditto bundle files are preserved in `/bang-olufsen-clone/bundles/` (one folder per page label). The active merged project is at `/bang-olufsen-clone/project/`.

---

## Session 2 — Assembly Studio Configurator (2026-07-23)

### Target
- URL: `https://studio.rovoassembly.com/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833`
- Product: Assembly® Studio — Classic Dad Cap configurator

### Job
- Job ID: `3c389802-1e5c-4146-8f21-90505822fd69`
- Status: `cached` (instant, pre-existing from prior run)
- Bundle size: 34MB

### Route in project
```
project/src/app/studio/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833/
```
Preview path: `/studio/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833`

### Files in bundle
- `page.tsx` — main page: Cap Colour accordion, Front/Left/Right/Back/Label view switcher, price + add-to-cart
- `sections/navbar.tsx` — Assembly Studio top nav
- `sections/front-left-right-section.tsx` — cap preview image + view angle radio group
- `sections/hero-section.tsx` — blurred backdrop overlay
- `ditto/DropdownMenu.tsx` — `"use client"` component, real JS hover/click handlers for dropdown menus
- `components/text-link.tsx` — view angle tab links
- `svgs/` — 7 icon SVGs
- `globals.css` — all Tailwind theme tokens + CSS vars (--clr-0..9, --background, --foreground, etc.) + font-face declarations
- `ditto.css` — empty (all CSS is in globals.css for this bundle)

### Assets
- 8 cap images in `public/assets/cloned/images/*.png` (merged into project public/)
- Sohne font files shared from B&O bundle (already present)

### Fixes applied
- `layout.tsx`: stripped `<html>/<body>`, removed `SITE_ORIGIN` import, replaced `RootLayout` with minimal `Layout` passthrough
- Lib imports: fixed 3 files (`../../lib/site` etc → `@/lib/site`)

### Interactivity assessment
- **Dropdown menus**: ✅ Functional — `DropdownMenu.tsx` is `"use client"` with real AbortController-based click/hover event listeners that inject captured dropdown HTML on demand
- **Color/material switching**: ❌ Not functional — all interactive elements have `pointer-events-none` (Ditto static capture); cap preview image is a single static PNG per viewport breakpoint
- **View angle tabs (Front/Left/Right/Back/Label)**: ❌ Not functional — rendered as `role="radiogroup"` with `pointer-events-none`; no JS to swap images
- **Summary**: Layout, labels, swatches, and pricing are rendered correctly. Real-time cap configuration (changing color/material and seeing the cap update) is not reproduced — Ditto captures a single state snapshot, not the live WebGL/3D configurator logic.

### Git persistence
- `bang-olufsen-clone/bundles/` → `.gitignore` (regeneratable via `POST /v1/clones` with cached IDs)
- `bang-olufsen-clone/project/` → fully tracked; 872 files committed
- `bang-olufsen-clone/project/.next/` → `.gitignore` (build cache)
