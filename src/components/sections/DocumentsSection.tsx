"use client";

import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BogolanDivider } from "@/components/PlaneIcon";

const DOCUMENTS = [
  {
    title: "Passeport valide",
    detail: "Assistance au pré-enrôlement incluse dans l'offre",
    badge: "Assistance incluse",
  },
  {
    title: "Lettre d'admission de l'école d'accueil",
    detail: "Document délivré par votre établissement partenaire (Saint Jean, Prépa Vogt, SJM ou GPGE)",
  },
  {
    title: "Carnet de vaccination à jour",
    detail: "Vérifiez que les vaccins obligatoires sont à jour avant le départ",
  },
  {
    title: "Billet d'avion",
    detail: "Émis directement par Elites Voyages — vous n'avez rien à faire",
    badge: "Fourni par nous",
  },
  {
    title: "Attestation de conformité fiscale",
    detail: "Document administratif requis — notre équipe vous guide si besoin",
  },
];

export function DocumentsSection() {
  return (
    <section id="documents" className="section-spacing bg-cream">
      <div className="container-tight">
        <BogolanDivider className="text-accent -mt-4 mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <Badge variant="default" className="mb-4">
            <ClipboardList className="h-3.5 w-3.5" />
            Documents à réunir
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-navy text-balance">
            Les 5 documents à préparer pour votre enfant
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Nous vous guidons à chaque étape. Si l'un de ces documents vous pose
            problème, nous vous orientons et intervenons si nécessaire.
          </p>
        </motion.div>

        <div className="space-y-4 max-w-2xl">
          {DOCUMENTS.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex gap-4 rounded-2xl border border-accent/20 bg-white p-5 hover:border-accent/50 hover:shadow-soft transition-all"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-light text-cream">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-serif text-lg font-medium text-navy">
                    {doc.title}
                  </span>
                  {doc.badge && (
                    <Badge variant="warm" className="text-[10px] py-0.5">
                      {doc.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-navy/65 leading-relaxed">{doc.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 rounded-2xl bg-navy px-6 sm:px-8 py-6 text-cream max-w-2xl"
        >
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-accent mb-1">À noter</div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Présence à l'aéroport de Nsimalen :{" "}
              <strong className="text-white">4 heures avant le décollage</strong>.
              Notre équipe vous y accueille au comptoir dédié.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="default" className="shrink-0">
            <a
              href={buildWhatsAppLink("info-documents")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Aide pour les documents
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
