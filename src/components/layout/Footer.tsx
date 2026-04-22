import Image from "next/image";
import Link from "next/link";
import { Facebook, MapPin, Mail, Globe } from "lucide-react";
import { AGENCIES, SOCIALS } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { PhoneLink } from "@/components/PhoneLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream/90">
      <div className="container-wide section-spacing py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Col 1 : identité */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Elites Voyages"
                width={52}
                height={52}
                className="h-12 w-12 object-contain rounded-full bg-white/10 p-1"
              />
              <span className="font-serif text-xl font-semibold text-white">
                Elites Voyages
              </span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed text-pretty">
              Les plus beaux horizons commencent souvent par un simple décollage.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs text-gold font-medium">
                Membre IATA
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-cream/80">
                Partenaire Brussels Airlines / Lufthansa
              </span>
            </div>
          </div>

          {/* Col 2 : agences */}
          <div className="space-y-5">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Nos agences
            </h3>
            <div className="space-y-5 text-sm">
              <div>
                <div className="flex items-center gap-2 text-cream font-medium mb-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Yaoundé
                </div>
                <p className="text-cream/70 mb-2">{AGENCIES.yaounde.address}</p>
                <PhoneLink
                  raw={AGENCIES.yaounde.phones[0]}
                  number="yaounde1"
                  context="agence-yaounde"
                  className="text-cream/80 text-[13px]"
                  showTel={false}
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-cream font-medium mb-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Douala
                </div>
                <p className="text-cream/70 mb-2">{AGENCIES.douala.address}</p>
                <PhoneLink
                  raw={AGENCIES.douala.phones[0]}
                  number="principal"
                  context="agence-douala"
                  className="text-cream/80 text-[13px]"
                  showTel={false}
                />
              </div>
            </div>
          </div>

          {/* Col 3 : contact rapide */}
          <div className="space-y-5">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Nous contacter
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={buildWhatsAppLink("info-generale")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-cream/80 hover:text-whatsapp transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                WhatsApp : +237 672 42 98 49
              </a>
              <a
                href={`mailto:${AGENCIES.douala.email}`}
                className="flex items-start gap-2 text-cream/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <span>{AGENCIES.douala.email}</span>
              </a>
              <div className="flex items-center gap-2 text-cream/60 text-[13px]">
                <Globe className="h-4 w-4 text-accent" />
                {SOCIALS.website}
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIALS.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SOCIALS.tiktok}
                target="_blank"
                rel="noopener"
                aria-label="TikTok"
                className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 4 : autres services (discret) */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-white tracking-wide">
              Autres services
            </h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Billetterie toutes destinations, hôtels, visas, location de voitures,
              fret DHL, assistance aéroportuaire, tourisme et événementiel.
            </p>
            <div className="rounded-xl border border-accent/30 bg-white/5 p-4">
              <div className="text-[11px] uppercase tracking-wider text-accent mb-1">
                Réservation billet d'avion
              </div>
              <div className="text-lg font-serif text-white mb-2">
                Dès <span className="text-accent-warm">2 500 FCFA</span>
              </div>
              <a
                href={buildWhatsAppLink("billet-avion-2500")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-xs text-whatsapp hover:text-whatsapp/80 font-medium"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Réserver sur WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {year} Elites Voyages SARL. Tous droits réservés.</p>
          <div className="flex gap-5">
            <Link href="/mentions-legales" className="hover:text-cream transition-colors">
              Mentions légales
            </Link>
            <Link href="/conditions" className="hover:text-cream transition-colors">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
