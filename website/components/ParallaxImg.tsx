"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Photo in a masked frame that drifts a few percent against the scroll â€”
// depth, the way surveyed ground sits behind the survey. The image is drawn
// 12% oversized so the drift never exposes an edge. Static under reduced
// motion; rides the same ScrollTrigger clock Lenis drives.
export function ParallaxImg({
  src,
  alt,
  sizes,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      if (reduce || !frame.current) return;
      gsap.fromTo(
        frame.current.querySelector("img"),
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: frame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: frame, dependencies: [reduce] },
  );

  return (
    <div ref={frame} className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="photo-muted scale-112 object-cover"
      />
    </div>
  );
}
