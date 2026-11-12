import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "type-button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control",
    "transition-[background-color,border-color,color,box-shadow,transform] duration-(--duration-instant) ease-(--ease-standard)",
    "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-busy:cursor-progress",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:border-ring",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-raised hover:bg-primary-hover",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        outline:
          "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground shadow-raised hover:bg-destructive/90 focus-visible:ring-destructive/40",
        glass: "glass text-foreground hover:bg-surface-elevated/70",
      },
      size: {
        sm: "h-8 rounded-control-sm px-3",
        md: "h-10 px-4",
        lg: "h-12 rounded-control-lg px-6",
        icon: "size-10",
        "icon-sm": "size-8 rounded-control-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    /** Shows a spinner, disables the button and sets aria-busy. Ignored with asChild. */
    loading?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  if (asChild) {
    return (
      <Slot
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Slot>
    );
  }

  return (
    <button
      data-slot="button"
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {loading ? (
        <Loader2 className="animate-spin" aria-hidden="true" />
      ) : null}
      {children}
    </button>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
