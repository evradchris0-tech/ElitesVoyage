"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CAMPAIGN, formatXAF } from "@/lib/config";

export function GeneralTicketsSection() {
  return (
    <section className="bg-cream border-t border-accent/20 py-10 sm:py-12">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-accent/30 bg-accent/5 px-6 py-5"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy/10 text-navy">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-navy/55 font-medium mb-0.5">
                Vous n'êtes pas concerné par la mobilité étudiante ?
              </div>
              <p className="text-sm text-navy/80">
                Réservez votre billet d'avion toutes destinations à partir de{" "}
                <strong className="text-accent-warm">{formatXAF(CAMPAIGN.generalTicketReservation)}</strong>{" "}
                de frais de réservation — visa, tourisme, famille, affaires.
              </p>
            </div>
          </div>
          <a
            href={buildWhatsAppLink("billet-avion-2500")}
            target="_blank"
            rel="noopener"
            onClick={() => trackConversion(CONVERSION_EVENTS.BILLET_2500)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-medium text-white hover:bg-whatsapp/90 transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Réserver un billet
          </a>
        </motion.div>
      </div>
    </section>
  );
}
