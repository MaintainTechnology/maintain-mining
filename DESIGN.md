# Maintain Mining — Design Specification

The durable visual decisions for the Maintain Mining brand (v2 — graphite). The
machine-readable source of truth is [`design-system/tokens.css`](design-system/tokens.css) /
[`tokens.json`](design-system/tokens.json); the living render is
[`design-system/index.html`](design-system/index.html). When this document and the
tokens disagree: the tokens win — then fix this document.

---

## 1. Identity

Maintain Mining is the Maintain group's mining-sector brand: predictive
maintenance and asset intelligence for mining operations — the fleet, the plant
and the pit. The brand speaks the two-tone language of the heavy-machinery world
(the register of Komatsu and Caterpillar):

1. **Graphite `#303234`** — the grayish black of the machine fleet — is the one
   flat brand value and the logo colour (user-pinned; supersedes the earlier
   red-purple direction).
2. **Safety amber `#FFB800`** — the equipment-yellow of the mine site — is the
   single working accent: primary actions, hazard highlights, stat callouts,
   tape keylines.

Everything else is charcoal ground, steel detail, and paper. From the Maintain
family the brand inherits its structural system: Albert Sans + Inter, the 4px
spacing scale, the survey-grid texture, and the wireframe terrain imagery — now
desaturated to charcoal so the ground itself wears the fleet's graphite.

## 2. Logo

**Construction.** The family mark — three ascending chevron terraces — locked up
with "Maintain" in the family letterforms and **MINING** letter-spaced across the
wordmark's full width (an engineering nameplate, not a subtitle). The MINING
letterforms are drawn geometry, not font text — they survive any environment.

**Files** (in [`design-system/assets/logo/`](design-system/assets/logo)):

| File | Use |
|---|---|
| `mark.svg` | The chevron mark alone, graphite — avatars, favicons, watermarks (light surfaces) |
| `wordmark-on-light.svg` | Full lockup, all graphite `#303234` — light surfaces |
| `wordmark-on-dark.svg` | Full lockup, all white — dark surfaces and imagery |

**Rules.**
- Clear space ≥ the cap height of "Maintain" on all sides; minimum lockup width 120px.
- On light surfaces the whole lockup is graphite. On dark surfaces the whole
  lockup is white — **never place the graphite mark on a dark ground** (it
  reads 1.2:1 on shaft; the inversion is the rule, exactly as the reference
  brands treat their own marks on dark).
- On photography, sit the white lockup over a ≥50% charcoal scrim.
- Never stretch, outline, shadow, gradient-fill, or recolour. Never set the
  sub-word in a typeface — use the drawn files.

## 3. Color

### Brand anchors

| Token | Hex | Role |
|---|---|---|
| `--mm-graphite` | `#303234` | **Logo mark · core brand · the one flat brand value** (light surfaces only) |
| `--mm-amber` | `#FFB800` | **Safety amber** — primary action, hazard, keylines (pit-black ink only) |

Seam gradient: `linear-gradient(115deg, #131416 0%, #303234 52%, #5F6570 100%)`
(`--mm-seam-gradient`; utilities `.mm-gradient`, `.mm-gradient-text`) — charcoal
→ graphite → steel. **Light surfaces only**: the charcoal start vanishes on the
dark grounds.

### Working palette

| Token | Hex | Role |
|---|---|---|
| `--mm-shaft` | `#26282B` | Primary dark surface — the signature ground |
| `--mm-black` / `-2` / `-3` | `#131416` / `#0E0F10` / `#1C1E20` | Pit-black base / deeper panel / raised panel |
| `--mm-steel` | `#9AA1A8` | Muted steel accent on dark (5.7:1 on shaft) |
| `--mm-steel-bright` | `#C4CAD0` | Icon and detail steel on dark (8.9:1 on shaft) |
| `--mm-steel-deep` | `#5F6570` | Muted steel text/graphics on light (5.9:1 on white) |
| `--mm-gray-tint-1` / `-2` | `#F1F2F3` / `#E4E6E8` | Pale chips and highlight tints on light |
| `--mm-amber-tint` | `#FFF1CC` | Pale amber chip on light (ink text on it) |
| `--mm-cloud` / `--mm-white` | `#F5F4F1` / `#FFFFFF` | Paper / pure surface |
| `--mm-ink` / `--mm-slate` | `#26282B` / `#5C6670` | Body / muted text on light |
| `--mm-surface-gray-1` / `-2` | `#F8F9F9` / `#F1F2F3` | Tinted light surfaces |

### Semantic roles — build against these

`--color-bg` (shaft) · `--color-bg-deep` · `--color-surface` ·
`--color-surface-soft` · `--color-text` · `--color-text-muted` ·
`--color-primary` (amber) · `--color-primary-ink` (pit black) ·
`--color-accent` (graphite) · `--color-highlight` (amber, alias) ·
`--color-highlight-ink` · `--color-gradient` · `--color-line` · `--color-line-light`.

### Amber rules (hard rules, not taste)

1. One amber element per surface — the priority action, a hazard callout, a
   stat, or a keyline. Never two competing.
2. The only ink on amber is pit black (`--mm-black`, 10.6:1).
3. Never amber body text; on light surfaces amber appears only as
   `--mm-amber-tint` chips with ink text, or as the hazard tape.
4. The `.mm-hazard` tape (amber/black diagonal stripes) is a keyline — dividers,
   table top-rules, chart annotations, 4–8px tall. Never a fill behind text.

### Graphite rules

1. Graphite is the brand on **light** surfaces: logo, large graphic shapes, ink
   accents. On dark grounds it disappears (1.2:1) — the logo inverts to white,
   and graphite shapes become steel or white.
2. Don't tint graphite toward a hue; the brand's grayish black is neutral.

### Status severity — deliberately not rebranded

Functional traffic-light semantics survive palette changes. Green means pass.
Always pair colour with a label. `--sev-pass|low|medium|high|critical` (fg/bg
pairs in tokens).

### Accessibility (verified, WCAG 2.2)

amber on shaft 8.5:1 · amber on black 10.6:1 · black on amber 10.6:1 · white on
shaft 14.8:1 · white on graphite 12.9:1 · graphite on white 12.9:1 · graphite on
cloud 11.7:1 · steel on shaft 5.7:1 · steel-bright on shaft 8.9:1 · steel-deep
on white 5.9:1 · slate on white 5.9:1 · ink on white 14.8:1. Body text ≥ 4.5:1
always; large display/graphics ≥ 3:1. (Graphite on shaft is 1.15:1 — the
documented never-do.)

## 4. Typography

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display / headings | **Albert Sans** | 700, 800 | Geometric, heavy, tight (−0.02em), 1.05 leading |
| Body / UI | **Inter** | 400, 500, 600 | 1.6 leading, 65–75ch measure |
| Social graphics alt | Vela Sans | — | Falls back to Albert Sans |

Scale (rem): display `clamp(2.75,6vw,4.5)` · h1 `clamp(2,4vw,3)` · h2
`clamp(1.5,3vw,2)` · h3 1.375 · h4 1.125 · body-lg 1.125 · body 1 · sm 0.875 ·
xs 0.75 · overline 0.6875. Load via Google Fonts (Albert Sans + Inter). A
contrast pairing, not two lookalikes: headlines hit hard, body stays neutral.

## 5. Iconography

14 line icons, 24×24, `stroke: currentColor`, width 2, round caps/joins:
check, clipboard, search, shield, chart, network, speed, star, cpu, mail, phone,
pin, arrow-right, menu. Individual files in `design-system/assets/icons/`
(shipped ink: graphite), bundled in `assets/sprite.svg` for `<use>`. On dark,
tint icons steel-bright `#C4CAD0` by default. Don't mix in another icon set;
new icons are drawn in the same grammar.

## 6. Space, radius, elevation, motion

- **Space** (4px base): 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
- **Radius**: 0 · 6 · 10 · 16 · 24 · pill.
- **Shadows**: sm/md/lg charcoal-tinted; `--glow-amber` for hover emphasis on
  dark only.
- **Motion**: 120/200/320ms, `cubic-bezier(0.22,1,0.36,1)`; one authored moment
  per surface, `prefers-reduced-motion` respected (tokens ship the guard).
  The brand's signature moment is the **conveyor crawl**: the `.mm-hazard` tape
  slides slowly along its diagonal (~8px/s, linear, infinite) on hero surfaces
  only — never on more than one element per page, and the reduced-motion guard
  stops it.

## 7. Signature textures & imagery

- **Survey grid** `.mm-grid-bg` — 1px amber-tinted grid on shaft, 40px pitch.
- **Floodlight** `.mm-glow` — soft radial amber light, upper region.
- **Hazard tape** `.mm-hazard` — amber/black 135° stripes (see amber rules).
- **Terrain art** — desaturated charcoal wireframe mountain/gradient rasters in
  `design-system/graphics/` (web-optimized copies in `graphics/web/`). Filenames
  keep legacy colour words; contents are charcoal. The historical recolour
  pipeline (`recolor.py`) no longer applies — the art was desaturated for the
  graphite brand (see `graphics/README.md`).

## 8. Components (baseline patterns)

- **Buttons**: primary (amber bg, pit-black ink, amber glow on hover — the one
  amber element on its surface); quiet (raised charcoal, white text, steel
  hover); ghost (hairline, amber on hover). 10px radius, 600 weight.
- **Status pills**: severity bg/fg pairs, icon + label.
- **Stat block**: shaft panel, Albert 800 number in amber, uppercase tracked
  caption.
- **Finding card**: white surface, severity pill, ink heading, slate body, mono
  reference line.
- Hairlines: `--color-line` on dark, `--color-line-light` on light — never
  opaque grey borders.

## 9. Voice

Lead with the point; support with evidence and scoring. Site operators are
time-poor. Controls name their action ("Act on signal", not "Submit"). Errors
name the problem and the recovery. No hype adjectives; the numbers carry the
claim.

## 10. Open questions

- Legal entity + ABN for Maintain Mining footers (index.html carries a TODO;
  currently reads "part of the Maintain group").
- Group contact details shown in the style-guide footer
  (`accounts@maintain.com.au`, PO Box 447, Coorparoo QLD 4151) — inherited from
  the Maintain family template; confirm they apply to Maintain Mining before
  external use.
- Public domain / website URL for the brand (none invented anywhere).
- Real site photography. The website now carries stock mining photography as
  placeholders (Unsplash, hotlinked). Photography is exempt from §7's
  desaturated-charcoal rule by explicit direction: photos render through the
  site's `.photo-muted` treatment (`saturate(.6) contrast(1.04)
  brightness(.95)`) — muted colour at rest, full colour on hover/focus of the
  surrounding `.photo-frame`; hero background photos stay muted under heavy
  charcoal scrims. Replace with owned site photography, keeping the same
  treatment.
- Vela Sans licensing for social templates (falls back to Albert Sans).
