"use client";

import { motion } from "framer-motion";
import { Calendar, AlertTriangle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FLIGHT_DATES } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BogolanDivider } from "@/components/PlaneIcon";
import { cn } from "@/lib/utils";

export function FlightDatesSection() {
  return (
    <section id="dates" className="section-spacing bg-navy relative overflow-hidden">
      {/* bg texture */}
      <div
        className="absolute inset-0 -z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='20' cy='20' r='1.5' fill='%23D4A373'/></svg>\")",
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
          <Badge variant="gold" className="mb-4">
            <Calendar className="h-3.5 w-3.5" />
            5 créneaux de départ
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight text-balance">
            Choisissez votre date de départ
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream/70 leading-relaxed text-pretty">
            Cinq créneaux organisés en groupe, août–septembre 2026, pour tous les
            programmes partenaires. La date définitive est confirmée en
            concertation avec votre établissement.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FLIGHT_DATES.map((flight, i) => (
            <motion.div
              key={flight.date}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className={cn(
                  "rounded-2xl border-2 p-6 h-full transition-all hover:-translate-y-1 hover:shadow-raised duration-300",
                  "highlighted" in flight && flight.highlighted
                    ? "border-accent bg-white/10 backdrop-blur"
                    : "warning" in flight && flight.warning
                    ? "border-warning/40 bg-white/5"
                    : "border-white/10 bg-white/5",
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Calendar className="h-5 w-5" />
                  </div>
                  {"highlighted" in flight && flight.highlighted && (
                    <Badge variant="gold">
                      <Star className="h-3 w-3 fill-current" />
                      Recommandé
                    </Badge>
                  )}
                  {"warning" in flight && flight.warning && (
                    <span className="inline-flex items-center gap-1 text-warning text-[11px] font-medium">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      Tarif variable
                    </span>
                  )}
                </div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-accent/80 font-medium mb-1">
                  {flight.weekday}
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-medium text-white mb-1">
                  {flight.label}
                </div>
                <p className="text-sm text-cream/60 leading-relaxed">{flight.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <BogolanDivider className="text-accent/40 mt-10" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-4"
        >
          <p className="text-sm text-cream/60 italic text-center sm:text-left">
            La date de départ est confirmée après concertation avec votre
            établissement.
          </p>
          <Button asChild variant="outline-light" size="default">
            <a
              href={buildWhatsAppLink("info-dates-vol")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Question sur les dates
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
