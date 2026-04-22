import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-accent/40 bg-accent/10 text-navy",
        gold: "border-gold/60 bg-gold/15 text-navy",
        navy: "border-navy bg-navy text-cream",
        warm: "border-accent-warm/40 bg-accent-warm/10 text-accent-warm",
        success: "border-whatsapp/40 bg-whatsapp/10 text-[#0f9d58]",
        outline: "border-navy/20 bg-transparent text-navy",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
