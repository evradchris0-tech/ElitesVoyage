import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { OfferSection } from "@/components/sections/OfferSection";
import { PaymentTimelineSection } from "@/components/sections/PaymentTimelineSection";
import { FlightDatesSection } from "@/components/sections/FlightDatesSection";
import { AgenciesSection } from "@/components/sections/AgenciesSection";
import { PaymentMethodsSection } from "@/components/sections/PaymentMethodsSection";
import { UnforeseeenSection } from "@/components/sections/UnforeseeenSection";
import { DocumentsSection } from "@/components/sections/DocumentsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { GeneralTicketsSection } from "@/components/sections/GeneralTicketsSection";

export default function HomePage() {
  return (
    <>
      {/* §1 Hero */}
      <HeroSection />

      {/* §2 Bande de confiance institutionnelle */}
      <TrustBar />

      {/* §3 L'offre en 6 cards */}
      <OfferSection />

      {/* §4 Paiement en 3 temps ⭐ */}
      <PaymentTimelineSection />

      {/* §5 Dates de vol */}
      <FlightDatesSection />

      {/* §6 Deux agences physiques */}
      <AgenciesSection />

      {/* §7 Modes de paiement */}
      <PaymentMethodsSection />

      {/* §8 Imprévus / garanties */}
      <UnforeseeenSection />

      {/* §9 Documents à préparer */}
      <DocumentsSection />

      {/* §10 FAQ parentale */}
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
