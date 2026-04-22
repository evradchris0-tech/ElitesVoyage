import { cn } from "@/lib/utils";

interface SectionSkeletonProps {
  variant?: "light" | "dark";
  className?: string;
  height?: string;
}

export function SectionSkeleton({
  variant = "light",
  className,
  height = "min-h-[480px]",
}: SectionSkeletonProps) {
  const isDark = variant === "dark";
  return (
    <section
      aria-hidden
      className={cn(
        "section-spacing",
        isDark ? "bg-navy" : "bg-cream",
        className,
      )}
    >
      <div className={cn("container-wide", height)}>
        <div className="animate-pulse space-y-6 max-w-2xl">
          <div
            className={cn(
              "h-4 w-24 rounded-full",
              isDark ? "bg-white/10" : "bg-navy/10",
            )}
          />
          <div
            className={cn(
              "h-10 w-3/4 rounded-xl",
              isDark ? "bg-white/10" : "bg-navy/10",
            )}
          />
          <div
            className={cn(
              "h-4 w-full rounded-full",
              isDark ? "bg-white/5" : "bg-navy/5",
            )}
          />
          <div
            className={cn(
              "h-4 w-5/6 rounded-full",
              isDark ? "bg-white/5" : "bg-navy/5",
            )}
          />
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(
                "h-36 rounded-2xl",
                isDark ? "bg-white/5" : "bg-navy/5",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
