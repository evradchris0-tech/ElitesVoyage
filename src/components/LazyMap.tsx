"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { useSlowConnection } from "@/lib/useSlowConnection";
import { cn } from "@/lib/utils";

interface LazyMapProps {
  src: string;
  title: string;
  className?: string;
  fallbackHref: string;
  city: string;
}

export function LazyMap({
  src,
  title,
  className,
  fallbackHref,
  city,
}: LazyMapProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [userRequested, setUserRequested] = useState(false);
  const { isSlow, saveData } = useSlowConnection();

  useEffect(() => {
    if (isSlow || saveData) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isSlow, saveData]);

  const showIframe = shouldLoad || userRequested;

  return (
    <div
      ref={ref}
      className={cn(
        "relative bg-gradient-to-br from-navy/5 via-accent/10 to-navy/5 overflow-hidden",
        className,
      )}
    >
      {showIframe ? (
        <>
          <iframe
            src={src}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
          {/* Pin overlay — guaranteed visual marker centered on the agency */}
          <div
            aria-hidden
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
          >
            <div className="relative flex flex-col items-center -translate-y-3">
              {/* Pulsing halo */}
              <span className="absolute -top-1 h-12 w-12 rounded-full bg-accent-warm/35 animate-ping" />
              <span className="absolute -top-1 h-8 w-8 rounded-full bg-accent-warm/40" />
              {/* Pin body */}
              <svg
                viewBox="0 0 32 40"
                className="relative h-10 w-10 drop-shadow-[0_4px_8px_rgba(11,37,69,0.45)]"
              >
                <defs>
                  <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E76F51" />
                    <stop offset="100%" stopColor="#C04A2E" />
                  </linearGradient>
                </defs>
                <path
                  d="M16 0C7.16 0 0 7.16 0 16c0 11 16 24 16 24s16-13 16-24C32 7.16 24.84 0 16 0z"
                  fill="url(#pinGrad)"
                  stroke="#FAF9F6"
                  strokeWidth="1.5"
                />
                <circle cx="16" cy="16" r="6" fill="#FAF9F6" />
                <circle cx="16" cy="16" r="3" fill="#0B2545" />
              </svg>
              {/* Shadow under pin */}
              <span className="mt-0.5 h-1.5 w-3 rounded-full bg-navy/30 blur-[2px]" />
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'><path d='M0 15h30M15 0v30' stroke='%230B2545' stroke-width='0.3' opacity='0.25'/></svg>\")",
            }}
          />
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy/10 text-navy mb-3">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="relative text-sm font-medium text-navy mb-3">
            Carte de l'agence {city}
          </div>
          <div className="relative flex flex-col gap-2 items-center">
            <button
              onClick={() => setUserRequested(true)}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-medium text-cream hover:bg-navy-light transition-colors active:scale-95"
            >
              Charger la carte
            </button>
            <a
              href={fallbackHref}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-[11px] text-navy/60 hover:text-accent-warm transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      )}
      <div className="absolute top-3 left-3 z-10 rounded-full bg-navy/90 backdrop-blur px-3 py-1.5 flex items-center gap-1.5 text-xs text-white font-medium pointer-events-none">
        <MapPin className="h-3.5 w-3.5 text-accent" />
        {city}
      </div>
    </div>
  );
}
