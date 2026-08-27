# Maintain Mining — repo instructions for Claude

This repository holds the **Maintain Mining brand and design system** (the Maintain
group's mining-sector brand) plus the **Next.js website** built on it.

- `design-system/` — the static brand system (no build step; Python 3 + Pillow
  are its only tooling, for the graphics pipeline and ad-hoc scripts).
- `website/` — the Next.js 16 site (App Router, TypeScript, Tailwind v4, Motion,
  GSAP, Vercel AI SDK). It consumes the design system: `app/globals.css` imports
  `design-system/tokens.css` directly (the Turbopack root is widened to the repo
  root in `next.config.ts` to allow this), and brand assets are copied into
  `website/public/brand/` (source of truth stays in `design-system/assets/`).
  Commands from `website/`: `npm run dev` · `npm run build` · `npm start`.
  The `/api/assistant` route stays disabled until `ANTHROPIC_API_KEY` is set
  (see `website/.env.example`).
  Deploys to Vercel with Root Directory `website` **and** "include files outside
  the Root Directory" enabled, because the build reads `design-system/tokens.css`
  from above that root. Absolute URLs come from `website/lib/site.ts`, never a
  hard-coded origin. Full runbook: [`DEPLOYMENT.md`](DEPLOYMENT.md).

## Source of truth (in priority order)

1. [`design-system/tokens.css`](design-system/tokens.css) / [`tokens.json`](design-system/tokens.json) — every colour, type, space, radius, shadow, motion value.
2. [`DESIGN.md`](DESIGN.md) — the spec: rules, rationale, accessibility numbers, open questions.
3. [`design-system/index.html`](design-system/index.html) — the living style guide (renders everything).

If they ever disagree: tokens win → fix the docs.

## Hard rules

- **Build against semantic tokens** (`--color-primary`, `--color-accent`, …),
  never raw hex. Raw brand vars (`--mm-*`) are for defining new semantic roles only.
- **Graphite `#303234` is the only flat brand value** (user-pinned grayish
  black). It is the logo colour on **light surfaces only** — on dark grounds it
  reads 1.2:1, so the logo and any graphite shape invert to white there. Never
  place graphite on a dark ground.
- **Safety amber `#FFB800`** is the single working accent: primary actions,
  hazard highlights, stat callouts, `.mm-hazard` tape keylines. One amber
  element per surface, pit-black ink only, never amber body text.
- **Status severity colours (`--sev-*`) are not brand colours** — functional
  traffic-light semantics, deliberately un-rebranded. Pair colour with a label.
- **Logo**: use the SVGs in `design-system/assets/logo/`; the MINING sub-word is
  drawn geometry — never re-set it in a font. Clear space ≥ cap height; min width 120px.
- **Icons**: only the 14-icon brand set (`assets/icons/`, `assets/sprite.svg`);
  new icons match its grammar (24×24, stroke 2, round caps). Tint steel-bright
  `#C4CAD0` on dark.
- **Graphics** (`design-system/graphics/`): the art is desaturated charcoal —
  do not re-run `recolor.py` (historical hue pipeline) and do not re-tint the
  rasters (see `graphics/README.md`). Filenames keep legacy colour words on
  purpose (links elsewhere depend on them).
- **Fonts**: Albert Sans (display 700/800) + Inter (body 400/500/600), via Google
  Fonts. Vela Sans is a social-template alternate that falls back to Albert Sans.
- **No invented commercial facts**: no domains, entities, ABNs, prices, or
  customers. Open items live in DESIGN.md §10; the footer TODO marks the one
  placeholder.

## Common tasks

- **Preview the style guide**: serve statically and open
  `design-system/index.html` — e.g. `python -m http.server 8123` (a launch config
  named `design-system` exists in `.claude/launch.json`), or open the file directly.
- **Produce a marketing visual / infographic / report**: use the
  `maintain-mining-brand` skill (`.claude/skills/maintain-mining-brand/`) — it
  carries the palette, fonts, asset paths and layout recipes.
- **Review work for brand compliance**: spawn the `brand-guardian` agent
  (`.claude/agents/brand-guardian.md`).
- **Verify a change visually**: `npx playwright screenshot --viewport-size=1440,900
  --full-page <file-or-url> out.png` (Playwright 1.62 is installed).
- **Contrast-check a new pair** before adding it to tokens; record the ratio in
  `tokens.json` under `contrast` and in DESIGN.md §3.

## Family context

Sibling repos (`../maintain-ai`, `../maintain-audits`-era art) share the
structural system (type, spacing, textures, terrain imagery). Mining
differentiates by its two-tone heavy-machinery palette: graphite + safety amber
over charcoal, with desaturated imagery. Never copy sibling hex values into
this repo.
