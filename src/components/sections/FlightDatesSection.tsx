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
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEPARTURES, type Departure, formatXAF } from "@/lib/config";
import {
  buildWhatsAppLink,
  type WhatsAppContext,
  type WhatsAppNumberKey,
} from "@/lib/whatsapp";
import { haptic } from "@/lib/haptics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BogolanDivider } from "@/components/PlaneIcon";
import { cn } from "@/lib/utils";

const REASSURING_POINTS = [
  {
    icon: Users,
    title: "Départ en groupe encadré",
    text: "Votre enfant ne voyage pas seul. Il part avec son groupe d'étudiants, accompagné par notre équipe du décollage à l'arrivée.",
  },
  {
    icon: MapPinned,
    title: "Comptoir dédié à l'aéroport",
    text: "Le jour J, un comptoir Elites Voyages vous accueille à Nsimalen ou à Douala selon votre départ. Enregistrement facilité, papiers vérifiés, départ serein.",
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

interface DepartureCardProps {
  departure: Departure;
  whatsappContext: WhatsAppContext;
  whatsappNumber: WhatsAppNumberKey;
  delay: number;
}

function DepartureCard({
  departure,
  whatsappContext,
  whatsappNumber,
  delay,
}: DepartureCardProps) {
  const isConfirmed = departure.status === "confirmed";
  const dayNumber = departure.flightDateLabel.split(" ")[0];
  const monthYear = departure.flightDateLabel.split(" ").slice(1).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
      className={cn(
        "relative overflow-hidden rounded-3xl border p-7 sm:p-8 backdrop-blur transition-all hover:-translate-y-1",
        isConfirmed
          ? "border-accent/40 bg-gradient-to-br from-white/12 via-white/6 to-transparent shadow-raised"
          : "border-white/15 bg-white/5",
      )}
    >
      {/* Status badge */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-semibold">
          Départ depuis {departure.city}
        </div>
        {isConfirmed ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp/15 border border-whatsapp/40 px-2.5 py-1 text-[11px] font-medium text-whatsapp">
            <CheckCircle2 className="h-3 w-3" />
            Confirmé
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/15 border border-warning/40 px-2.5 py-1 text-[11px] font-medium text-warning">
            <Loader2 className="h-3 w-3 animate-spin" />
            Mise à jour en cours
          </span>
        )}
      </div>

      {/* Date */}
      <div className="mb-6">
        <div className="text-[11px] uppercase tracking-wider text-cream/55 font-medium mb-1">
          {departure.flightWeekday}
        </div>
        <div className="flex items-baseline gap-2">
          <div className="font-serif text-5xl sm:text-6xl font-medium text-white leading-none">
            {dayNumber}
          </div>
          <div className="font-serif text-2xl text-cream/85 leading-none">
            {monthYear}
          </div>
        </div>
      </div>

      {/* Route line */}
      <div className="flex items-center gap-2 mb-6 text-cream/85 text-sm">
        <span className="font-medium text-white">{departure.city}</span>
        <span className="text-[10px] text-cream/45">
          ({departure.airportCode})
        </span>
        <span className="flex-1 flex items-center gap-1.5 px-1">
          <span className="h-px flex-1 bg-accent/40" />
          <Plane className="h-3.5 w-3.5 text-accent shrink-0" />
          <span className="h-px flex-1 bg-accent/40" />
        </span>
        <span className="font-medium text-white">Paris</span>
        <span className="text-[10px] text-cream/45">(CDG)</span>
      </div>

      {/* Price */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="text-[10px] uppercase tracking-wider text-accent font-medium mb-1">
          Tarif groupe
        </div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-xs text-cream/65">à partir de</span>
          <span className="font-serif text-3xl sm:text-4xl font-semibold text-white tabular-nums leading-none">
            {formatXAF(departure.totalPrice)}
          </span>
        </div>
        {isConfirmed && departure.paymentSteps.length > 0 && (
          <div className="mt-3 text-xs text-cream/65 leading-relaxed">
            Inscription{" "}
            <strong className="text-accent-warm">
              {formatXAF(departure.inscriptionPrice)}
            </strong>{" "}
            avant le{" "}
            <strong className="text-white">
              {departure.reservationDeadlineLabel}
            </strong>{" "}
            · paiement en 3 fois
          </div>
        )}
      </div>

      {/* Status note */}
      <div
        className={cn(
          "mb-6 rounded-xl border-l-2 px-4 py-3 text-xs leading-relaxed",
          isConfirmed
            ? "border-accent/50 bg-white/5 text-cream/75 italic"
            : "border-warning/60 bg-warning/8 text-cream/85",
        )}
      >
        {isConfirmed ? (
          <>{departure.note}</>
        ) : (
          <>
            <strong className="text-white not-italic">
              Modalités en cours de finalisation.
            </strong>{" "}
            Paiement libre en attendant confirmation. Réservation conseillée
            avant{" "}
            <strong className="text-white not-italic">
              {departure.reservationDeadlineLabel}
            </strong>
            .
          </>
        )}
      </div>

      {/* CTA */}
      <Button
        asChild
        variant={isConfirmed ? "cta" : "outline-light"}
        size="default"
        className="w-full"
        onClick={() => haptic("light")}
      >
        <a
          href={buildWhatsAppLink(whatsappContext, whatsappNumber)}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {isConfirmed
            ? `Réserver le ${dayNumber} ${monthYear.split(" ")[0]}`
            : `Demander les détails Douala`}
        </a>
      </Button>
    </motion.div>
  );
}

export function FlightDatesSection() {
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
            Choisissez votre départ
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-white text-balance">
            Deux départs pour Paris, selon votre agence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream/70 leading-relaxed text-pretty">
            Plusieurs vagues de départ sont organisées tout au long du mois
            d'août pour s'adapter au calendrier de chaque famille. Chaque
            agence opère son propre vol groupé avec son tarif dédié.
          </p>
        </motion.div>

        {/* Two departure cards side-by-side */}
        <div className="grid gap-6 lg:grid-cols-2 mb-10">
          <DepartureCard
            departure={DEPARTURES.yaounde}
            whatsappContext="reservation-yaounde"
            whatsappNumber="yaounde1"
            delay={0}
          />
          <DepartureCard
            departure={DEPARTURES.douala}
            whatsappContext="reservation-douala"
            whatsappNumber="douala1"
            delay={0.15}
          />
        </div>

        {/* Flexibility note */}
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
              Vous pouvez voyager via l'autre agence
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              Un étudiant de Douala peut voyager par Yaoundé, et inversement,
              selon les disponibilités. Chaque vol garde le tarif de son
              agence d'origine. Parlons-en pour trouver la meilleure option.
            </p>
          </div>
          <Button
            asChild
            variant="outline-light"
            size="sm"
            className="shrink-0"
            onClick={() => haptic("light")}
          >
            <a
              href={buildWhatsAppLink("info-dates-vol")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Étudier mon cas
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
          <Button
            asChild
            variant="outline-light"
            size="default"
            onClick={() => haptic("light")}
          >
            <a
              href={buildWhatsAppLink("info-dates-vol")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Question sur les départs
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
