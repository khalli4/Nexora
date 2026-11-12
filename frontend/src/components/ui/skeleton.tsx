import * as React from "react";
import { cn } from "@/lib/utils";

/** Loading placeholder. The shimmer stops under prefers-reduced-motion. */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn(
        "animate-nx-shimmer rounded-control bg-[length:200%_100%]",
        "bg-[linear-gradient(90deg,color-mix(in_srgb,var(--foreground)_8%,transparent)_25%,color-mix(in_srgb,var(--foreground)_15%,transparent)_50%,color-mix(in_srgb,var(--foreground)_8%,transparent)_75%)]",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
