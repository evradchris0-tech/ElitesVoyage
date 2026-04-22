import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'Elites Voyages SARL — agence de voyage et de tourisme certifiée IATA.",
};

export default function MentionsLegalesPage() {
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
          Mentions légales
        </h1>
        <p className="text-navy/60 text-sm mb-12">
          Conformément aux dispositions légales en vigueur au Cameroun.
        </p>

        <div className="space-y-10 text-navy/80 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              Éditeur du site
            </h2>
            <div className="rounded-2xl border border-accent/20 bg-white p-6 space-y-2 text-sm">
              <p><strong>Raison sociale :</strong> ELITES VOYAGES SARL</p>
              <p><strong>Activité :</strong> Agence de voyage et de tourisme</p>
              <p><strong>Certification :</strong> Membre IATA</p>
              <p><strong>Partenaire aérien :</strong> Brussels Airlines — Groupe Lufthansa</p>
              <p>
                <strong>Siège social :</strong> Mballa II, Carrefour Jamot, Yaoundé, Cameroun
              </p>
              <p><strong>Email :</strong> sales-yaounde@elites-voyages.com</p>
              <p><strong>Téléphone Yaoundé :</strong> +237 650 63 66 26</p>
              <p><strong>Téléphone Douala :</strong> +237 672 42 98 49</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              Agences physiques
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-sm">
              <div className="rounded-2xl border border-accent/20 bg-white p-5 space-y-1">
                <div className="font-semibold text-navy">Yaoundé</div>
                <p>Mballa II, Carrefour Jamot</p>
                <p className="text-navy/60">+237 650 63 66 26</p>
                <p className="text-navy/60">+237 697 32 00 65</p>
                <p className="text-navy/60">+237 694 23 70 02</p>
                <p className="text-navy/60">sales-yaounde@elites-voyages.com</p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-white p-5 space-y-1">
                <div className="font-semibold text-navy">Douala</div>
                <p>Bali, à côté Station MRS, face Pharmacie Koumassi</p>
                <p className="text-navy/60">+237 672 42 98 49</p>
                <p className="text-navy/60">+237 690 13 10 11</p>
                <p className="text-navy/60">sales-douala@elites-voyages.com</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              Hébergement
            </h2>
            <p className="text-sm">
              Ce site est hébergé par <strong>Vercel Inc.</strong> — 340 Pine Street,
              Suite 701, San Francisco, CA 94104, États-Unis.
              Site web : <a href="https://vercel.com" className="text-accent-warm hover:underline" target="_blank" rel="noopener">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              Propriété intellectuelle
            </h2>
            <p className="text-sm">
              L'ensemble des contenus présents sur ce site (textes, images, logos, design)
              est la propriété exclusive d'Elites Voyages SARL. Toute reproduction,
              même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              Données personnelles
            </h2>
            <p className="text-sm">
              Les informations collectées via les formulaires et échanges WhatsApp sont
              utilisées uniquement dans le cadre de la relation commerciale avec Elites
              Voyages SARL. Elles ne sont ni cédées, ni vendues à des tiers. Conformément
              aux droits en vigueur, vous pouvez demander la modification ou la suppression
              de vos données en contactant{" "}
              <a
                href="mailto:sales-yaounde@elites-voyages.com"
                className="text-accent-warm hover:underline"
              >
                sales-yaounde@elites-voyages.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-4">
              Cookies & analytics
            </h2>
            <p className="text-sm">
              Ce site utilise Vercel Analytics pour mesurer les performances et les
              interactions utilisateurs de manière agrégée et anonymisée. Aucun cookie
              publicitaire tiers n'est déposé.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
