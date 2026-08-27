"use client";

import { motion, useReducedMotion } from "motion/react";

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

// Word-by-word entrance for headings below the fold. Words, not letters — letter
// splits read as decoration; word splits read as pace.
//
// Accessibility: the whole sentence stays on the container as its accessible
// name and every split span is aria-hidden, so a screen reader reads one
// sentence rather than a list of words. Under reduced motion the component
// renders a plain heading with no split at all.
//
// Only for short, link-free text — splitting anything with inline markup would
// destroy it. Long body copy uses <Reveal> instead.
export function WordReveal({
  text,
  className,
  delay = 0,
  as = "h2",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof typeof TAGS;
}) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) return <Tag className={className}>{text}</Tag>;

  const MotionTag = TAGS[as];
  const words = text.split(" ");

  return (
    <MotionTag
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delayChildren: delay, staggerChildren: 0.06 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          data-word
          aria-hidden
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 20 },
            shown: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
