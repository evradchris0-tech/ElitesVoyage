"use client";

import { motion } from "framer-motion";
import { Award, Plane, Building2, GraduationCap } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Agence certifiée IATA",
    sub: "Garantie internationale",
  },
  {
    icon: Plane,
    title: "Air France · Lufthansa",
    sub: "Partenaires aériens officiels",
  },
  {
    icon: Building2,
    title: "Yaoundé & Douala",
    sub: "2 agences physiques",
  },
  {
    icon: GraduationCap,
    title: "Programmes partenaires",
    sub: "Saint Jean · Prépa Vogt · SJM · GPGE · Saint Jean Ingénieur",
  },
];

export function TrustBar() {
  return (
    <section className="bg-cream border-y border-accent/20">
      <div className="container-wide py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="font-serif text-sm font-semibold text-navy leading-tight">
                {item.title}
              </div>
              <div className="text-[11px] text-navy/60 leading-snug">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
