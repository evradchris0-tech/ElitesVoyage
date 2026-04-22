"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CAMPAIGN, formatXAF } from "@/lib/config";

const ITEMS = [
  {
    id: "echec",
    icon: "🎓",
    title: "Échec académique",
    content: (
      <>
        En cas d'échec académique signalé avant le{" "}
        <strong>1er juillet 2026</strong>, vous récupérez{" "}
        <strong>l'intégralité de la somme versée</strong>, sur simple
        présentation d'un justificatif officiel délivré par l'école. Aucun frais
        n'est retenu. Votre investissement est protégé.
      </>
    ),
  },
  {
    id: "retard-visa",
    icon: "🛂",
    title: "Retard de visa",
    content: (
      <>
        Si le visa de votre enfant arrive après la date de vol prévue, nous
        reprogrammons son départ sur le prochain créneau disponible,{" "}
        <strong>moyennant un supplément tarifaire</strong>. La bonne nouvelle :{" "}
        <strong>vos 3 bagages enregistrés sont maintenus</strong>. Votre enfant
        voyage dès que ses papiers sont prêts — nous gérons tout.
      </>
    ),
  },
  {
    id: "refus-visa",
    icon: "🚫",
    title: "Refus de visa",
    content: (
      <>
        Sur présentation de la lettre officielle de refus, vous récupérez{" "}
        <strong>{formatXAF(CAMPAIGN.refundOnVisaDenial)}</strong> sur les{" "}
        {formatXAF(CAMPAIGN.totalPrice)} versés. Les 100 000 FCFA retenus
        correspondent aux frais exigibles inhérents au traitement du dossier
        (environ 153 €) — frais que nous avons engagés pour votre enfant.
      </>
    ),
  },
];

export function UnforeseeenSection() {
  return (
    <section id="imprévus" className="section-spacing bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at bottom right, rgba(212,163,115,0.6), transparent 60%)",
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
            <ShieldCheck className="h-3.5 w-3.5" />
            Protection & garanties
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight text-balance">
            Et si quelque chose ne se passe pas comme prévu ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cream/70 leading-relaxed text-pretty">
            Nous avons pensé à chaque scénario. Votre inscription n'est pas un
            risque — c'est une étape sécurisée vers l'avenir de votre enfant.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-10"
        >
          <Accordion type="single" collapsible defaultValue="echec">
            {ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-white/15"
              >
                <AccordionTrigger className="text-white hover:text-accent text-left">
                  <span className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden>{item.icon}</span>
                    <span>{item.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-cream/70 pl-11">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-5">
            <p className="text-sm text-cream/70 leading-relaxed">
              Une situation particulière ne figure pas dans la liste ?
              Contactez-nous — nous trouvons toujours une solution.
            </p>
            <Button asChild variant="whatsapp" size="default" className="shrink-0">
              <a
                href={buildWhatsAppLink("info-remboursement")}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Poser une question
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
