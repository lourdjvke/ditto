---
name: Next dev cache isolation
description: A workspace-specific constraint for validating the imported Next.js app
---

Do not run a production Next.js build while the same project is being served by `next dev`.

**Why:** Both processes write to `.next`; concurrent access can leave the development server with missing chunks and manifest files even when the source and production build are valid.

**How to apply:** Stop or avoid the dev workflow before running a production build, then clear the generated `.next` directory and restart the dev workflow for preview validation.