import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * States: default, focus, disabled, read-only and invalid.
 * Mark invalid with aria-invalid="true" and describe the error with aria-describedby.
 */
function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "type-body-sm h-10 w-full min-w-0 rounded-control border border-input bg-surface px-3 text-foreground",
        "placeholder:text-foreground-subtle",
        "transition-[border-color,box-shadow,background-color] duration-(--duration-fast) ease-(--ease-standard)",
        "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30",
        "read-only:border-border read-only:bg-surface-secondary read-only:focus-visible:ring-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/30",
        "file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
