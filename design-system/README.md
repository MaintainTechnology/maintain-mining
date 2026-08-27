# Maintain Mining — Design System

The canonical reference for every Maintain Mining visual: social graphics, branded
reports, letterhead, web, and product UI. **Build against this, not ad-hoc values.**

## Files

| File | What it is |
|---|---|
| [`../DESIGN.md`](../DESIGN.md) | **The spec.** Colour, type, logo, icons, space, motion, imagery, components, usage rules and open questions. Start here. |
| [`tokens.css`](tokens.css) | CSS custom properties + signature background utilities. Link this in any web build. |
| [`tokens.json`](tokens.json) | The same tokens, machine-readable (for scripts, Figma sync, other tooling). |
| [`index.html`](index.html) | **Living style guide** — renders the whole system. Open it to see everything at once. |
| [`assets/logo/`](assets/logo) | `mark.svg`, `wordmark-on-dark.svg`, `wordmark-on-light.svg` |
| [`assets/icons/`](assets/icons) | 14 brand line icons (`i-*.svg`) |
| [`assets/sprite.svg`](assets/sprite.svg) | All symbols bundled for `<use>` |
| [`graphics/`](graphics) | Full-resolution charcoal backgrounds, gradients and terrain art |

## The palette

Maintain Mining speaks the two-tone language of the heavy-machinery world
(the Komatsu / Caterpillar register):

| | Hex | Role |
|---|---|---|
| **Graphite** | **`#303234`** | The one flat brand value and **the logo colour** — grayish black, light surfaces only (the logo inverts to white on dark) |
| **Safety amber** | **`#FFB800`** | The single working accent: primary CTAs, hazard highlights, stat callouts, `.mm-hazard` tape keylines. **One per surface, pit-black ink only.** |
| Shaft | `#26282B` | Signature dark ground |
| Pit blacks | `#131416` / `#0E0F10` / `#1C1E20` | Base / recessed / raised panels |
| Steels | `#9AA1A8` / `#C4CAD0` / `#5F6570` | Muted accents, icon strokes, on-light details |
| Paper | `#F5F4F1` / `#FFFFFF` | Light surfaces (`#26282B` ink, `#5C6670` slate) |

Seam gradient (light surfaces only): `linear-gradient(115deg, #131416, #303234 52%, #5F6570)`
(`--mm-seam-gradient`; utilities `.mm-gradient`, `.mm-gradient-text`).

## Use it

**Web / HTML**
```html
<link rel="stylesheet" href="design-system/tokens.css">
<!-- the one priority action on a surface -->
<button style="background:var(--color-primary); color:var(--color-primary-ink)">Act on signal</button>
<!-- icon (from sprite) -->
<svg class="icon" width="24" height="24" style="color:var(--mm-steel-bright)"><use href="design-system/assets/sprite.svg#i-shield"/></svg>
<!-- signature brand surface -->
<section class="mm-grid-bg mm-glow"> … </section>
<!-- hazard tape divider -->
<div class="mm-hazard" style="height:6px"></div>
```
Icon base style: `.icon{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}`.

**Documents / graphics (non-web)**
Use the hex values in [`tokens.json`](tokens.json) and the fonts **Albert Sans**
(display) + **Inter** (body). Logo and icon SVGs in `assets/` import directly into
Canva, Figma, Illustrator, Word.

**View the style guide**
Open [`index.html`](index.html) directly, or serve the repo root and visit
`/design-system/index.html` (e.g. `python -m http.server 8123`).

## Rules that keep it coherent

- Graphite is the brand on light; on dark it disappears (1.2:1) — the logo and
  any graphite shape invert to white there.
- Amber is a signal, not a theme: one amber element per surface, black ink on it.
- **Status severity** (`--sev-*`) is deliberately *not* rebranded: functional
  traffic-light semantics, always paired with a label.
- All imagery in `graphics/` is desaturated charcoal; filenames keep legacy
  colour words on purpose. Don't re-tint (see `graphics/README.md`).
- Every colour pair shipped here is contrast-verified (WCAG 2.2 numbers in
  `tokens.json` and DESIGN.md §3).
