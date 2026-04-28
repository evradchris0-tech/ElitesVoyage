"use client";

import { motion } from "framer-motion";
import { Wallet, Coins, Calendar, Plane, ChevronRight } from "lucide-react";
import { CAMPAIGN, formatXAF } from "@/lib/config";
import { haptic } from "@/lib/haptics";
import { cn } from "@/lib/utils";

interface QuickItem {
  icon: typeof Wallet;
  label: string;
  value: string;
  sub?: string;
  href: string;
  accent?: boolean;
}

const ITEMS: QuickItem[] = [
  {
    icon: Coins,
    label: "Inscription dès",
    value: formatXAF(CAMPAIGN.inscriptionPrice),
    sub: "Verrouille votre place",
    href: "#paiement",
    accent: true,
  },
  {
    icon: Wallet,
    label: "Tarif total",
    value: formatXAF(CAMPAIGN.totalPrice),
    sub: "Paiement en 3 fois",
    href: "#paiement",
  },
  {
    icon: Calendar,
    label: "Tarif garanti jusqu'au",
    value: "10 mai",
    sub: "2026",
    href: "#offre",
  },
  {
    icon: Plane,
    label: "Départs",
    value: "5 dates",
    sub: "Août — septembre 2026",
    href: "#dates",
  },
];

export function MobileQuickInfo() {
  return (
    <section
      aria-label="Informations clés"
      className="sm:hidden bg-cream border-y border-accent/20 py-6"
    >
      <div className="container-wide">
        <div className="text-[10px] uppercase tracking-[0.18em] text-navy/55 mb-3 font-medium px-1">
          L'essentiel en un coup d'œil
        </div>
        <div className="grid grid-cols-2 gap-3">
          {ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => haptic("light")}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={cn(
                "group relative flex flex-col gap-1.5 rounded-2xl border p-4 active:scale-[0.98] transition-all min-h-[110px]",
                item.accent
                  ? "border-accent-warm/40 bg-gradient-to-br from-white to-accent-warm/5 shadow-soft"
                  : "border-accent/25 bg-white",
              )}
            >
              <div className="flex items-center justify-between">
                <div
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full",
                    item.accent
                      ? "bg-accent-warm/15 text-accent-warm"
                      : "bg-navy/5 text-navy",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-navy/30 group-active:text-accent-warm transition-colors" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-navy/55 font-medium leading-tight">
                {item.label}
              </div>
              <div
                className={cn(
                  "font-serif text-xl font-semibold leading-none tabular-nums",
                  item.accent ? "text-accent-warm" : "text-navy",
                )}
              >
                {item.value}
              </div>
              {item.sub && (
                <div className="text-[11px] text-navy/55 leading-tight mt-0.5">
                  {item.sub}
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
