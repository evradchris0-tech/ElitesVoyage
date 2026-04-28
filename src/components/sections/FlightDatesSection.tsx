"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Plane,
  Users,
  ShieldCheck,
  HeartHandshake,
  MapPinned,
  CalendarClock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FLIGHT_DATES } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BogolanDivider } from "@/components/PlaneIcon";

const REASSURING_POINTS = [
  {
    icon: Users,
    title: "Départ en groupe encadré",
    text: "Votre enfant ne voyage pas seul. Il part avec son groupe de programme (Saint Jean, Prépa Vogt, SJM, GPGE), accompagné par notre équipe.",
  },
  {
    icon: MapPinned,
    title: "Comptoir dédié à Nsimalen",
    text: "Le jour J, un comptoir Elites Voyages vous accueille à l'aéroport. Enregistrement facilité, papiers vérifiés, départ serein.",
  },
  {
    icon: HeartHandshake,
    title: "Accueil à Paris CDG",
    text: "Dès l'arrivée à Charles de Gaulle, transfert organisé vers la destination finale. Bus, minibus ou billets de train selon le besoin.",
  },
  {
    icon: ShieldCheck,
    title: "Vous êtes tenus informés",
    text: "Avant le départ, pendant le vol, à l'arrivée à Paris : nous vous envoyons des nouvelles à chaque étape clé.",
  },
];

export function FlightDatesSection() {
  const flight = FLIGHT_DATES[0];

  return (
    <section
      id="dates"
      className="section-spacing bg-navy relative overflow-hidden"
    >
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
          className="max-w-2xl mb-12"
        >
          <Badge variant="gold" className="mb-4 bg-white/10 border border-accent/40">
            <Calendar className="h-3.5 w-3.5" />
            Date officielle de départ
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-white text-balance">
            Un départ, organisé par l'Université Saint Jean
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream/70 leading-relaxed text-pretty">
            Des départs en vague sont organisés.
          </p>
        </motion.div>

        {/* Single-date hero card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur p-8 sm:p-12 mb-10"
        >
          <div
            aria-hidden
            className="absolute -right-10 -top-10 opacity-15 pointer-events-none"
          >
            <Plane className="h-48 w-48 text-accent -rotate-12" strokeWidth={1} />
          </div>

          <div className="relative grid gap-8 md:grid-cols-[auto_1fr] items-center">
            {/* Date block */}
            <div className="text-center md:text-left">
              <div className="text-[11px] uppercase tracking-[0.22em] text-accent font-medium mb-2">
                {flight.weekday}
              </div>
              <div className="font-serif text-6xl sm:text-7xl font-medium text-white leading-none mb-1">
                26
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-cream/90 leading-none">
                août 2026
              </div>
            </div>

            {/* Route + reassurance */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 sm:gap-4 text-white">
                <div className="flex flex-col items-start">
                  <div className="text-[10px] uppercase tracking-wider text-accent">
                    Départ
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-medium">
                    Yaoundé
                  </div>
                  <div className="text-xs text-cream/55">NSIMALEN (NSI)</div>
                </div>

                <div className="flex-1 flex items-center gap-2 px-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-accent/50 to-accent" />
                  <Plane className="h-4 w-4 text-accent shrink-0" />
                  <span className="h-px flex-1 bg-gradient-to-r from-accent to-accent/50" />
                </div>

                <div className="flex flex-col items-end text-right">
                  <div className="text-[10px] uppercase tracking-wider text-accent">
                    Arrivée
                  </div>
                  <div className="font-serif text-xl sm:text-2xl font-medium">
                    Paris
                  </div>
                  <div className="text-xs text-cream/55">CDG</div>
                </div>
              </div>

              <p className="text-sm text-cream/70 leading-relaxed border-l-2 border-accent/40 pl-4 italic">
                {flight.note}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Flexibility note — possibilité de choisir un autre jour */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 rounded-2xl border border-accent/30 bg-accent/5 px-5 sm:px-6 py-5"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <CalendarClock className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="font-serif text-lg font-semibold text-white leading-tight">
              Possibilité de choisir un autre jour de départ
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              Si la date du 26 août ne convient pas à votre situation, parlez-en
              à notre équipe. Nous étudions ensemble une alternative selon les
              disponibilités.
            </p>
          </div>
          <Button asChild variant="outline-light" size="sm" className="shrink-0">
            <a
              href={buildWhatsAppLink("info-dates-vol")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Demander une autre date
            </a>
          </Button>
        </motion.div>

        {/* Reassuring micro-texts */}
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          {REASSURING_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-accent/30 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <point.icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="font-serif text-base font-semibold text-white leading-tight">
                  {point.title}
                </div>
                <p className="text-sm text-cream/65 leading-relaxed">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <BogolanDivider className="text-accent/40 mt-2" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-4"
        >
          <p className="text-sm text-cream/65 italic text-center sm:text-left max-w-md">
            Présence à l'aéroport :{" "}
            <strong className="text-white not-italic">
              4 heures avant le décollage
            </strong>
            . Notre équipe vous y accueille au comptoir dédié.
          </p>
          <Button asChild variant="outline-light" size="default">
            <a
              href={buildWhatsAppLink("info-dates-vol")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Question sur le départ
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
