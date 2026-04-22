"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BogolanDivider } from "@/components/PlaneIcon";

/* TODO: remplacer par vrais témoignages avant mise en ligne */
const TESTIMONIALS = [
  {
    quote:
      "L'équipe Elites Voyages nous a accompagnés jusqu'au dernier moment à Nsimalen. Mon fils est arrivé à Paris dans d'excellentes conditions, le groupe était bien encadré.",
    name: "M. Nkou E.",
    role: "Père d'un étudiant en Prépa Vogt, promo 2024",
  },
  {
    quote:
      "Ce qui m'a convaincu, c'est qu'on pouvait payer en plusieurs fois. Et ils ont répondu à toutes mes questions sur WhatsApp à toute heure. Sérieux et disponibles.",
    name: "Mme Biyong A.",
    role: "Mère d'une étudiante à l'Institut Saint Jean, promo 2025",
  },
  {
    quote:
      "Mon visa est arrivé en retard et ils ont reprogrammé le vol sans problème. On n'a pas perdu les bagages enregistrés. Ma fille est partie deux semaines après, tout s'est bien passé.",
    name: "M. Fotso D.",
    role: "Père d'une étudiante SJM, promo 2025",
  },
];

export function SocialProofSection() {
  return (
    <section id="temoignages" className="section-spacing bg-cream relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top left, rgba(212,163,115,0.18), transparent 60%)",
        }}
      />
      <div className="container-wide">
        {/* Citation banner with damso.png */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-20"
        >
          <div className="relative h-72 sm:h-80 lg:h-96 w-full">
            <Image
              src="/hero-motivation.png"
              alt="Motivation étudiante — Elites Voyages"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 sm:px-14 lg:px-20 max-w-2xl">
                <Quote className="h-8 w-8 text-accent mb-4 opacity-80" />
                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-snug italic text-balance">
                  «&nbsp;Les plus beaux horizons commencent souvent par un simple
                  décollage.&nbsp;»
                </blockquote>
                <div className="mt-5 text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
                  — Elites Voyages
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <BogolanDivider className="text-accent -mt-8 mb-10" />

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="default" className="mb-4">
            Ils nous font confiance
          </Badge>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-navy text-balance">
            Ce que disent les parents
          </h2>
        </motion.div>

        {/* Mobile — swipeable row */}
        <div className="snap-row -mx-5 px-5 flex gap-4 overflow-x-auto sm:hidden pb-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="snap-item flex-none w-[86%] min-w-[270px] rounded-2xl border border-accent/20 bg-white p-6 shadow-soft"
            >
              <Quote className="h-6 w-6 text-accent mb-4 opacity-70" />
              <p className="text-sm text-navy/75 leading-relaxed italic text-pretty mb-5">
                «&nbsp;{t.quote}&nbsp;»
              </p>
              <div className="border-t border-accent/20 pt-4">
                <div className="font-serif text-sm font-semibold text-navy">{t.name}</div>
                <div className="text-[11px] text-navy/55 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop — grid */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-accent/20 bg-white p-6 hover:shadow-raised hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="h-6 w-6 text-accent mb-4 opacity-70" />
              <p className="text-sm text-navy/75 leading-relaxed italic text-pretty mb-5">
                «&nbsp;{t.quote}&nbsp;»
              </p>
              <div className="border-t border-accent/20 pt-4">
                <div className="font-serif text-sm font-semibold text-navy">{t.name}</div>
                <div className="text-[11px] text-navy/55 mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
