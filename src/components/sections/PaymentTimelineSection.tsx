"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Check, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DEPARTURES, formatXAF, type Departure } from "@/lib/config";
import {
  buildWhatsAppLink,
  type WhatsAppContext,
  type WhatsAppNumberKey,
} from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { haptic } from "@/lib/haptics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { cn } from "@/lib/utils";

type DepartureId = "yaounde" | "douala";

const WA_BY_DEPARTURE: Record<
  DepartureId,
  { context: WhatsAppContext; number: WhatsAppNumberKey }
> = {
  yaounde: { context: "reservation-yaounde", number: "yaounde1" },
  douala: { context: "reservation-douala", number: "douala1" },
};

function DepartureTimeline({ departure }: { departure: Departure }) {
  const wa = WA_BY_DEPARTURE[departure.id];

  return (
    <>
      {/* TIMELINE */}
      <div>
        {/* ── Dot row — hidden on mobile (cards already convey the order) ── */}
        <div className="relative hidden md:grid md:grid-cols-3 mb-4">
          <div
            aria-hidden
            className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[16.667%] right-[16.667%] h-[2px] bg-gradient-to-r from-accent-warm via-accent to-accent/40"
          />
          {departure.paymentSteps.map((step, i) => (
            <motion.div
              key={`dot-${step.label}`}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex justify-center relative z-10"
            >
              <div
                className={cn(
                  "h-[28px] w-[28px] rounded-full flex items-center justify-center border-4 border-cream",
                  step.highlighted
                    ? "bg-accent-warm shadow-[0_0_0_6px_rgba(231,111,81,0.15)]"
                    : "bg-navy",
                )}
              >
                {step.highlighted && (
                  <Star className="h-3 w-3 text-white fill-current" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Card row ── */}
        <div className="grid gap-6 md:grid-cols-3">
          {departure.paymentSteps.map((step, i) => (
            <motion.div
              key={`card-${step.label}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div
                className={cn(
                  "rounded-2xl border-2 p-4 sm:p-6 text-center transition-all h-full",
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
                    "font-serif text-2xl sm:text-4xl font-semibold mb-1 tabular-nums",
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
                    <Star className="h-3 w-3 fill-current" />
                    {step.note}
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

      {/* Total + CTA */}
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
              Total départ {departure.city}
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-semibold">
              {formatXAF(departure.totalPrice)}
            </div>
          </div>
        </div>
        <Button
          asChild
          variant="cta"
          size="lg"
          className="cta-shine tap-target"
          onClick={() => {
            haptic("medium");
            trackConversion(CONVERSION_EVENTS.PAIEMENT_INSCRIPTION);
          }}
        >
          <a
            href={buildWhatsAppLink(wa.context, wa.number)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Je fais mon inscription
          </a>
        </Button>
      </motion.div>
    </>
  );
}

function PendingPlaceholder({ departure }: { departure: Departure }) {
  const wa = WA_BY_DEPARTURE[departure.id];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="rounded-2xl border-2 border-yellow-500/30 bg-yellow-50/50 p-6 sm:p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/15">
            <Info className="h-7 w-7 text-yellow-600" />
          </div>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy mb-3">
          Échéancier en cours de finalisation
        </h3>
        <p className="text-sm sm:text-base text-navy/70 leading-relaxed max-w-lg mx-auto mb-4">
          Le départ depuis {departure.city} le{" "}
          <strong className="text-navy">{departure.flightDateLabel}</strong> est
          proposé à partir de{" "}
          <strong className="text-navy">{formatXAF(departure.totalPrice)}</strong>
          . Le paiement est libre en attendant la confirmation des dates précises
          de l'échéancier.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-navy/60 mb-6">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            Réservation avant{" "}
            <strong className="text-navy">
              {departure.reservationDeadlineLabel}
            </strong>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            Paiement libre
          </span>
        </div>
        <Button asChild variant="cta" size="lg" className="tap-target">
          <a
            href={buildWhatsAppLink(wa.context, wa.number)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Contacter l'agence {departure.city}
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

function DepartureTabContent({ departure }: { departure: Departure }) {
  const isReady =
    departure.status === "confirmed" && departure.paymentSteps.length > 0;
  return isReady ? (
    <DepartureTimeline departure={departure} />
  ) : (
    <PendingPlaceholder departure={departure} />
  );
}

export function PaymentTimelineSection() {
  const [activeTab, setActiveTab] = useState<DepartureId>("yaounde");
  const activeDeparture = DEPARTURES[activeTab];

  return (
    <section
      id="paiement"
      className="relative section-spacing bg-gradient-to-b from-cream via-white to-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
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
          className="max-w-2xl mb-10"
        >
          <Badge variant="warm" className="mb-4">
            <Star className="h-3 w-3 fill-current" />
            Paiement échelonné
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-navy text-balance">
            Un paiement en 3 temps, pensé pour les familles
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Nous savons qu'envoyer son enfant à l'étranger est un investissement
            important. Nous avons conçu un échéancier en 3 versements pour
            alléger la pression financière, à votre rythme.
          </p>
        </motion.div>

        {/* ── Departure tabs ── */}
        <div className="flex gap-2 mb-10">
          {(["yaounde", "douala"] as const).map((id) => {
            const dep = DEPARTURES[id];
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  haptic("light");
                }}
                className={cn(
                  "flex-1 sm:flex-none relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all border",
                  isActive
                    ? "bg-navy text-white border-navy shadow-soft"
                    : "bg-white text-navy/70 border-accent/25 hover:border-accent/50 hover:bg-accent/5",
                )}
              >
                <MapPin className="h-4 w-4" />
                <span className="font-serif font-semibold">{dep.city}</span>
                <span className="text-xs opacity-70 truncate">
                  {dep.flightDateLabel.split(" ").slice(0, 2).join(" ")}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="paymentTabIndicator"
                    className="absolute inset-0 rounded-xl bg-navy -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Tab content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <DepartureTabContent departure={activeDeparture} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
