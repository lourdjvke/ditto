# Replit Live Guide — Bang & Olufsen Clone

## Steps to get it running

1. **Install dependencies**
   ```bash
   cd bang-olufsen-clone/project
   npm install
   ```

2. **Artifact + workflow auto-configured**
   - Artifact: `bo-clone` → preview path `/`
   - Workflow: `artifacts/bo-clone: web`
   - Command: `cd /home/runner/workspace/bang-olufsen-clone/project && npm run dev -- -H 0.0.0.0 -p $PORT`

3. **Start the workflow**
   Use the WorkflowsRestart tool:
   ```
   { "name": "artifacts/bo-clone: web" }
   ```

4. **Verify** — screenshot `/` via appPreview (artifactDirName: `bo-clone`)

## Notes
- Stack: Next.js 15 App Router, Tailwind CSS v4, TypeScript
- No secrets or external services required
- All assets are materialized locally under `bang-olufsen-clone/project/public/assets/cloned/`
- Safe edit areas: `src/app/content.ts`, `src/app/sections/`, `src/app/components/`
- Do not casually edit `src/app/ditto/` (runtime interaction utilities)
