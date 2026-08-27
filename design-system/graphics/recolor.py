"""HISTORICAL (pre-v2). Hue-reflection pipeline that moved the legacy Maintain
Audits art onto the Maintain family ramp. The art has since been DESATURATED to
charcoal for the graphite brand (see README.md) — this script no longer applies
and must not be re-run.

The transform is a single hue reflection:

    new_hue = (473 - hue) mod 360        saturation and value untouched

Chosen so the two hue bands that actually exist in this art land exactly on the
anchors sampled from ../reference-color.jpg:

    green highlight  147deg -> 326deg   magenta (family ramp mid)
    teal ground      190deg -> 283deg   #8000AF  violet
    lime edge        120deg -> 353deg   #EA0421  red

A reflection has slope -1, so it is continuous across the whole wheel and is the
identity at 56.5deg and 236.5deg. That matters: the art fades green into teal
through the 160-180deg band, and any piecewise mapping would seam there. This one
carries that band smoothly through 284-326deg, i.e. straight along the brand
gradient. Structure, wireframe density and glow falloff are preserved exactly.

Note it is an involution: running it twice restores the greens. The hue guard
below refuses to run on already-converted art, so a stray second run is a no-op.

Usage: python recolor.py [--force]   (needs `pillow` + `numpy`)
"""
import os, sys, glob
import numpy as np
from PIL import Image
Image.MAX_IMAGE_PIXELS = None

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = OUT = HERE          # in place: this folder holds the only copy of the art

AXIS = 473.0              # new_hue = (AXIS - hue) mod 360
CONVERTED_BAND = (250.0, 360.0)   # magenta/violet — already on the family ramp


def rgb_to_hsv(rgb):
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    mx = rgb.max(-1); mn = rgb.min(-1); df = mx - mn
    h = np.zeros_like(mx)
    m = df > 1e-9
    ir = m & (mx == r); h[ir] = (60 * ((g[ir] - b[ir]) / df[ir]) + 360) % 360
    ig = m & (mx == g) & ~ir; h[ig] = (60 * ((b[ig] - r[ig]) / df[ig]) + 120) % 360
    ib = m & (mx == b) & ~ir & ~ig; h[ib] = (60 * ((r[ib] - g[ib]) / df[ib]) + 240) % 360
    s = np.where(mx > 1e-9, df / np.where(mx > 1e-9, mx, 1), 0.0)
    return h, s, mx


def hsv_to_rgb(h, s, v):
    c = v * s
    hp = (h / 60.0) % 6
    x = c * (1 - np.abs(hp % 2 - 1))
    z = np.zeros_like(h)
    cond = hp.astype(np.int32)
    sel = [cond == i for i in range(6)]
    r = np.select(sel, [c, x, z, z, x, c])
    g = np.select(sel, [x, c, c, x, z, z])
    b = np.select(sel, [z, z, x, c, c, x])
    m = v - c
    return np.stack([r + m, g + m, b + m], -1)


def reflect_block(rgb):  # rgb float32 [0,1], (...,3)
    h, s, v = rgb_to_hsv(rgb)
    # No weighting band and no saturation scaling: a reflection is continuous
    # everywhere, and near-neutral pixels (s ~ 0) are unaffected by hue anyway.
    return np.clip(hsv_to_rgb((AXIS - h) % 360, s, v), 0, 1)


def dominant_hue(path, sample=400):
    """Mean hue of the saturated pixels in a thumbnail — used only for the guard."""
    im = Image.open(path); im.thumbnail((sample, sample))
    a = np.asarray(im.convert("RGB")).astype(np.float32) / 255.0
    h, s, v = rgb_to_hsv(a)
    sig = (s > 0.15) & (v > 0.06)
    if sig.sum() < 50:
        return None
    ang = np.deg2rad(h[sig])
    return float(np.rad2deg(np.arctan2(np.sin(ang).mean(), np.cos(ang).mean())) % 360)


def recolor_image(path, dst):
    im = Image.open(path)
    has_alpha = im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info)
    im = im.convert("RGBA" if has_alpha else "RGB")
    arr = np.asarray(im)
    rgb = arr[..., :3]
    alpha = arr[..., 3:] if has_alpha else None
    out = np.empty_like(rgb)
    STRIP = 1024
    for y in range(0, rgb.shape[0], STRIP):
        block = rgb[y:y + STRIP].astype(np.float32) / 255.0
        out[y:y + STRIP] = np.round(reflect_block(block) * 255.0).astype(np.uint8)
    if has_alpha:
        out = np.concatenate([out, alpha], axis=-1)
    res = Image.fromarray(out, "RGBA" if has_alpha else "RGB")
    if dst.lower().rsplit(".", 1)[-1] in ("jpg", "jpeg"):
        res.convert("RGB").save(dst, quality=95, subsampling=0)
    else:
        res.save(dst)


def run(src=SRC, out=OUT, force=False):
    os.makedirs(out, exist_ok=True)
    files = [f for f in sorted(glob.glob(os.path.join(src, "*")))
             if f.lower().rsplit(".", 1)[-1] in ("png", "jpg", "jpeg")]
    if not force:
        for f in files:
            d = dominant_hue(f)
            if d is not None and CONVERTED_BAND[0] <= d <= CONVERTED_BAND[1]:
                sys.exit(f"refusing to run: {os.path.basename(f)} is already on the family ramp "
                         f"(dominant hue {d:.0f}deg). The reflection is its own inverse, so "
                         f"a second pass would restore the greens. Use --force to override.")
    for f in files:
        recolor_image(f, os.path.join(out, os.path.basename(f)))
        print("  " + os.path.basename(f))
    print(f"RECOLOURED {len(files)} raster files")
    print("SVGs (mountain.svg, blu-gradient.svg) carry flat stop colours: edited directly, not here.")
    print("Now run web_optimize.py to rebuild graphics/web/.")


if __name__ == "__main__":
    run(force="--force" in sys.argv)
