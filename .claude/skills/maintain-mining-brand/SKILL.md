---
name: maintain-mining-brand
description: Produce any on-brand Maintain Mining visual — web pages, infographics, social graphics, report layouts, slide covers, marketing assets. Use whenever a task involves creating or styling Maintain Mining visual output, or when brand colours, fonts, logos or imagery are needed.
---

# Maintain Mining brand production

Everything needed to produce an on-brand visual without opening the whole system.
Full spec: [DESIGN.md](../../../DESIGN.md) · tokens: [design-system/tokens.json](../../../design-system/tokens.json).

The brand is two-tone heavy-machinery: **graphite** (the grayish black of the
fleet) + **safety amber** (the equipment-yellow of the mine site). Everything
else is charcoal, steel and paper.

## Palette (hex, ready to paste)

| Value | Hex | Use |
|---|---|---|
| **Graphite (logo, core brand)** | `#303234` | The one flat brand value — marks, large graphics, ink accents. **Light surfaces only** (1.2:1 on dark). |
| **Safety amber** | `#FFB800` | THE accent: primary CTA, hazard highlight, stat callout, tape keyline. One amber element per surface. Pit-black ink only. |
| Shaft | `#26282B` | The signature dark ground — default surface |
| Pit black / deep / raised | `#131416` / `#0E0F10` / `#1C1E20` | Page base / recessed / raised panels |
| Steel / steel bright | `#9AA1A8` / `#C4CAD0` | Muted accents and icon strokes on dark (5.7:1 / 8.9:1 on shaft) |
| Steel deep | `#5F6570` | Muted steel graphics/text on light (5.9:1 on white) |
| Seam gradient | `linear-gradient(115deg,#131416 0%,#303234 52%,#5F6570 100%)` | Charcoal → graphite → steel. Light surfaces only. |
| Cloud / white | `#F5F4F1` / `#FFFFFF` | Light surfaces |
| Ink / slate | `#26282B` / `#5C6670` | Body / muted text on light |
| Gray tints | `#F1F2F3` / `#E4E6E8` | Chips and highlight tints on light |
| Amber tint | `#FFF1CC` | Pale amber chip on light (ink text on it) |
| On-dark text | `#FFFFFF` / 72% white / 55% white | Body / muted / faint on dark |

Severity (functional, not brand): pass `#0C4A26`/`#E5F8EE` · low `#1E40AF`/`#DBEAFE` ·
medium `#854D0E`/`#FEF9C3` · high `#9A3412`/`#FFEDD5` · critical `#991B1B`/`#FEE2E2`.

## Type

- Display/headings: **Albert Sans** 700/800, tracking −0.02em, leading 1.05.
- Body/UI: **Inter** 400/500/600, leading 1.6, measure 65–75ch.
- Google Fonts: `family=Albert+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700`

## Assets (relative to repo root)

- Logo: `design-system/assets/logo/mark.svg` (chevrons alone),
  `wordmark-on-dark.svg` (all white), `wordmark-on-light.svg` (all graphite).
  The mark is graphite `#303234` on light and **inverts to white on dark —
  never place graphite on a dark ground**. Clear space ≥ cap height; min width
  120px; never re-set MINING in a font.
- Icons: `design-system/assets/icons/i-*.svg` (14, stroke 2, currentColor) or
  `design-system/assets/sprite.svg` via `<use href="...#i-name"/>`. Tint steel
  bright `#C4CAD0` on dark by default.
- Imagery: `design-system/graphics/web/*.jpg` for web weight,
  `design-system/graphics/*` full-res for print/decks — all desaturated
  charcoal. Hero: `cover.jpg`; terrain: `mountain-forms-*.jpg`; glows:
  `green-gradient` / `blue-gradient` (filenames keep legacy colour words);
  light surfaces: `white-*`, `gradient-white`.

## Signature moves (use at least one per visual)

1. **Survey grid**: 1px `rgba(255,184,0,.06)` amber grid at 40px pitch on shaft.
2. **Floodlight**: radial `rgba(255,184,0,.12)` amber glow from the upper region.
3. **Hazard tape**: `repeating-linear-gradient(135deg,#FFB800 0 12px,#131416 12px 24px)`
   as a 4–8px keyline (divider, table rule, chart annotation). Never behind text.
4. **Seam gradient text**: the charcoal → graphite → steel ramp clipped to
   Albert Sans 800 display type — light surfaces only, sparingly.
5. **Terrain footer/edge**: charcoal mountain-forms imagery under a dark scrim.

## Checklist before delivering

- [ ] Only semantic/brand values above — no ad-hoc hex.
- [ ] Amber appears at most once per surface, black ink on it.
- [ ] Graphite never sits on a dark ground (logo inverts to white there).
- [ ] Body text contrast ≥4.5:1 (the pairs above are pre-verified).
- [ ] Logo from the SVG files, clear space respected.
- [ ] Colour never carries meaning alone (label severity).
- [ ] No invented domains/entities/prices (see DESIGN.md §10).
