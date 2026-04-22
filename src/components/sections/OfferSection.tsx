"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Plane,
  Luggage,
  FileCheck,
  Bus,
  Ticket,
  Phone,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BogolanDivider } from "@/components/PlaneIcon";

const INCLUDES = [
  {
    icon: Plane,
    title: "Billet d'avion",
    text: "Yaoundé NSIMALEN → Paris Charles de Gaulle. Vol opéré par Brussels Airlines du groupe Lufthansa.",
  },
  {
    icon: Luggage,
    title: "Franchise bagages : 3 × 23 kg + 10 kg cabine",
    text: "Une large franchise pour emporter tout ce dont votre enfant a besoin.",
  },
  {
    icon: FileCheck,
    title: "Assistance pré-enrôlement passeport",
    text: "Nous vous orientons dans les démarches — un souci administratif en moins.",
  },
  {
    icon: Bus,
    title: "Transfert à l'arrivée à Paris",
    text: "Bus ou minibus organisé, billets de train réservés si nécessaire.",
  },
  {
    icon: Ticket,
    title: "Comptoir dédié à Nsimalen",
    text: "Enregistrement facilité le jour du départ, accompagnement du groupe sur place.",
  },
  {
    icon: Phone,
    title: "Suivi personnalisé",
    text: "Avant, pendant et après le voyage de votre enfant — vous êtes tenu informé.",
  },
  {
    icon: GraduationCap,
    title: "Partenaire Studely",
    text: "Solution de financement études à l'étranger — accompagnement de votre dossier de garantie locative.",
    logo: "/sytudely.jpg",
  },
  {
    icon: Plane,
    title: "Air France",
    text: "Possibilité de vol Air France selon disponibilités et itinéraires — demandez à notre équipe.",
  },
];

export function OfferSection() {
  return (
    <section id="offre" className="section-spacing bg-cream">
      <div className="container-wide">
        <BogolanDivider className="text-accent -mt-4 mb-8" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <Badge variant="default" className="mb-4">
            L'offre en détail
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-navy text-balance">
            Ce que comprend votre offre
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Un tarif unique, un accompagnement complet. Tout est pensé pour que
            votre enfant voyage dans les meilleures conditions et que vous
            restiez serein à chaque étape.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full p-6 hover:shadow-raised hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-0 space-y-3">
                  {"logo" in item && item.logo ? (
                    <div className="relative h-10 w-24">
                      <Image
                        src={item.logo}
                        alt={item.title}
                        fill
                        className="object-contain object-left"
                        sizes="96px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-warm/10 text-navy">
                      <item.icon className="h-6 w-6" />
                    </div>
                  )}
                  <h3 className="font-serif text-xl font-medium text-navy leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-navy/70 leading-relaxed">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
