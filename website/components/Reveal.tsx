"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Scroll-entrance for sections: communicates reading order, nothing else.
// Collapses to static under prefers-reduced-motion.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      // data-reveal is the hook the <noscript> guard in layout.tsx uses to force
      // this visible when JavaScript never arrives.
      data-reveal
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      // 0.62s / cubic-bezier(0.22,1,0.36,1) === --dur-reveal / --ease-out.
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
