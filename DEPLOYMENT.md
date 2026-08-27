# Deploying Maintain Mining to Vercel

The site is [`website/`](website); the brand system it builds against is
[`design-system/`](design-system). They deploy together, because
`website/app/globals.css` imports `design-system/tokens.css` directly — the
design system stays the single source of truth rather than being copied.

That one fact drives the only non-default setting below.

---

## 1. Vercel project settings

Create the project from the GitHub repo (`MaintainTechnology/maintain-mining`),
then set:

| Setting | Value | Why |
|---|---|---|
| **Root Directory** | `website` | The Next.js app is not at the repo root. |
| **Include files outside of the Root Directory** | **enabled** | Required. The build reads `design-system/tokens.css`, one level above the root directory. |
| Framework Preset | Next.js | Auto-detected, and pinned in `website/vercel.json`. |
| Node.js Version | 22.x | Pinned via `engines` in `website/package.json`. |
| Build / Install / Output | leave default | `next build` runs behind a preflight check; output is auto-detected. |

If the "include files outside" option is off, the build fails immediately with a
message naming this exact setting — see [`website/scripts/preflight.mjs`](website/scripts/preflight.mjs).
That guard exists so the failure is one readable line instead of a Turbopack
path error.

## 2. Environment variables

Both are **optional**. The site builds and serves correctly with neither set.

| Variable | Scope | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | Production (+ Preview if wanted) | Enables `/api/assistant`. While unset the route answers `503` rather than pretending to work. Store as a secret; never rename it with a `NEXT_PUBLIC_` prefix, which would inline it into the browser bundle. |
| `NEXT_PUBLIC_SITE_URL` | Production, once a custom domain exists | Canonical origin, no trailing slash. Leave unset until then. |

**Do not set `NEXT_PUBLIC_SITE_URL` to a `*.vercel.app` hostname.**
[`website/lib/site.ts`](website/lib/site.ts) already resolves the origin per
environment, and hard-coding it would break preview deployments:

| Environment | Resolved origin | Indexable |
|---|---|---|
| Production | `https://$VERCEL_PROJECT_PRODUCTION_URL` | yes |
| Preview | `https://$VERCEL_URL` (per deployment) | no — `robots.txt` disallows all |
| Local | `http://localhost:3000` | no |

Preview deployments are deliberately noindexed so branch builds never compete
with the real site in search results.

## 3. What ships

Everything under `website/` plus `design-system/`. The ~90 MB of full-resolution
design-system master art is gitignored (see the root `.gitignore`), so it never
reaches the build; the web-optimised copies the site actually serves live in
`website/public/brand/`.

`website/vercel.json` sets the framework, security headers
(`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
`Permissions-Policy`), long-lived caching for `/brand/*`, and
`PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` so the Playwright devDependency (used only
by the local verification scripts) does not download ~400 MB of browsers during
every CI install.

## 4. First deploy

```bash
git add -A
git commit -m "Add Maintain Mining design system and website"
git push origin main
```

Vercel builds on push. Production tracks `main`; every other branch and PR gets
its own preview URL.

## 5. After the first deploy

- Check `/robots.txt` on production shows `Allow: /` and a `Sitemap:` line on
  the real hostname (a preview should show `Disallow: /`).
- Point a custom domain at the project, then set `NEXT_PUBLIC_SITE_URL` to it.
- Replace the stock Unsplash photography with owned site photography, keeping
  the `.photo-muted` treatment (DESIGN.md §10).
- Confirm the legal entity and ABN for the footer (DESIGN.md §10) before the
  site is used commercially.

### Deliberately not configured

- **HSTS** — Vercel already sets it on `*.vercel.app`. Add it for a custom
  domain only when you are certain that domain is HTTPS-only forever; the
  header has a long lock-in tail.
- **Content-Security-Policy** — needs a nonce strategy for Next's inline
  bootstrap and GSAP. Worth doing, but a wrong policy silently breaks the site,
  so it should be added and verified deliberately rather than guessed here.
- **Function region** — the site is almost entirely static; only
  `/api/assistant` runs server-side. Set a region near your users (e.g. `syd1`)
  in project settings if that endpoint gets real traffic.
