import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variants:
 * - solid:    flat surface with a hairline border (forms, dense content)
 * - elevated: raised surface with a soft shadow (default content cards)
 * - inset:    recessed well on the secondary surface (grouping inside other cards)
 * - glass:    translucent, for floating contexts only; never behind dense text
 */
const cardVariants = cva("flex flex-col gap-4 rounded-card p-5 text-card-foreground", {
  variants: {
    variant: {
      solid: "surface-solid",
      elevated: "surface-raised shadow-raised",
      inset: "border border-transparent bg-surface-secondary",
      glass: "glass rounded-panel",
    },
  },
  defaultVariants: { variant: "elevated" },
});

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-header" className={cn("flex flex-col gap-1", className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 data-slot="card-title" className={cn("type-h4", className)} {...props} />;
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("type-body-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("type-body-sm", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-2 pt-1", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
