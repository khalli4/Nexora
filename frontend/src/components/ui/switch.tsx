"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type SwitchProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "defaultChecked"
> & {
  /** Controlled checked state. When omitted, the switch manages its own state. */
  checked?: boolean;
  /** Initial state for uncontrolled usage. */
  defaultChecked?: boolean;
  /** Called whenever the checked state changes. */
  onCheckedChange?: (checked: boolean) => void;
};

/**
 * Accessible, theme-aware switch primitive.
 * Supply aria-label or aria-labelledby unless labelled by surrounding UI.
 * Native button keyboard behaviour supports Space and Enter activation.
 */
function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  className,
  onClick,
  ...props
}: SwitchProps) {
  const [uncontrolledChecked, setUncontrolledChecked] =
    React.useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : uncontrolledChecked;

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    onClick?.(event);
    if (event.defaultPrevented || disabled) return;

    const nextChecked = !isChecked;
    if (!isControlled) setUncontrolledChecked(nextChecked);
    onCheckedChange?.(nextChecked);
  }

  return (
    <button
      {...props}
      type="button"
      role="switch"
      aria-checked={isChecked}
      data-state={isChecked ? "checked" : "unchecked"}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border",
        "transition-[background-color,border-color,box-shadow] duration-(--duration-fast) ease-(--ease-standard)",
        "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "border-transparent bg-primary" : "border-input bg-surface-secondary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0.5 size-5 rounded-full bg-background shadow-raised",
          "transition-transform duration-(--duration-base) ease-(--ease-spring)",
          "motion-reduce:transition-none",
          isChecked ? "translate-x-5" : "translate-x-0",
        )}
      />
    </button>
  );
}

export { Switch };
export type { SwitchProps };
