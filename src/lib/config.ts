/** Status of a departure offering */
export type DepartureStatus = "confirmed" | "pending-update";

export interface DeparturePaymentStep {
  label: string;
  amount: number;
  date: string;
  dateShort: string;
  note: string;
  highlighted: boolean;
}

export interface Departure {
  id: "yaounde" | "douala";
  city: string;
  airport: string;
  airportCode: string;
  flightDate: string;
  flightDateLabel: string;
  flightWeekday: string;
  totalPrice: number;
  inscriptionPrice: number;
  reservationDeadline: string;
  reservationDeadlineLabel: string;
  status: DepartureStatus;
  statusNote: string;
  paymentSteps: DeparturePaymentStep[];
  note: string;
}

export const DEPARTURES: Record<"yaounde" | "douala", Departure> = {
  yaounde: {
    id: "yaounde",
    city: "Yaoundé",
    airport: "NSIMALEN",
    airportCode: "NSI",
    flightDate: "2026-08-26",
    flightDateLabel: "26 août 2026",
    flightWeekday: "mercredi",
    totalPrice: 870_000,
    inscriptionPrice: 300_000,
    reservationDeadline: "2026-05-10",
    reservationDeadlineLabel: "10 mai 2026",
    status: "confirmed",
    statusNote: "Confirmé — Places limitées",
    paymentSteps: [
      {
        label: "Inscription",
        amount: 300_000,
        date: "10 mai 2026",
        dateShort: "10 mai",
        note: "Verrouille votre tarif et votre place",
        highlighted: true,
      },
      {
        label: "2ᵉ versement",
        amount: 300_000,
        date: "10 juin 2026",
        dateShort: "10 juin",
        note: "À mi-parcours",
        highlighted: false,
      },
      {
        label: "3ᵉ versement",
        amount: 270_000,
        date: "10 juillet 2026",
        dateShort: "10 juillet",
        note: "Solde — bon voyage !",
        highlighted: false,
      },
    ],
    note: "Date officielle de départ — confirmée par l'établissement Saint Jean",
  },
  douala: {
    id: "douala",
    city: "Douala",
    airport: "DOUALA INTL",
    airportCode: "DLA",
    flightDate: "2026-08-30",
    flightDateLabel: "30 août 2026",
    flightWeekday: "dimanche",
    totalPrice: 750_000,
    inscriptionPrice: 300_000,
    reservationDeadline: "2026-05-29",
    reservationDeadlineLabel: "29 mai 2026",
    status: "confirmed",
    statusNote: "Confirmé — Places limitées",
    paymentSteps: [
      {
        label: "Inscription",
        amount: 300_000,
        date: "29 mai 2026",
        dateShort: "29 mai",
        note: "Verrouille votre tarif et votre place",
        highlighted: true,
      },
      {
        label: "2ᵉ versement",
        amount: 250_000,
        date: "19 juin 2026",
        dateShort: "19 juin",
        note: "À mi-parcours",
        highlighted: false,
      },
      {
        label: "3ᵉ versement",
        amount: 200_000,
        date: "17 juillet 2026",
        dateShort: "17 juillet",
        note: "Solde — bon voyage !",
        highlighted: false,
      },
    ],
    note: "Date officielle de départ depuis Douala",
  },
} as const;

/** Legacy single-campaign values (Yaoundé defaults) */
export const CAMPAIGN = {
  deadline: "2026-05-10T23:59:59+01:00",
  totalPrice: 870_000,
  inscriptionPrice: 300_000,
  secondPayment: 300_000,
  thirdPayment: 270_000,
  secondDeadline: "2026-06-10",
  thirdDeadline: "2026-07-10",
  refundDeadline: "2026-07-01",
  refundOnVisaDenial: 770_000,
  generalTicketReservation: 2_500,
} as const;

export const FLIGHT_DATES = [
  {
    date: "2026-08-26",
    label: "26 août 2026",
    weekday: "mercredi",
    note: "Date officielle de départ — confirmée par l'établissement Saint Jean",
    highlighted: true,
  },
  {
    date: "2026-08-30",
    label: "30 août 2026",
    weekday: "dimanche",
    note: "Départ depuis Douala — détails en cours de finalisation",
    highlighted: false,
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
      "https://maps.google.com/maps?q=%C3%89lites+voyages%2C+VGXF%2B5GQ%2C+Yaound%C3%A9&t=&z=18&ie=UTF8&iwloc=&output=embed",
  },
  douala: {
    city: "Douala",
    address: "Bali, à côté Station MRS, face Pharmacie Koumassi",
    email: "sales-douala@elites-voyages.com",
    phones: ["237686469684"],
    mapsEmbed:
      "https://maps.google.com/maps?q=Elites+Voyages%2C+%C3%80+c%C3%B4t%C3%A9+station+MRS%2C+face+pharmacie%2C+Douala&t=&z=18&ie=UTF8&iwloc=&output=embed",
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

/** Lowest price among departures */
export const LOWEST_PRICE = Math.min(
  DEPARTURES.yaounde.totalPrice,
  DEPARTURES.douala.totalPrice,
);
