"use client";

import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CAMPAIGN, formatXAF } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    label: "Inscription",
    amount: CAMPAIGN.inscriptionPrice,
    date: "14 avril 2026",
    dateShort: "14 avril",
    note: "Verrouille votre tarif et votre place",
    highlighted: true,
  },
  {
    label: "2ᵉ versement",
    amount: CAMPAIGN.secondPayment,
    date: "30 mai 2026",
    dateShort: "30 mai",
    note: "À mi-parcours",
    highlighted: false,
  },
  {
    label: "3ᵉ versement",
    amount: CAMPAIGN.thirdPayment,
    date: "15 juillet 2026",
    dateShort: "15 juillet",
    note: "Solde — bon voyage !",
    highlighted: false,
  },
];

export function PaymentTimelineSection() {
  return (
    <section
      id="paiement"
      className="relative section-spacing bg-gradient-to-b from-cream via-white to-cream overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(212,163,115,0.12), transparent 60%)",
        }}
      />
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <Badge variant="warm" className="mb-4">
            <Star className="h-3 w-3 fill-current" />
            Paiement échelonné
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-navy leading-tight text-balance">
            Un paiement en 3 temps, pensé pour les familles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Nous savons qu'envoyer son enfant à l'étranger est un investissement
            important. Nous avons conçu un échéancier en 3 versements pour
            alléger la pression financière, à votre rythme.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* line desktop */}
          <div className="hidden md:block absolute top-[54px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-accent-warm via-accent to-accent/50" />

          <div className="grid gap-6 md:grid-cols-3 relative">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* dot */}
                <div className="flex justify-center mb-4">
                  <div
                    className={cn(
                      "relative h-[28px] w-[28px] rounded-full flex items-center justify-center border-4 border-cream",
                      step.highlighted
                        ? "bg-accent-warm shadow-[0_0_0_6px_rgba(231,111,81,0.15)]"
                        : "bg-navy",
                    )}
                  >
                    {step.highlighted && (
                      <Star className="h-3 w-3 text-white fill-current" />
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "rounded-2xl border-2 p-6 text-center transition-all h-full",
                    step.highlighted
                      ? "border-accent-warm bg-white shadow-raised"
                      : "border-accent/30 bg-white/60",
                  )}
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-navy/60 font-medium mb-2">
                    {step.label}
                  </div>
                  <div
                    className={cn(
                      "font-serif text-3xl sm:text-4xl font-semibold mb-1 tabular-nums",
                      step.highlighted ? "text-accent-warm" : "text-navy",
                    )}
                  >
                    {formatXAF(step.amount)}
                  </div>
                  <div className="text-sm text-navy/70 mb-3">
                    avant le <strong className="text-navy">{step.date}</strong>
                  </div>
                  {step.highlighted && (
                    <Badge variant="warm" className="mt-1">
                      ⭐ {step.note}
                    </Badge>
                  )}
                  {!step.highlighted && (
                    <div className="text-xs text-navy/50 italic mt-1">
                      {step.note}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-navy text-cream px-6 sm:px-8 py-6 shadow-soft"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-warm">
              <Check className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-accent">
                Total de l'offre
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-semibold">
                {formatXAF(CAMPAIGN.totalPrice)}
              </div>
            </div>
          </div>
          <Button
            asChild
            variant="cta"
            size="lg"
            onClick={() =>
              trackConversion(CONVERSION_EVENTS.PAIEMENT_INSCRIPTION)
            }
          >
            <a
              href={buildWhatsAppLink("inscription-rapide")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Je fais mon inscription
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
