declare global {
  interface Window {
    va?: (
      event: "event" | "beforeSend" | "pageview",
      options?: { name?: string; data?: Record<string, string> },
    ) => void;
  }
}

export function trackConversion(name: string, data?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.va === "function") {
    window.va("event", { name, data });
  }
}

export const CONVERSION_EVENTS = {
  HERO_INSCRIPTION: "CTA_Hero_Inscription",
  COUNTDOWN_INSCRIPTION: "CTA_Countdown_Inscription",
  PAIEMENT_INSCRIPTION: "CTA_Paiement3fois_Inscription",
  FINAL_INSCRIPTION: "CTA_CTAFinal_Inscription",
  WHATSAPP_FLOAT: "CTA_WhatsApp_Float",
  STICKY_CTA: "CTA_Sticky_Inscription",
  COPY_IBAN: "CTA_Copy_IBAN",
  DOWNLOAD_PDF: "CTA_Download_PDF",
  AGENCE_YAOUNDE: "CTA_Agence_Yaounde",
  AGENCE_DOUALA: "CTA_Agence_Douala",
  BILLET_2500: "CTA_Billet_2500",
} as const;
