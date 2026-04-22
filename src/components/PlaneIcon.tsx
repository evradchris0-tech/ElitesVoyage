import { cn } from "@/lib/utils";

export function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={cn(className)}
    >
      <path
        d="M6 36l18-4 8-18 4 0 4 16 18 2 0 4-18 2-4 16-4 0-8-18-18-4 0 4z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M6 36l18-4 8-18 4 0 4 16 18 2 0 4-18 2-4 16-4 0-8-18-18-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BogolanDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 py-8", className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
      <svg width="96" height="16" viewBox="0 0 96 16" fill="none" aria-hidden>
        <g stroke="currentColor" strokeWidth="1" opacity="0.6">
          <circle cx="48" cy="8" r="3" />
          <path d="M32 8l-8-4v8zM64 8l8-4v8z" fill="currentColor" />
          <path d="M8 8h12M76 8h12" />
          <path d="M40 8l-4-4m4 4l-4 4" opacity="0.6" />
          <path d="M56 8l4-4m-4 4l4 4" opacity="0.6" />
        </g>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
    </div>
  );
}
