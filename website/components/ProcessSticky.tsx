"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// The page's one GSAP moment: the three pipeline steps pin and stack so the
// sequence (listen, score, act) is read in order. Static under reduced motion.
export function ProcessSticky({ cards }: { cards: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      if (reduce || !ref.current) return;
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        // No ScrollTrigger pin here on purpose. The cards are already
        // `sticky top-0`, so CSS does the stacking; a pin on top of that put two
        // systems on the same property (ScrollTrigger swaps in position:fixed
        // mid-scroll) and injected pin-spacers for no visual gain. GSAP's job in
        // this scene is only the depth scrub below.
        const scrollTrigger = {
          trigger: cardEls[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        } as const;

        // Scale only — never opacity. Fading the card made it translucent
        // mid-transition, and the already-receded card behind it ghosted
        // through, so two cards' text overlapped. The recede now reads as a
        // darkening scrim over an always-opaque card.
        gsap.to(card, { scale: 0.94, ease: "none", scrollTrigger });

        const scrim = card.querySelector(".stack-scrim");
        if (scrim) {
          gsap.to(scrim, { opacity: 0.62, ease: "none", scrollTrigger });
        }
      });
    },
    { scope: ref, dependencies: [reduce] },
  );

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div
          key={i}
          className="stack-card sticky top-0 flex min-h-[100dvh] items-center"
        >
          {card}
        </div>
      ))}
    </div>
  );
}
