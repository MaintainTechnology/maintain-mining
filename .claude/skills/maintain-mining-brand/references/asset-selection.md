# Asset selection and brand translation

All paths in code spans are relative to the repository root. Prefer the canonical `design-system/` originals to the copies under `website/public/brand/`. Inventory the current files when choosing assets; this map is a starting point, not permission to assume a missing file exists.

## Source map

| Need | Canonical source | How to use it |
|---|---|---|
| Identity, voice, component rules, open commercial details | `DESIGN.md` | Read before writing campaign copy or selecting a treatment. |
| Colour, type, space, radius, shadow, motion, backgrounds, severity | `design-system/tokens.json`, `design-system/tokens.css` | Resolve semantic roles. Scale spacing/type for the output medium without adding a new brand palette. |
| Complete rendered system | `design-system/index.html` | Inspect combinations, hierarchy, logos, and signature treatments. |
| Full wordmark on dark | `design-system/assets/logo/wordmark-on-dark.svg` | White lockup; preferred on dark ads. |
| Full wordmark on light | `design-system/assets/logo/wordmark-on-light.svg` | Graphite lockup on paper/white. |
| Standalone chevrons | `design-system/assets/logo/mark.svg` | Graphite on light; useful for avatars or small secondary identity. Use a suitable full lockup when brand recognition needs the name. |
| Icons | `design-system/assets/icons/i-*.svg`, `design-system/assets/sprite.svg` | Reuse the same paths and stroke grammar; see mappings below. |
| Original graphics | `design-system/graphics/` | Prefer sufficient-resolution originals for export and transparency. Read its `README.md` before treating legacy filenames as colour guidance. |
| Lightweight previews | `design-system/graphics/web/` | Useful for discovery and previews; check pixel dimensions before using in final exports. |
| Composition sample | `design-system/1785385932730.jpeg` | Reference only, not an output background or photo source. |

## Graphics by purpose

| Direction | Original files | Suitable use |
|---|---|---|
| Mine terrain / asset intelligence | `cover.jpg`, `mountain forms 1.png`, `mountain forms 2.png` | Hero image field, infographic edge, or restrained terrain footer. Keep detailed wireframe lines out of text zones. |
| Quiet dark field | `cover 2.jpg`, `section.jpg`, `gradient.jpg`, `gradient.png` | Space for a large headline or data block without competing detail. |
| Atmospheric depth | `green-gradient.png`, `blue-gradient.png`, `Gradient-pantone-1.png`, `blu-gradient.svg` | Neutral charcoal/steel glow; inspect transparency and composition first. Legacy colour names do not authorise coloured tinting. |
| Light editorial canvas | `gradient-white.jpg`, `white bg.jpg`, `white-gradient.png`, `white-lineargradient.png`, `mountain.svg` | Use graphite logo, ink/slate text, and subtle terrain or fades. |

Keep rasters desaturated charcoal. Do not run the historical `recolor.py` or recolour canonical graphics. Crop/place assets deliberately, preserve aspect ratio, and avoid enlarging small web derivatives into visibly soft exports. Opacity and scrims may help integration without changing the underlying asset.

## Icons with a job

The shipped set contains `check`, `clipboard`, `search`, `shield`, `chart`, `network`, `speed`, `star`, `cpu`, `mail`, `phone`, `pin`, `arrow-right`, and `menu`, each named `i-<name>.svg`.

- Inspection/finding: clipboard or search.
- Asset signal/analysis: cpu, network, or chart.
- Performance/action: speed, check, or arrow-right.
- Risk/protection: shield, with specific supported copy rather than an implied certification.
- Contact/location: mail, phone, or pin only when the associated detail is confirmed.

Use icons only when they clarify content. Keep 24 x 24 viewBox, stroke width 2, round caps/joins, no fill; scale consistently. Default to steel-bright on dark and graphite on light. Individual SVGs ship an inline graphite `color`; set the intended colour in an export copy or inline composition and verify it rendered. A parent CSS colour may not override the inline style, and an external `<img>` does not inherit it. Do not mix emoji, filled icons, or an unrelated library. If an essential symbol is missing, draw it in the same grammar.

## Photography and generated imagery

Use relevant mine-site, equipment, inspection, plant, or operator imagery. Prefer user-supplied/owned photographs, then appropriately licensed imagery. Website stock images are placeholders, not evidence of Maintain Mining customers or operations. Confirm suitability for commercial use before describing an export as ready to publish; do not extract the sample's construction photos or third-party logos for reuse.

Photography may retain muted colour. The spec's baseline is `saturate(.6) contrast(1.04) brightness(.95)`; use a comparable treatment in the chosen design tool and charcoal scrims where needed for legibility. Preserve useful safety colours and realistic equipment detail. Static ads use the resting treatment, not website hover effects.

When generating a scene, describe the subject, mining context, composition, lighting, photographic treatment, and reserved copy space. Request no lettering, logos, badges, charts, or watermarks in the image layer. Composite the exact logo, real fonts, icons, and verified data separately when the workflow allows. If a single-pass generated visual is explicitly requested, supply the actual reference assets and inspect identity/text fidelity; do not claim exact compliance if it fails.

Check for malformed machinery, implausible PPE or work practices, invented interfaces, and incidental third-party branding. Generated people or scenes must not be represented as real customers, testimonials, or documented project results. If suitable photography is unavailable, use the repository's terrain graphics rather than inventing site provenance.
