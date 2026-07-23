---
name: Git persistence rules
description: What is and isn't committed in this repo; files lost on GitHub push/reset if not tracked
---

## The problem
`bang-olufsen-clone/` was untracked (`??` in git status). Files NOT committed to git are lost on:
- GitHub push → fresh clone of the repo
- Replit workspace reset

## What IS committed (tracked)
- `bang-olufsen-clone/project/` — the entire Next.js app source, config, and public assets (~132MB without ignored dirs)
- `bang-olufsen-clone/ditto_resolve_guide.md` — audit trail + session notes
- `bang-olufsen-clone/explored_routes.json` — Ditto job IDs per page
- `.gitignore` — updated to exclude bundles/ and .next/

## What is gitignored (NOT committed)
- `bang-olufsen-clone/bundles/` — raw Ditto tgz downloads (358MB, regeneratable from cached API using job IDs in explored_routes.json)
- `bang-olufsen-clone/project/.next/` — Next.js build cache (85MB)
- `bang-olufsen-clone/project/node_modules/` — covered by top-level `node_modules` rule (367MB)

## Why
**Why:**  bundles/ are large (>350MB) and fully regeneratable via the Ditto API (all jobs return `status: cached` instantly). Committing them would bloat the repo and likely hit GitHub's per-file or repo size limits. The job IDs in explored_routes.json are the durable reference.

## How to recover bundles after a reset
1. Read job IDs from `bang-olufsen-clone/explored_routes.json`
2. Re-download each bundle: `curl -L -H "Authorization: Bearer $DITTO_KEY" "https://api.ditto.site/v1/clones/<jobId>/bundle?format=tgz" -o bundle.tgz`
3. Extract to `bang-olufsen-clone/bundles/<label>/`
