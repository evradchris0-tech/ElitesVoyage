"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CAMPAIGN, formatXAF } from "@/lib/config";

export function GeneralTicketsSection() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-accent/20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 rounded-[2rem] bg-navy px-8 py-10 sm:px-12 sm:py-14 shadow-raised"
        >
          {/* Decorative background for the banner */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_100%_100%,_var(--tw-gradient-stops))] from-accent/60 via-navy to-navy" />
          <div className="absolute -left-10 -top-10 text-white/5 pointer-events-none">
            <Plane className="w-64 h-64 -rotate-12" />
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 relative z-10 w-full text-center lg:text-left">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-accent text-navy shadow-soft">
              <Plane className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
                Vous n'êtes pas étudiant ? Voyagez avec nous !
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4 leading-tight">
                Frais de réservation de billet à partir de<br/>
                <span className="text-accent-warm font-bold text-5xl sm:text-6xl inline-block mt-2">
                  {formatXAF(CAMPAIGN.generalTicketReservation)}
                </span>
              </h3>
              <p className="text-cream/80 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Toutes compagnies, toutes destinations (Tourisme, Affaires, Famille).
                Bénéficiez de notre expertise et obtenez l'itinéraire le plus avantageux, peu importe l'endroit où vous souhaitez vous rendre.
              </p>
            </div>
          </div>

          <div className="shrink-0 relative z-10 w-full lg:w-auto mt-4 lg:mt-0">
            <a
              href={buildWhatsAppLink("billet-avion-2500")}
              target="_blank"
              rel="noopener"
              onClick={() => trackConversion(CONVERSION_EVENTS.BILLET_2500)}
              className="group flex w-full lg:w-auto items-center justify-center gap-3 rounded-full bg-whatsapp px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold text-white shadow-soft transition-all hover:bg-whatsapp/90 hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Réserver mon billet
            </a>
            <p className="text-xs text-white/40 text-center mt-4">
              Assistance 7j/7 garantie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
