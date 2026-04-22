"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { haptic } from "@/lib/haptics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CAMPAIGN, formatXAF } from "@/lib/config";

export function FinalCTASection() {
  return (
    <section
      id="inscription"
      className="relative overflow-hidden bg-navy py-24 sm:py-32 lg:py-40"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(212,163,115,0.18) 0%, transparent 65%)",
        }}
      />
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='1.5' fill='%23D4A373'/></svg>\")",
        }}
      />

      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
            Offre Mobilité Étudiante 2026
          </div>

          <h2 className="fluid-h1 font-serif font-medium text-white text-balance max-w-4xl mx-auto">
            Prêt à offrir à votre enfant le départ qu'il mérite&nbsp;?
          </h2>

          <p className="text-lg sm:text-xl text-cream/75 leading-relaxed text-pretty max-w-2xl mx-auto">
            L'inscription de{" "}
            <span className="text-accent-warm font-semibold">
              {formatXAF(CAMPAIGN.inscriptionPrice)}
            </span>{" "}
            verrouille son tarif, sa place et sa sérénité. Nous nous occupons du
            reste — du premier appel jusqu'à l'arrivée à Paris.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              asChild
              variant="cta"
              size="xl"
              className="animate-pulse-soft cta-shine w-full sm:w-auto tap-target"
              onClick={() => {
                haptic("medium");
                trackConversion(CONVERSION_EVENTS.FINAL_INSCRIPTION, {
                  source: "cta-final",
                });
              }}
            >
              <a
                href={buildWhatsAppLink("inscription-principal")}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Je réserve maintenant sur WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline-light"
              size="xl"
              className="w-full sm:w-auto tap-target"
              onClick={() => {
                haptic("light");
                trackConversion(CONVERSION_EVENTS.DOWNLOAD_PDF);
              }}
            >
              <a href="/protocole-mobilite-2026.pdf" download>
                <Download className="h-5 w-5" />
                Télécharger le protocole PDF
              </a>
            </Button>
          </div>

          <div className="text-sm text-cream/50">
            Ou contactez-nous directement :{" "}
            <a
              href={buildWhatsAppLink("inscription-principal")}
              target="_blank"
              rel="noopener"
              className="text-whatsapp hover:underline underline-offset-4 font-medium"
            >
              +237 672 42 98 49 (WhatsApp)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
