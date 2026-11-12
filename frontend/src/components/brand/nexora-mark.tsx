import { cn } from "@/lib/utils";

type NexoraMarkProps = {
  className?: string;
  /** "brand" uses the theme accent; "mono" inherits currentColor. */
  tone?: "brand" | "mono";
  title?: string;
};

/**
 * CONCEPT PLACEHOLDER, not the final logo.
 * Two upright strokes joined by a diagonal that lifts toward the upper right.
 * The final custom N monogram, wordmark and lockups are deferred (see docs/design-system.md).
 */
export function NexoraMark({ className, tone = "brand", title = "Nexora (concept mark)" }: NexoraMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      role="img"
      aria-label={title}
      className={cn("size-8", className)}
      fill="none"
    >
      <title>{title}</title>
      <rect x="5" y="8" width="5" height="19" rx="1.5" fill="currentColor" />
      <rect x="22" y="5" width="5" height="19" rx="1.5" fill="currentColor" />
      <polygon
        points="10,8 22,19 22,24 10,13"
        fill={tone === "brand" ? "var(--primary)" : "currentColor"}
        opacity={tone === "brand" ? 1 : 0.55}
      />
    </svg>
  );
}
