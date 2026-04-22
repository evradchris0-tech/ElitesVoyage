import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { OfferSection } from "@/components/sections/OfferSection";
import { SectionSkeleton } from "@/components/SectionSkeleton";

/* Below-the-fold sections lazy-loaded — parallel chunking + progressive render.
   Critical for slow 2G/3G connections: initial HTML is smaller and each chunk
   loads only as the parent scrolls (framer-motion viewport triggers hydration). */

const PaymentTimelineSection = dynamic(
  () =>
    import("@/components/sections/PaymentTimelineSection").then(
      (m) => m.PaymentTimelineSection,
    ),
  { loading: () => <SectionSkeleton variant="light" /> },
);

const FlightDatesSection = dynamic(
  () =>
    import("@/components/sections/FlightDatesSection").then(
      (m) => m.FlightDatesSection,
    ),
  { loading: () => <SectionSkeleton variant="dark" /> },
);

const AgenciesSection = dynamic(
  () =>
    import("@/components/sections/AgenciesSection").then(
      (m) => m.AgenciesSection,
    ),
  { loading: () => <SectionSkeleton variant="light" /> },
);

const PaymentMethodsSection = dynamic(
  () =>
    import("@/components/sections/PaymentMethodsSection").then(
      (m) => m.PaymentMethodsSection,
    ),
  { loading: () => <SectionSkeleton variant="light" /> },
);

const UnforeseeenSection = dynamic(
  () =>
    import("@/components/sections/UnforeseeenSection").then(
      (m) => m.UnforeseeenSection,
    ),
  { loading: () => <SectionSkeleton variant="dark" /> },
);

const DocumentsSection = dynamic(
  () =>
    import("@/components/sections/DocumentsSection").then(
      (m) => m.DocumentsSection,
    ),
  { loading: () => <SectionSkeleton variant="light" /> },
);

const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((m) => m.FAQSection),
  { loading: () => <SectionSkeleton variant="light" /> },
);

const SocialProofSection = dynamic(
  () =>
    import("@/components/sections/SocialProofSection").then(
      (m) => m.SocialProofSection,
    ),
  { loading: () => <SectionSkeleton variant="light" /> },
);

const FinalCTASection = dynamic(
  () =>
    import("@/components/sections/FinalCTASection").then(
      (m) => m.FinalCTASection,
    ),
  { loading: () => <SectionSkeleton variant="dark" /> },
);

const GeneralTicketsSection = dynamic(
  () =>
    import("@/components/sections/GeneralTicketsSection").then(
      (m) => m.GeneralTicketsSection,
    ),
  { loading: () => <SectionSkeleton variant="light" height="min-h-[160px]" /> },
);

export default function HomePage() {
  return (
    <>
      {/* §1 Hero — eager (above the fold) */}
      <HeroSection />

      {/* §2 Trust bar — eager (directly below hero, small) */}
      <TrustBar />

      {/* §3 Offre — eager (first scroll target) */}
      <OfferSection />

      {/* §4 Paiement en 3 temps ⭐ */}
      <PaymentTimelineSection />

      {/* §5 Dates de vol */}
      <FlightDatesSection />

      {/* §6 Agences physiques (Maps iframes différées) */}
      <AgenciesSection />

      {/* §7 Modes de paiement (Tabs + IBAN) */}
      <PaymentMethodsSection />

      {/* §8 Imprévus / garanties */}
      <UnforeseeenSection />

      {/* §9 Documents à préparer */}
      <DocumentsSection />

      {/* §10 FAQ parents */}
      <FAQSection />

      {/* §11 Social proof */}
      <SocialProofSection />

      {/* §12 CTA final plein écran */}
      <FinalCTASection />

      {/* §12.5 Billetterie générale — encart discret */}
      <GeneralTicketsSection />
    </>
  );
}
