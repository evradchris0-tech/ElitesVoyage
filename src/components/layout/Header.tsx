"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { haptic } from "@/lib/haptics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const NAV_ITEMS = [
  { href: "#offre", label: "Offre" },
  { href: "#paiement", label: "Paiement" },
  { href: "#dates", label: "Dates" },
  { href: "#agences", label: "Agences" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-xl supports-[backdrop-filter]:bg-cream/70 border-b border-accent/20 shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-3 sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="Elites Voyages — Accueil">
          <Image
            src="/logo.png"
            alt="Elites Voyages"
            width={44}
            height={44}
            priority
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold text-navy">
              Elites Voyages
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-navy/60">
              Mobilité 2026
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy/80 hover:text-accent-warm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="cta"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => {
              haptic("light");
              trackConversion(CONVERSION_EVENTS.HERO_INSCRIPTION, { source: "header" });
            }}
          >
            <a
              href={buildWhatsAppLink("inscription-principal")}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon className="h-4 w-4" />
              S'inscrire
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden tap-target" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 pt-8">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
                  <div>
                    <div className="font-serif text-lg font-semibold text-navy">Elites Voyages</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-navy/60">Mobilité 2026</div>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-navy/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-4 border-t border-accent/30 pt-5">
                  <Button asChild variant="cta" size="lg" className="w-full">
                    <a
                      href={buildWhatsAppLink("inscription-principal")}
                      target="_blank"
                      rel="noopener"
                      onClick={() => {
                        haptic("medium");
                        trackConversion(CONVERSION_EVENTS.HERO_INSCRIPTION, { source: "mobile-menu" });
                      }}
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Je réserve la place
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
