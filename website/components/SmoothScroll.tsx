"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// The site's ONE smooth-scroll engine. ProcessSticky pins with ScrollTrigger, so
// Lenis has to drive the same clock — otherwise the pin drifts away from the real
// scroll position. Never add a second engine (Locomotive et al) alongside this.
// Renders nothing; it exists for the effect.
export function SmoothScroll() {
  useEffect(() => {
    // Reduced motion gets the native scroller, untouched. Not a shortened
    // animation — no hijacking at all.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.9,
      anchors: true,
    });

    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Fonts and next/image change section heights after first paint; without this
    // the pinned process section measures against a stale layout.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, []);

  return null;
}
