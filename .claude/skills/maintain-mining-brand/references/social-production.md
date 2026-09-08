# Social visual production

Use for social ads, infographics, carousels, and cover graphics. These are adaptable art-direction defaults, not platform acceptance guarantees or a mandatory template.

## Translate the supplied reference

The repository sample is a 1080 x 1350 portrait with a quiet logo/header, approximately equal text and image columns, two stacked photographs, a large number, and a full-width footer. Its strength is the reading order and editorial contrast. For Maintain Mining:

1. Place the white Maintain Mining lockup on a dark header with generous clear space and a restrained hairline.
2. Give the text column a short overline, a strong Albert Sans headline, and either one sourced statistic or a concise qualitative benefit. Use Inter for supporting copy and source information.
3. Give the image column one dominant mining photograph or charcoal terrain asset. Add a second image only when it adds meaning. A controlled diagonal crop can echo the reference, but avoid decorative cuts through people or equipment.
4. Keep supporting text short and visually quieter. The reference's dense paragraphs and tiny attribution are not targets to reproduce at mobile size.
5. Finish with a compact CTA or brand line. Only add a destination when confirmed. Keep this neutral if the statistic already uses amber; never copy the sample's repeated yellow highlights.

Use roughly 48-80px outer margins and 32-48px gutters on a 1080px-wide master, aligned to the brand's 4px base. These are starting points: platform overlays, logo clear space, and actual text fit take precedence. Keep a consistent alignment spine from logo through headline to CTA. Avoid distributing elements evenly just to fill the canvas.

## Choose a layout that fits the message

| Recipe | Best for | Composition |
|---|---|---|
| Editorial split | Problem/solution, evidence-led ad | Text and evidence on one side; photo or terrain on the other; quiet header/footer. Closest to the sample. |
| Single finding | One verified metric or focused benefit | Large headline and evidence block, short explanation, small meaningful icon, restrained terrain edge. A qualitative statement can replace a number. |
| Process infographic | Explaining a maintenance workflow | Three or four numbered steps with brand icons and connectors; one emphasis point. Use only confirmed workflow/capability claims. |
| Comparison | Supported before/after or alternatives | Consistent scale, units, timeframe, and labelled columns; neutral baseline plus one emphasis. Never imply a measured result without evidence. |
| Carousel narrative | A topic too dense for one feed image | Hook, explanation/evidence, practical implication, next action. Adjust slide count to content; keep type roles, logo position, margins, and numbering consistent. |

For charts, build from supplied/verified data with editable geometry and exact labels. Preserve denominators, units, timeframe, and source context. Bars should use a zero baseline unless an explicit, justified exception is clearly labelled. Do not use decorative bar lengths or generated chart imagery as factual evidence.

## Type for a phone-sized view

On a 1080px-wide canvas, useful starting ranges are 64-88px headlines, 112-176px hero numerals, 32-40px body, and 28-32px source/CTA copy. These are production layout choices, not additions to the canonical token scale. Scale with judgement for the format and assess the rendered result at about 360-430px wide.

Use Albert Sans 700/800 with the brand's tight tracking and display leading; use Inter 400/500/600 with comfortable body leading. Fit copy by editing it before reducing type size. Aim for a headline readable in one glance, a single primary point, and only enough explanation to make it credible. Keep source text readable rather than hiding qualification in tiny print. Put extended context in a caption or additional slide when it cannot fit clearly.

## Format family and placement verification

Use this family to plan a campaign across Instagram/Facebook, LinkedIn, X, Threads, Pinterest, TikTok, Snapchat, and YouTube or another requested platform. Each platform has distinct organic and paid placements; confirm the particular placement before calling a file upload-ready.

| Working canvas | Starting export | Adaptation |
|---|---|---|
| Portrait feed / carousel | 1080 x 1350, 4:5 | Editorial master; shorten long body copy and preserve the hero message. |
| Square feed / carousel | 1080 x 1080, 1:1 | Reduce secondary copy/image area; keep headline, evidence, and CTA legible. |
| Full-height vertical / story / video cover | 1080 x 1920, 9:16 | Stack the content; reserve space for interface overlays and check cover/thumbnail crops independently. |
| Landscape card | 1200 x 628, approximately 1.91:1 | Wider side-by-side composition; retain one short headline and one evidence point. |
| Landscape video thumbnail / cover | 1920 x 1080, 16:9 | Large subject and short headline, minimal body text; inspect at thumbnail size. |
| Tall editorial / pin concept | 1000 x 1500, 2:3 | Taller narrative or process flow; preserve a strong top hook. |

When the user asks for "all social platforms" without specifying placements, prepare the reusable format family and label its intended uses. Do not claim six canvases cover every ad product. A still image is a cover/concept for a video-only placement unless a supported static placement is confirmed. If motion is requested, use a suitable video workflow with the same assets and typography; read the spec's motion tokens, author one focal motion, and provide a clear still cover.

Before a final platform-specific export, check the platform's current official guidance for aspect ratio, resolution, file type/size, duration if relevant, carousel consistency, interface safe zones, and feed/profile/cover cropping. Record the checked placement, source URL, and date in the handoff. Do not rely on remembered universal safe-zone percentages. If verification is unavailable, deliver accurately labelled design exports and state which placement requirements remain unverified.

Recompose each size rather than stretching or centre-cropping the finished poster. Keep separate guides for the canvas edge, the interface-safe region, and any cover/thumbnail crop. Move the logo, headline, source, and CTA inside the applicable safe area. For a carousel, keep slide dimensions consistent and ensure each slide makes sense when seen alone.

## Reliable export and review

Build a controlled composition with separate assets and text. For an HTML/CSS route, import canonical tokens, set a fixed canvas, use actual font files or a verified font load, wait for fonts and images to finish loading, and render at the target dimensions. For SVG/native design tools, embed or package dependencies and retain an editable master; outline text only in an export copy if the receiving tool requires it.

Use sRGB PNG for crisp type, line art, and infographic masters. Use high-quality JPEG for photo-heavy placements when required or beneficial; check compression in the final file. Export motion only when requested, in a format supported by the verified placement. Do not substitute an SVG source link for a requested social raster.

For each variant, inspect:

- Full size: exact dimensions, clean glyphs and icon strokes, resolved SVG colours, loaded assets/fonts, sharp logo, intentional crops, no overflow or accidental transparency.
- Phone/thumbnail size: readable headline, meaningful hierarchy, clear evidence/CTA/source, adequate contrast, and no excessive copy density.
- Placement preview: important content outside interface overlays and inside relevant crops; carousel consistency; no unsupported claim hidden by cropping.
- Content: accurate source/date/units, spelling in Australian English, correct approved destination, no sample branding or invented commercial details.

Fix and re-render failed variants. The existence of an image file is not evidence that its contents passed review.

Name files so the campaign, variant, and dimensions are apparent, for example `asset-intelligence_feed_1080x1350.png`. Deliver the requested exports, editable source, concise alt text per distinct composition, and a short source/placement note as needed. Keep generated outputs in the user's chosen location or a clearly named campaign output folder, separate from the canonical design-system assets.
