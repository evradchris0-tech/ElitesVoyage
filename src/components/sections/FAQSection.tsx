"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
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

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Comment être sûr que mon enfant sera bien pris en charge ?",
    answer:
      "Elites Voyages est une agence certifiée IATA, partenaire officiel de Brussels Airlines (groupe Lufthansa). Nos équipes présentes à Yaoundé et à Douala accompagnent votre enfant de l'inscription jusqu'à l'arrivée à Paris. Le jour J : comptoir dédié à Nsimalen, groupe encadré, transfert organisé à l'arrivée CDG. Vous restez informé à chaque étape.",
  },
  {
    id: "q2",
    question: "L'inscription de 250 000 FCFA est-elle remboursable ?",
    answer: `Oui, dans les cas suivants : (1) Échec académique signalé avant le 1er juillet 2026 → remboursement intégral de toute somme versée, sur justificatif officiel. (2) Refus de visa → remboursement de ${formatXAF(CAMPAIGN.refundOnVisaDenial)} (100 000 FCFA retenus pour frais de dossier). (3) Retard de visa → vol reprogrammé avec supplément, bagages conservés. Votre investissement est protégé.`,
  },
  {
    id: "q3",
    question: "Puis-je payer depuis l'étranger ou par virement ?",
    answer:
      "Absolument. Nous disposons d'un IBAN international UBA Cameroun (CM21 10033 05210 10011000149 47). Un parent en France, en Europe ou partout dans le monde peut effectuer un virement. À réception, envoyez-nous simplement le justificatif par WhatsApp au +237 672 42 98 49 pour confirmation immédiate.",
  },
  {
    id: "q4",
    question: "Mon enfant part en groupe ou individuellement ?",
    answer:
      "Votre enfant est intégré à un groupe constitué par école partenaire (Saint Jean, Prépa Vogt, SJM, GPGE…). Ce groupe bénéficie d'un encadrement dédié et d'un comptoir d'enregistrement réservé à Nsimalen. C'est une grande différence avec un voyage en solo — votre enfant n'arrive pas seul à Paris.",
  },
  {
    id: "q5",
    question: "Que se passe-t-il si mon enfant rate son vol pour raison personnelle ?",
    answer:
      "Dans ce cas, nous étudions ensemble les options de reprogrammation disponibles selon les tarifs en vigueur à cette date. Le billet étant flexible sous conditions tarifaires, des solutions existent. Contactez-nous dès que possible en pareille situation.",
  },
  {
    id: "q6",
    question: "Quelle compagnie aérienne et quel type d'avion ?",
    answer:
      "Brussels Airlines, membre du groupe Lufthansa — l'un des groupes aériens les plus sûrs et fiables au monde. La liaison Yaoundé–Paris est opérée sur des long-courriers Airbus modernes. Votre enfant voyage dans un confort comparable aux standards européens.",
  },
  {
    id: "q7",
    question: "Comment mon enfant rejoint-il son école depuis Paris CDG ?",
    answer:
      "Le transfert depuis Paris CDG est inclus dans l'offre. Bus ou minibus organisé selon la taille du groupe, et si nécessaire, nous réservons les billets de train (RER / TGV) pour rejoindre la destination finale. Votre enfant est accompagné jusqu'à sa destination.",
  },
  {
    id: "q8",
    question: "Puis-je parler à d'autres parents qui ont utilisé votre service ?",
    answer:
      "Bien sûr. Venez nous rencontrer en agence (Yaoundé ou Douala) et nous pouvons vous mettre en contact avec des familles qui ont déjà fait le voyage avec nous. La confiance se construit sur des expériences réelles.",
  },
  {
    id: "q9",
    question: "Le billet est-il modifiable après achat ?",
    answer:
      "Oui, le billet est flexible selon les conditions tarifaires de Brussels Airlines en vigueur. Des modifications de date restent possibles, moyennant éventuellement un supplément selon la disponibilité et la période. Notre équipe vous conseille sur les options les plus avantageuses.",
  },
  {
    id: "q10",
    question: "Mon enfant a des besoins spécifiques (régime alimentaire, PMR, allergie…), comment faire ?",
    answer:
      "Signalez-le nous dès l'inscription — Brussels Airlines propose plusieurs types de repas (végétarien, sans porc, sans gluten…) et l'assistance PMR peut être organisée à Nsimalen comme à CDG. Plus tôt nous sommes informés, mieux nous anticipons.",
  },
  {
    id: "q11",
    question: "Dois-je venir en agence ou puis-je tout faire à distance ?",
    answer:
      "Les deux sont possibles. L'inscription peut se faire intégralement à distance : virement UBA + envoi des documents par WhatsApp. Nous confirmons par écrit et vous guidons étape par étape. Si vous préférez venir en personne à Yaoundé ou Douala, notre équipe vous, accueille sur rendez-vous ou sans rendez-vous.",
  },
  {
    id: "q12",
    question: "Que couvre exactement l'assistance pré-enrôlement passeport ?",
    answer:
      "Nous vous orientons dans les démarches auprès des services compétents (délégations, DGSN…) pour l'établissement ou le renouvellement du passeport de votre enfant. Nous répondons à vos questions sur les pièces à fournir et les délais, et nous vous aidons à éviter les erreurs courantes qui rallongent les délais.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-spacing bg-gradient-to-b from-cream to-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <Badge variant="default" className="mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ parents
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-navy text-balance">
            Vos questions, nos réponses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Nous avons réuni les questions que chaque parent se pose avant de
            prendre sa décision. Si la vôtre n'est pas ici, notre équipe vous
            répond en quelques minutes sur WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-accent/20 bg-white p-6 sm:p-10"
        >
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-navy font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-navy/75">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-navy/5 border border-accent/20 p-5"
        >
          <p className="text-sm text-navy/70">
            Votre question n'est pas dans cette liste ?
          </p>
          <Button asChild variant="whatsapp" size="default">
            <a
              href={buildWhatsAppLink("info-generale")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Poser ma question sur WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
