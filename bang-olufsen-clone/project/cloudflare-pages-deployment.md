# Cloudflare Pages — Deployment Instructions

## What changed
`next.config.mjs` now has `output: "export"` which tells Next.js to emit a fully static site into the `out/` folder instead of a Node.js server. Cloudflare Pages serves that folder directly — no server required.

## Build once locally (optional sanity check)
```bash
cd bang-olufsen-clone/project
pnpm run build
# produces bang-olufsen-clone/project/out/
```

## Deploy via Cloudflare Pages dashboard

1. Push this repo to GitHub (or GitLab).
2. Go to **Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository.
4. Set **Build settings**:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `cd bang-olufsen-clone/project && pnpm run build`
   - **Build output directory**: `bang-olufsen-clone/project/out`
5. Click **Save and Deploy**.

Cloudflare runs the build and publishes the `out/` folder to its CDN. Every subsequent push to the default branch redeploys automatically.

## Deploy via Wrangler CLI (alternative)
```bash
# Install Wrangler globally if you haven't
npm install -g wrangler

# Build
cd bang-olufsen-clone/project
npm run build

# Deploy
cd out
wrangler pages deploy . --project-name bang-olufsen-clone
```

## Notes
- No environment variables or secrets needed — this is a fully static clone.
- The `images: { unoptimized: true }` setting is already in `next.config.mjs`, which is required for static export (Next.js image optimization needs a server).
- All assets are local under `public/assets/cloned/` so the site works offline and on any CDN.
