---
name: Ditto clone workflow
description: How to submit, download, and integrate Ditto page clones into the Next.js project at bang-olufsen-clone/project/
---

## API key
Stored as env secret — do NOT hardcode. Look it up via environment-secrets skill.

## Submit a job
```bash
curl -X POST https://api.ditto.site/v1/clones \
  -H "Authorization: Bearer $DITTO_KEY" \
  -H "content-type: application/json" \
  -d '{"url":"<URL>","options":{"mode":"single","framework":"next","styling":"tailwind","verify":true}}'
```
Returns `{ jobId, status }`. Status is usually `cached` immediately for previously-cloned URLs.

## Download bundle
```bash
curl -L -H "Authorization: Bearer $DITTO_KEY" \
  "https://api.ditto.site/v1/clones/<jobId>/bundle?format=tgz" \
  -o bundle.tgz
tar -xzf bundle.tgz -C <dest>/
```

## Integrate into project
- Copy `src/app/` contents into `project/src/app/<route-path>/`
- Copy `public/` into `project/public/` (content-hash filenames, no collisions)
- Fix `layout.tsx`: strip `<html>/<body>`, remove `SITE_ORIGIN` import, replace `RootLayout` with minimal `Layout({ children }) { return <>{children}</>; }`
- Fix lib imports: `../../lib/utils` → `@/lib/utils` (tsconfig has `@/*` alias → `./src/*`)
- `ditto.css` may be empty — all CSS vars live in `globals.css` for some bundles

## Known pitfalls
- Sub-route layouts MUST NOT have `<html>/<body>` — Next.js App Router only allows these in the root layout
- `SITE_ORIGIN` import will break since `lib/site.ts` is stub-only; remove and hardcode `http://localhost:3000`
- All captured elements have `pointer-events-none` — interactive JS does NOT transfer (except `"use client"` components like DropdownMenu which have real event handlers)
- `ditto.css` is sometimes empty; CSS vars are in `globals.css` instead

## Tracked job IDs
See `bang-olufsen-clone/explored_routes.json` for B&O jobs.
Configurator: `3c389802-1e5c-4146-8f21-90505822fd69` → `/studio/configuration/caps/ada693e3-60f5-41f8-b22e-eef3f6c9c833`
