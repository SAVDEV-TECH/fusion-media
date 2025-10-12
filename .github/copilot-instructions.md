This repository is a small Next.js 15 app (app router) with Tailwind CSS and a shadcn-style component set.

Quick context for an AI coding agent:
- Framework: Next.js (app router) — entry points: `app/layout.tsx`, `app/page.tsx`.
- Styling: Tailwind CSS (configured via `app/globals.css`) and `class-variance-authority` for component variants.
- UI patterns: Reusable UI primitives live in `components/ui/*` (`button.tsx`, `card.tsx`, `input.tsx`). Use `cn` from `lib/utils.ts` to compose classNames and `cva` for variants.
- Images/assets: Served from `public/` (e.g. `/fusion.jpg`, `/fm.jpg`). Use Next.js image optimizations only if converting to `next/image`.

Build / dev / lint commands (project-specific):
- Start dev server: `npm run dev` (runs `next dev`).
- Build: `npm run build` (runs `next build`).
- Start production server: `npm run start` (runs `next start`).
- Lint: `npm run lint` (runs `eslint`).

Conventions and patterns to follow when modifying code:
- App router: prefer placing pages and layouts under `app/`. `layout.tsx` defines global fonts and should not be removed.
- Client components: files that use state or browser-only APIs include `'use client'` at top (see `app/page.tsx`). Keep server/client boundaries in mind when moving code.
- Component imports: use absolute aliases defined in `components.json` (e.g. `@/components`, `@/lib/utils`). Keep imports consistent with these aliases.
- Styling composition: use the `cn` helper (`lib/utils.ts`) combined with Tailwind class strings. For reusable variants, use `cva` as in `components/ui/button.tsx`.

Testing and verification for edits (fast local checks):
- After edits, run `npm run dev` and open http://localhost:3000 to smoke-test visual/interactive changes.
- Run `npm run build` to catch compilation/type issues and Next.js-specific errors.
- Run `npm run lint` to surface style and obvious code issues.

Files that reveal important conventions (examples):
- `app/page.tsx` — hero, nav, and many client-only interactions; shows use of `framer-motion`, `lucide-react`, and `next/link`.
- `components/ui/button.tsx` — pattern for CVA-driven variants and using Radix Slot for `asChild`.
- `components/ui/card.tsx`, `components/ui/input.tsx` — small primitives demonstrating `cn` usage.
- `lib/utils.ts` — `cn` wrapper around `clsx` + `tailwind-merge` (use this for merging classes safely).
- `components.json` — explains alias mapping and shadcn integration; follow its conventions when adding components.

Integration notes and caveats:
- The project uses Next.js 15 and React 19 — avoid downgrading features or assuming older router APIs.
- No API routes or backend code are present. If adding server endpoints, place them under `app/api/` following Next.js app-router conventions.
- Keep third-party dependencies minimal; new dependencies must be added to `package.json` and `package-lock.json` updated.

When creating commits or PRs, prefer small, focused changes. For visual changes include a brief note how to verify (which page/route and what to click).

If anything in this file is unclear or more examples are needed (tests, CI, or deployment notes), ask the repo owner for preferred workflows.

-- End of instructions
