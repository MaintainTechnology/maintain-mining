import type { CSSProperties } from "react";

// Hero-only word cascade. Deliberately NOT a client component: this is pure CSS
// on the existing .rise keyframe, so the headline animates with zero JavaScript,
// survives a slow hydration, and still reads correctly with JS disabled. The
// page's primary message should never depend on a bundle arriving.
//
// Below the fold, headings use <WordReveal> instead — those need a scroll
// trigger, which CSS alone cannot give us.
//
// It renders the heading element itself so the accessible name lands on a real
// heading: aria-label on a bare <span> is not reliably exposed.
export function RiseWords({
  text,
  className,
  start = 0,
  step = 60,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  /** Delay before the first word, ms. Sequences the hero against other elements. */
  start?: number;
  /** Per-word stagger, ms. Matches --stagger-word. */
  step?: number;
  as?: "h1" | "h2";
}) {
  const words = text.split(" ");

  return (
    <Tag aria-label={text} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="rise inline-block whitespace-pre"
          style={{ "--rise-delay": `${start + i * step}ms` } as CSSProperties}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
