export const WHATSAPP_NUMBERS = {
  principal: "237672429849",
  douala1: "237686469684",
  yaounde1: "237696792300",
} as const;

export type WhatsAppNumberKey = keyof typeof WHATSAPP_NUMBERS;

export type WhatsAppContext =
  | "inscription-principal"
  | "inscription-rapide"
  | "reservation-yaounde"
  | "reservation-douala"
  | "info-generale"
  | "info-paiement"
  | "info-remboursement"
  | "info-dates-vol"
  | "info-documents"
  | "agence-yaounde"
  | "agence-douala"
  | "billet-autre"
  | "billet-avion-2500";

const messages: Record<WhatsAppContext, string> = {
  "inscription-principal":
    "Bonjour Elites Voyages,\n\nJe souhaite inscrire mon enfant à votre offre Mobilité Étudiante 2026.\n\nJe suis prêt à procéder. Pouvez-vous me guider pour la suite ?\n\nMerci.",
  "inscription-rapide":
    "Bonjour Elites Voyages, je veux réserver la place de mon enfant pour le vol vers Paris (offre Mobilité Étudiante 2026). Comment procéder ?",
  "reservation-yaounde":
    "Bonjour Elites Voyages,\n\nJe souhaite réserver une place pour le départ du 26 août 2026 depuis Yaoundé (offre à 870 000 FCFA).\n\nJe suis prêt à procéder au versement d'inscription de 300 000 FCFA. Pouvez-vous me guider ?\n\nMerci.",
  "reservation-douala":
    "Bonjour Elites Voyages,\n\nJe souhaite réserver une place pour le départ du 30 août 2026 depuis Douala (offre à partir de 750 000 FCFA).\n\nPouvez-vous me communiquer les modalités de paiement et les détails mis à jour ?\n\nMerci.",
  "info-generale":
    "Bonjour Elites Voyages, j'ai consulté votre site et j'aimerais quelques précisions sur votre offre Mobilité Étudiante 2026.",
  "info-paiement":
    "Bonjour Elites Voyages, j'ai une question concernant le paiement de l'inscription (virement UBA, versement en agence).",
  "info-remboursement":
    "Bonjour Elites Voyages, j'ai une question sur les conditions de remboursement (visa, échec académique).",
  "info-dates-vol":
    "Bonjour Elites Voyages, je souhaite des informations sur les vols officiels (26 août depuis Yaoundé / 30 août depuis Douala).",
  "info-documents":
    "Bonjour Elites Voyages, j'aimerais savoir quels documents sont nécessaires pour mon enfant (passeport, admission, etc.).",
  "agence-yaounde":
    "Bonjour Elites Voyages, je souhaite passer à votre agence de Yaoundé (Mballa II, Carrefour Jamot). Quels sont vos horaires ?",
  "agence-douala":
    "Bonjour Elites Voyages, je souhaite passer à votre agence de Douala (Bali, face Pharmacie Koumassi). Quels sont vos horaires ?",
  "billet-autre":
    "Bonjour Elites Voyages, je souhaite des informations sur vos services de billetterie générale.",
  "billet-avion-2500":
    "Bonjour Elites Voyages, je souhaite réserver un vol à partir de 2 500 FCFA de frais de réservation. Voici ma demande :\n\n- Ville de départ :\n- Ville d'arrivée :\n- Date souhaitée :\n- Nombre de passagers :\n\nMerci.",
};

export function buildWhatsAppLink(
  context: WhatsAppContext,
  number: WhatsAppNumberKey = "yaounde1",
  extra?: string,
): string {
  const body = extra ? `${messages[context]}\n\n${extra}` : messages[context];
  const text = encodeURIComponent(body);
  return `https://wa.me/${WHATSAPP_NUMBERS[number]}?text=${text}`;
}

export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("237") && digits.length === 12) {
    return `+237 ${digits.slice(3, 6)} ${digits.slice(6, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
  }
  return raw;
}
