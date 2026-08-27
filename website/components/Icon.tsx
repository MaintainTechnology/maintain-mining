// Brand icon set only (design-system/assets/sprite.svg): 24x24, stroke 2,
// round caps, currentColor. Never mix another icon library in.
export function Icon({
  name,
  className = "h-6 w-6",
  label,
}: {
  name:
    | "i-check"
    | "i-clipboard"
    | "i-search"
    | "i-shield"
    | "i-chart"
    | "i-network"
    | "i-speed"
    | "i-star"
    | "i-cpu"
    | "i-mail"
    | "i-phone"
    | "i-pin"
    | "i-arrow-right"
    | "i-menu";
  className?: string;
  label?: string;
}) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <use href={`/brand/sprite.svg#${name}`} />
    </svg>
  );
}
