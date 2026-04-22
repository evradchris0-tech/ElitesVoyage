import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { StickyCTA } from "@/components/layout/StickyCTA";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elites-voyages.com"),
  title: {
    default: "Elites Voyages — Mobilité Étudiante 2026 · Yaoundé → Paris",
    template: "%s · Elites Voyages",
  },
  description:
    "Offre officielle de mobilité étudiante 2026 pour les parents d'étudiants admis à l'Institut Saint Jean, Prépa Vogt, SJM, GPGE et Saint Jean Ingénieur. Vol Yaoundé-Paris à 780 000 FCFA, inscription dès 250 000 FCFA, paiement en 3 fois. Tarif garanti jusqu'au 14 avril 2026.",
  keywords: [
    "Elites Voyages",
    "mobilité étudiante Cameroun",
    "billet avion Yaoundé Paris",
    "Institut Saint Jean",
    "Prépa Vogt",
    "SJM",
    "GPGE",
    "Brussels Airlines",
    "IATA",
    "étudiants Cameroun France 2026",
  ],
  authors: [{ name: "Elites Voyages" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Elites Voyages",
    title: "Paris 2026, en toute sérénité · Elites Voyages",
    description:
      "Offre Mobilité Étudiante 2026 : vol Yaoundé-Paris à 780 000 FCFA, inscription dès 250 000 FCFA, paiement en 3 fois. Tarif garanti jusqu'au 14 avril 2026.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Elites Voyages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paris 2026, en toute sérénité · Elites Voyages",
    description:
      "Offre Mobilité Étudiante 2026 — Yaoundé-Paris à 780 000 FCFA, inscription 250 000 FCFA.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Google Fonts — loaded via standard link for build-time compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyCTA />
        <Toaster
          position="top-center"
          theme="light"
          toastOptions={{
            style: {
              background: "#0B2545",
              color: "#FAF9F6",
              border: "1px solid rgba(212,163,115,0.4)",
              fontFamily: "Manrope, system-ui, sans-serif",
            },
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
