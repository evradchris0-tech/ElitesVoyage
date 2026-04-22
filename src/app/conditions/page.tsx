import type { Metadata } from "next";
import Link from "next/link";
import { CAMPAIGN, formatXAF, BANK_DETAILS } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions de l'offre Mobilité Étudiante 2026",
  description:
    "Conditions complètes de l'offre Mobilité Étudiante 2026 d'Elites Voyages — tarifs, échéancier, remboursements, franchises bagages.",
};

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="container-tight max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-navy/60 hover:text-navy transition-colors mb-10"
        >
          ← Retour à l'accueil
        </Link>

        <h1 className="font-serif text-4xl font-medium text-navy mb-4">
          Conditions de l'offre Mobilité Étudiante 2026
        </h1>
        <p className="text-navy/60 text-sm mb-12">
          Document de référence — Campagne Brussels Airlines. Yaoundé NSIMALEN → Paris CHARLES DE GAULLE.
        </p>

        <div className="space-y-10 text-navy/80 leading-relaxed text-sm">

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              1. Tarif et programmes éligibles
            </h2>
            <div className="rounded-2xl border border-accent/20 bg-white p-6 space-y-3">
              <p>
                <strong>Tarif préférentiel :</strong>{" "}
                <span className="text-2xl font-serif font-semibold text-navy">
                  {formatXAF(CAMPAIGN.totalPrice)}
                </span>{" "}
                — garanti jusqu'au <strong>14 avril 2026</strong> inclus.
              </p>
              <p>
                <strong>Programmes partenaires éligibles :</strong> Institut Saint Jean,
                Saint Jean Ingénieur, Prépa Vogt, SJM (Saint Jean Management), GPGE
                (Grandes Classes Préparatoires aux Grandes Écoles).
              </p>
              <p>
                <strong>Compagnie :</strong> Brussels Airlines — Groupe Lufthansa.
              </p>
              <p>
                <strong>Trajet :</strong> Yaoundé NSIMALEN (NSI) → Paris Charles de Gaulle (CDG).
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              2. Échéancier de paiement
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-accent/20 bg-white">
              <table className="w-full text-sm">
                <thead className="border-b border-accent/20 bg-accent/5">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-navy">Versement</th>
                    <th className="text-right px-5 py-3 font-semibold text-navy">Montant</th>
                    <th className="text-right px-5 py-3 font-semibold text-navy">Échéance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Inscription (⭐ verrouille tarif + place)", amount: CAMPAIGN.inscriptionPrice, date: "14 avril 2026" },
                    { label: "2ᵉ versement", amount: CAMPAIGN.secondPayment, date: "30 mai 2026" },
                    { label: "3ᵉ versement (solde)", amount: CAMPAIGN.thirdPayment, date: "15 juillet 2026" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-accent/10 last:border-none">
                      <td className="px-5 py-4">{row.label}</td>
                      <td className="px-5 py-4 text-right font-medium text-navy">{formatXAF(row.amount)}</td>
                      <td className="px-5 py-4 text-right text-navy/70">{row.date}</td>
                    </tr>
                  ))}
                  <tr className="bg-navy text-cream">
                    <td className="px-5 py-4 font-semibold">TOTAL</td>
                    <td className="px-5 py-4 text-right font-semibold font-serif text-lg">{formatXAF(CAMPAIGN.totalPrice)}</td>
                    <td className="px-5 py-4 text-right text-cream/60">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              3. Ce qui est inclus
            </h2>
            <ul className="list-none space-y-2 rounded-2xl border border-accent/20 bg-white p-6">
              {[
                "Vol Brussels Airlines Yaoundé-Paris (aller simple)",
                "3 bagages × 23 kg en soute + 10 kg en cabine",
                "Assistance pré-enrôlement passeport",
                "Accompagnement groupe à l'aéroport de Nsimalen le jour J",
                "Comptoir d'enregistrement dédié à Nsimalen",
                "Transfert à l'arrivée à Paris (bus/minibus) + billets de train si nécessaire",
                "Suivi personnalisé avant, pendant et après le voyage",
                "Billet flexible (modifications selon conditions tarifaires Brussels Airlines)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-whatsapp">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              4. Dates de vol proposées
            </h2>
            <div className="rounded-2xl border border-accent/20 bg-white p-6 space-y-2">
              <p className="mb-3 text-navy/60 italic">La date définitive est confirmée en concertation avec l'établissement.</p>
              {[
                "20 août 2026 (jeudi) — Départ anticipé, préparation sereine",
                "26 août 2026 (mercredi) — Tarif susceptible d'être majoré selon disponibilité",
                "27 août 2026 (jeudi)",
                "31 août 2026 (dimanche)",
                "1er septembre 2026 (lundi) — Dernier créneau avant rentrée",
              ].map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">→</span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              5. Conditions de remboursement
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Échec académique",
                  content: `Remboursement intégral de toute somme versée, sur présentation d'un justificatif officiel de l'école, au plus tard le 1er juillet 2026.`,
                },
                {
                  title: "Retard de visa",
                  content: `Reprogrammation du vol sur le prochain créneau disponible, moyennant un supplément tarifaire. Les 3 bagages enregistrés sont maintenus.`,
                },
                {
                  title: "Refus de visa",
                  content: `Remboursement de ${formatXAF(CAMPAIGN.refundOnVisaDenial)}, sur présentation de la lettre officielle de refus. Les 100 000 FCFA retenus correspondent aux frais de dossier engagés (≈ 153 €).`,
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-accent/20 bg-white p-5">
                  <div className="font-semibold text-navy mb-2">{item.title}</div>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              6. Modes de paiement acceptés
            </h2>
            <div className="rounded-2xl border border-accent/20 bg-white p-6 space-y-5">
              <div>
                <div className="font-semibold text-navy mb-1">Espèces en agence</div>
                <p>Yaoundé (Mballa II, Carrefour Jamot) ou Douala (Bali, face Pharmacie Koumassi). Reçu officiel remis sur place.</p>
              </div>
              <div className="border-t border-accent/10 pt-4">
                <div className="font-semibold text-navy mb-2">Virement bancaire UBA</div>
                <div className="space-y-1 text-sm font-mono">
                  <div>Titulaire : {BANK_DETAILS.holder}</div>
                  <div>Banque : {BANK_DETAILS.bank}</div>
                  <div>Code banque : {BANK_DETAILS.bankCode} — Code guichet : {BANK_DETAILS.counterCode}</div>
                  <div>N° compte : {BANK_DETAILS.accountNumber}</div>
                  <div className="mt-2 rounded-lg bg-accent/10 px-4 py-2 font-semibold text-navy">
                    IBAN : {BANK_DETAILS.iban}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              7. Documents requis avant embarquement
            </h2>
            <ul className="list-none space-y-2 rounded-2xl border border-accent/20 bg-white p-6">
              {[
                "Passeport valide",
                "Lettre d'admission de l'école d'accueil",
                "Carnet de vaccination à jour",
                "Billet d'avion émis par Elites Voyages",
                "Attestation de conformité fiscale",
              ].map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">✓</span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-navy/60 text-sm italic">
              Présence à l'aéroport de Nsimalen : 4 heures avant le décollage.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
