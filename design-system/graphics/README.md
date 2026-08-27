# Brand graphics (charcoal)

Backgrounds, gradients and wireframe-terrain graphics for **Maintain Mining**,
rendered in the brand's graphite register: every raster here is **desaturated
charcoal** (luminance preserved, hue removed), matching the graphite `#303234`
brand and the shaft `#26282B` grounds.

## History (why the filenames have colour words)

The art started life as Maintain Audits work (green highlights on deep teal),
was hue-reflected onto the Maintain family's violet → red-purple → red ramp
(`recolor.py`, `new_hue = (473 - hue) mod 360`), and was finally **desaturated
to charcoal** for the graphite brand (PIL grayscale conversion, alpha channels
preserved). Structure, wireframe density and glow falloff are untouched
throughout — only colour ever moved.

> **Filenames keep their legacy colour words** (`green-gradient.png`,
> `blue-gradient.png`, `blu-gradient.svg`). Renaming them would break any deck or
> doc that already links them; the contents are neutral charcoal.

Do **not** re-run `recolor.py` — it is the historical hue pipeline and has
nothing to operate on in desaturated art. Do not re-tint the rasters; the
charcoal is the brand.

## Files

| File | What it is |
|---|---|
| `cover.jpg` | Charcoal wireframe mountains — the hero background |
| `cover 2.jpg` | Charcoal diagonal gradient wash |
| `mountain forms 1.png` / `mountain forms 2.png` | Wireframe terrain, light lines on black |
| `section.jpg` | Dark section background with a soft glow |
| `green-gradient.png` | Radial glow blob (alpha PNG) |
| `blue-gradient.png` | Softer glow blob (alpha PNG) |
| `Gradient-pantone-1.png` | Tall glow on dark (alpha PNG) |
| `gradient.jpg` / `gradient.png` | Perspective gradient (landscape / portrait) |
| `gradient-white.jpg` | Soft white → gray wash (light background) |
| `white bg.jpg` | Light base with a corner glow |
| `white-gradient.png` / `white-lineargradient.png` | Neutral light fades (alpha PNGs) |
| `blu-gradient.svg` | Vector glow blob, steel `#5F6570` |
| `mountain.svg` | Line-art terrain for light surfaces; gradient stops on the brand values `#131416 → #303234` |

## `web/`

Optimised copies (flattened, resized, JPEG) that the design-system `index.html`
paints — the page pulls ~1 MB instead of ~120 MB. The full-resolution and
transparent-PNG originals in this folder are the real assets to hand to
designers.

`web_optimize.py` rebuilds the `web/` derivatives (backdrop constant is the
shaft ground). Both scripts resolve their paths from the script location — no
absolute paths, no sibling repos required.
