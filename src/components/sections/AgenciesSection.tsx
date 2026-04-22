"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneLink } from "@/components/PhoneLink";
import { LazyMap } from "@/components/LazyMap";
import { AGENCIES } from "@/lib/config";
import { buildWhatsAppLink, type WhatsAppContext, type WhatsAppNumberKey } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";

interface AgencyCardProps {
  city: string;
  address: string;
  email: string;
  phones: readonly string[];
  phoneNumberKeys: readonly WhatsAppNumberKey[];
  context: WhatsAppContext;
  trackEvent: string;
  mapsUrl: string;
  mapsEmbed: string;
  delay: number;
}

function AgencyCard({
  city,
  address,
  email,
  phones,
  phoneNumberKeys,
  context,
  trackEvent,
  mapsUrl,
  mapsEmbed,
  delay,
}: AgencyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay }}
    >
      <Card className="h-full overflow-hidden hover:shadow-raised transition-shadow duration-300">
        <LazyMap
          src={mapsEmbed}
          title={`Carte agence Elites Voyages ${city}`}
          className="relative h-52 sm:h-60"
          fallbackHref={mapsUrl}
          city={city}
        />

        <CardContent className="p-6 space-y-5">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-navy mb-1">
              Agence de {city}
            </h3>
            <p className="text-sm text-navy/70 flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              {address}
            </p>
          </div>

          <div className="space-y-2">
            {phones.map((phone, i) => (
              <PhoneLink
                key={phone}
                raw={phone}
                number={phoneNumberKeys[i] ?? "principal"}
                context={context}
                className="text-sm"
              />
            ))}
          </div>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm text-navy/70 hover:text-accent-warm transition-colors"
          >
            <Mail className="h-4 w-4 text-accent shrink-0" />
            {email}
          </a>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button
              asChild
              variant="cta"
              size="default"
              className="flex-1"
              onClick={() => trackConversion(trackEvent)}
            >
              <a href={buildWhatsAppLink(context)} target="_blank" rel="noopener">
                Prendre RDV à {city}
              </a>
            </Button>
            <Button asChild variant="outline" size="default">
              <a href={mapsUrl} target="_blank" rel="noopener">
                <ExternalLink className="h-4 w-4" />
                Maps
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AgenciesSection() {
  return (
    <section id="agences" className="section-spacing bg-cream">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <Badge variant="default" className="mb-4">
            <MapPin className="h-3.5 w-3.5" />
            Présence physique
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-navy text-balance">
            Deux agences physiques, à votre écoute
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Venez nous rencontrer à Yaoundé ou à Douala. Notre équipe vous
            accompagne en personne, du premier contact jusqu'au décollage de
            votre enfant.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <AgencyCard
            city="Yaoundé"
            address={AGENCIES.yaounde.address}
            email={AGENCIES.yaounde.email}
            phones={[...AGENCIES.yaounde.phones]}
            phoneNumberKeys={["yaounde1"]}
            context="agence-yaounde"
            trackEvent={CONVERSION_EVENTS.AGENCE_YAOUNDE}
            mapsUrl="https://maps.app.goo.gl/mballa2carefourjamot"
            mapsEmbed="https://maps.google.com/maps?q=Mballa+II+Carrefour+Jamot+Yaound%C3%A9+Cameroun&output=embed&z=15"
            delay={0.1}
          />
          <AgencyCard
            city="Douala"
            address={AGENCIES.douala.address}
            email={AGENCIES.douala.email}
            phones={[...AGENCIES.douala.phones]}
            phoneNumberKeys={["douala1"]}
            context="agence-douala"
            trackEvent={CONVERSION_EVENTS.AGENCE_DOUALA}
            mapsUrl="https://maps.app.goo.gl/doualabali"
            mapsEmbed="https://maps.google.com/maps?q=Bali+Pharmacie+Koumassi+Douala+Cameroun&output=embed&z=15"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
