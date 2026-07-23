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
