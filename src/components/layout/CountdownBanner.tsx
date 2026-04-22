"use client";

import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";
import { motion } from "framer-motion";
import { CAMPAIGN } from "@/lib/config";
import { cn } from "@/lib/utils";

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function computeRemaining(deadline: Date): Remaining {
  const diff = differenceInSeconds(deadline, new Date());
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / 86400),
    hours: Math.floor((diff % 86400) / 3600),
    minutes: Math.floor((diff % 3600) / 60),
    seconds: diff % 60,
    expired: false,
  };
}

interface CountdownBannerProps {
  variant?: "hero" | "inline";
  className?: string;
}

export function CountdownBanner({ variant = "hero", className }: CountdownBannerProps) {
  const deadline = new Date(CAMPAIGN.deadline);
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(computeRemaining(deadline));
    const id = setInterval(() => setRemaining(computeRemaining(deadline)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!remaining) {
    return (
      <div className={cn("h-14 w-full", className)} aria-hidden />
    );
  }

  if (remaining.expired) {
    return (
      <div
        className={cn(
          "w-full rounded-2xl border border-accent/40 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur text-pretty leading-snug",
          className,
        )}
      >
        La période du tarif préférentiel est close — contactez-nous pour nos offres du moment.
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium backdrop-blur border",
        isHero
          ? "bg-white/10 border-white/25 text-white"
          : "bg-accent/10 border-accent/40 text-navy",
        className,
      )}
    >
      <span className={cn("uppercase tracking-wider text-[11px]", isHero ? "text-accent" : "text-accent-warm")}>
        Tarif préférentiel
      </span>
      <span className="flex items-center gap-1.5 tabular-nums">
        <TimeBlock value={remaining.days} label="j" />
        <span className="opacity-40">:</span>
        <TimeBlock value={remaining.hours} label="h" />
        <span className="opacity-40">:</span>
        <TimeBlock value={remaining.minutes} label="m" />
        <span className="opacity-40">:</span>
        <TimeBlock value={remaining.seconds} label="s" pulse />
      </span>
    </div>
  );
}

function TimeBlock({
  value,
  label,
  pulse = false,
}: {
  value: number;
  label: string;
  pulse?: boolean;
}) {
  return (
    <motion.span
      key={pulse ? value : undefined}
      initial={pulse ? { opacity: 0.6, scale: 1.05 } : false}
      animate={pulse ? { opacity: 1, scale: 1 } : false}
      transition={{ duration: 0.3 }}
      className="inline-flex items-baseline gap-0.5"
    >
      <span className="font-serif text-base font-semibold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[10px] opacity-60">{label}</span>
    </motion.span>
  );
}
