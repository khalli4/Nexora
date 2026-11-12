import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "type-caption inline-flex w-fit shrink-0 items-center gap-1 rounded-full border px-2.5 py-0.5 font-medium whitespace-nowrap [&_svg]:size-3",
  {
    variants: {
      variant: {
        neutral: "border-transparent bg-secondary text-secondary-foreground",
        brand: "border-transparent bg-accent text-accent-foreground",
        success: "border-transparent bg-success/12 text-success",
        warning: "border-transparent bg-warning/12 text-warning",
        destructive: "border-transparent bg-destructive/12 text-destructive",
        info: "border-transparent bg-info/12 text-info",
        outline: "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: { variant: "neutral" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
