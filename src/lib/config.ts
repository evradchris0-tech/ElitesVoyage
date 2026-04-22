export const CAMPAIGN = {
  deadline: "2026-04-14T23:59:59+01:00",
  totalPrice: 780_000,
  inscriptionPrice: 250_000,
  secondPayment: 300_000,
  thirdPayment: 230_000,
  secondDeadline: "2026-05-30",
  thirdDeadline: "2026-07-15",
  refundDeadline: "2026-07-01",
  refundOnVisaDenial: 680_000,
  generalTicketReservation: 2_500,
} as const;

export const FLIGHT_DATES = [
  {
    date: "2026-08-20",
    label: "20 août 2026",
    weekday: "jeudi",
    note: "Départ anticipé, préparation sereine",
    highlighted: true,
  },
  {
    date: "2026-08-26",
    label: "26 août 2026",
    weekday: "mercredi",
    note: "Tarif susceptible d'être majoré selon disponibilité",
    warning: true,
  },
  {
    date: "2026-08-27",
    label: "27 août 2026",
    weekday: "jeudi",
    note: "Créneau très demandé",
  },
  {
    date: "2026-08-31",
    label: "31 août 2026",
    weekday: "dimanche",
    note: "Juste avant la rentrée",
  },
  {
    date: "2026-09-01",
    label: "1ᵉʳ septembre 2026",
    weekday: "lundi",
    note: "Dernier départ — rentrée immédiate",
  },
] as const;

export const BANK_DETAILS = {
  holder: "ELITES VOYAGES SARL",
  bank: "UBA Cameroun",
  bankCode: "10033",
  counterCode: "05210",
  accountNumber: "10011000149 47",
  iban: "CM21 10033 05210 10011000149 47",
} as const;

export const AGENCIES = {
  yaounde: {
    city: "Yaoundé",
    address: "Mballa II, Carrefour Jamot",
    email: "sales-yaounde@elites-voyages.com",
    phones: ["237696792300"],
    mapsEmbed:
      "https://www.google.com/maps?q=Mballa+II+Carrefour+Jamot+Yaound%C3%A9&output=embed",
  },
  douala: {
    city: "Douala",
    address: "Bali, à côté Station MRS, face Pharmacie Koumassi",
    email: "sales-douala@elites-voyages.com",
    phones: ["237696792300"],
    mapsEmbed:
      "https://www.google.com/maps?q=Bali+Pharmacie+Koumassi+Douala&output=embed",
  },
} as const;

export const PARTNER_PROGRAMS = [
  "Institut Saint Jean",
  "Saint Jean Ingénieur",
  "Prépa Vogt",
  "SJM (Saint Jean Management)",
  "GPGE (Grandes Classes Préparatoires)",
] as const;

export const SOCIALS = {
  facebook: "https://www.facebook.com/elitesvoyages237",
  tiktok: "https://www.tiktok.com/@elitesvoyages",
  website: "www.elites-voyages.com",
} as const;

export function formatXAF(amount: number): string {
  return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
}
