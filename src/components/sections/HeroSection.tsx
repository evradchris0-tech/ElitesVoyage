"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CountdownBanner } from "@/components/layout/CountdownBanner";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { haptic } from "@/lib/haptics";
import { formatXAF, CAMPAIGN } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden -mt-16 sm:-mt-20 pt-16 sm:pt-20 min-h-[100svh] flex items-center">
      {/* Background: navy gradient + decorative plane */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212,163,115,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(231,111,81,0.2), transparent 40%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><path d='M30 0l3 27 27 3-27 3-3 27-3-27L0 30l27-3z' fill='%23D4A373'/></svg>\")",
        }}
      />

      {/* Decorative floating plane */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute right-[-60px] top-20 text-accent/60 hidden md:block"
      >
        <Plane className="h-40 w-40 -rotate-12" strokeWidth={1} />
      </motion.div>

      <div className="container-wide relative pb-20 pt-10 sm:pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-center">
          {/* LEFT */}
          <div className="w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <Badge variant="gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                Offre officielle Mobilité 2026
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white/80 bg-white/5">
                Membre IATA · Brussels Airlines
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="fluid-h1 font-serif font-medium text-white text-balance"
            >
              Paris 2026,{" "}
              <span className="italic text-accent">en toute sérénité.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-cream/85 leading-relaxed text-pretty max-w-xl"
            >
              L'offre officielle de mobilité étudiante pour les parents des
              étudiants de{" "}
              <span className="font-semibold text-white">
                Prépa Vogt, SJM, GPGE
              </span>{" "}
              et{" "}
              <span className="font-semibold text-white">Saint Jean Ingénieur</span>.
            </motion.p>

            {/* Price block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 rounded-3xl border border-accent/30 bg-white/5 backdrop-blur-sm p-6 sm:p-7"
            >
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
                  Tarif tout compris
                </span>
              </div>
              <div className="mt-2 font-serif text-4xl sm:text-6xl font-semibold text-white tabular-nums leading-none">
                {formatXAF(CAMPAIGN.totalPrice)}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/90">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" />
                  Inscription dès{" "}
                  <strong className="text-accent-warm font-semibold">
                    {formatXAF(CAMPAIGN.inscriptionPrice)}
                  </strong>
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Paiement en{" "}
                  <strong className="text-white font-semibold">3 fois</strong>
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                asChild
                variant="cta"
                size="xl"
                className="animate-pulse-soft cta-shine w-full sm:w-auto tap-target whitespace-normal h-auto py-3.5 px-4 sm:px-10 sm:py-0 sm:h-16 text-base sm:text-lg"
                onClick={() => {
                  haptic("medium");
                  trackConversion(CONVERSION_EVENTS.HERO_INSCRIPTION, {
                    source: "hero-primary",
                  });
                }}
              >
                <a
                  href={buildWhatsAppLink("inscription-principal")}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Je réserve la place de mon enfant
                </a>
              </Button>
              <Button asChild variant="outline-light" size="xl" className="w-full sm:w-auto tap-target whitespace-normal h-auto py-3.5 px-4 sm:px-10 sm:py-0 sm:h-16 text-base sm:text-lg">
                <a href="#offre" className="flex items-center justify-center gap-2">
                  Voir l'offre complète
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <CountdownBanner variant="hero" />
              <p className="mt-2 text-xs text-cream/60 italic">
                Tarif préférentiel garanti jusqu'au 14 avril 2026.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[3/4] w-full max-w-md ml-auto rounded-3xl overflow-hidden">
              <Image
                src="/newvisuel.jpeg"
                alt="Mobilité étudiante — flyer visuel"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 0px, 400px"
                quality={90}
                className="object-cover"
              />
              {/* Effet d'incrustation avec dégradé sur les bords pour fusionner avec le fond navy */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_80px_30px_rgba(11,37,69,1)] pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
