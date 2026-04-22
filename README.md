# Elites Voyages — Campagne Mobilité Étudiante 2026

**Landing page de campagne haute conversion** pour l'offre officielle de mobilité étudiante 2026 d'Elites Voyages (Yaoundé → Paris, Brussels Airlines).

**Objectif** : convertir 2 500 parents d'étudiants (Saint Jean, Prépa Vogt, SJM, GPGE) en inscriptions à 250 000 FCFA avant le 14 avril 2026.

---

## Stack

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript strict
- **Styling** : Tailwind CSS + composants Radix UI primitifs
- **Animations** : Framer Motion
- **Formulaires** : react-hook-form + Zod
- **Polices** : Fraunces (titres) + Manrope (corps) — Google Fonts via `<link>` HTML
- **Analytics** : Vercel Analytics + Speed Insights
- **Hébergement** : Vercel → domaine `elites-voyages.com`

---

## Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/evradchris0-tech/ElitesVoyage.git
cd ElitesVoyage

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:3000
```

## Build de production

```bash
npm run build
npm run start
```

---

## Variables d'environnement

Aucune variable d'environnement requise pour le fonctionnement de base.

Optionnelles pour les intégrations futures :
```env
# Resend (si envoi d'email de confirmation est ajouté)
RESEND_API_KEY=re_xxxxx

# Vercel Analytics est configuré automatiquement sur Vercel
# Aucune variable manuelle nécessaire
```

---

## Architecture du projet

```
src/
├── app/
│   ├── layout.tsx              # Layout racine, polices, Analytics
│   ├── page.tsx                # Landing page principale (§1–§12)
│   ├── globals.css             # CSS variables, tokens de design
│   ├── sitemap.ts              # Sitemap auto-généré
│   ├── robots.ts               # robots.txt
│   ├── conditions/page.tsx     # Conditions complètes de l'offre
│   └── mentions-legales/       # Mentions légales
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation sticky avec CTA
│   │   ├── Footer.tsx          # Footer 4 colonnes navy
│   │   ├── WhatsAppFloat.tsx   # Bouton flottant WhatsApp
│   │   ├── CountdownBanner.tsx # Compte à rebours 14 avril 2026
│   │   └── StickyCTA.tsx       # Barre CTA fixe mobile
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx         # §1 Hero plein écran
│   │   ├── TrustBar.tsx            # §2 Bande confiance IATA/Brussels
│   │   ├── OfferSection.tsx        # §3 6 cards inclusions
│   │   ├── PaymentTimelineSection  # §4 Timeline 3 versements ⭐
│   │   ├── FlightDatesSection.tsx  # §5 5 dates de vol
│   │   ├── AgenciesSection.tsx     # §6 2 agences + maps
│   │   ├── PaymentMethodsSection   # §7 Tabs paiement + IBAN
│   │   ├── UnforeseeenSection.tsx  # §8 Imprévus accordion
│   │   ├── DocumentsSection.tsx    # §9 Checklist documents
│   │   ├── FAQSection.tsx          # §10 12 questions FAQ
│   │   ├── SocialProofSection.tsx  # §11 Témoignages parents
│   │   ├── FinalCTASection.tsx     # §12 CTA final navy
│   │   └── GeneralTicketsSection   # §12.5 Billets dès 2 500 FCFA
│   │
│   └── ui/                     # Primitives UI (button, card, badge…)
│
└── lib/
    ├── whatsapp.ts             # buildWhatsAppLink() — 11 contextes
    ├── track.ts                # trackConversion() + events constants
    └── config.ts               # Constantes business (prix, dates, banque)
```

---

## WhatsApp — contextes de messages

Tous les numéros ouvrent WhatsApp avec un message pré-rempli contextualisé via `buildWhatsAppLink(context, number?)`.

| Contexte | Déclencheur |
|---|---|
| `inscription-principal` | CTA hero, header, bouton flottant |
| `inscription-rapide` | CTA countdown, sticky mobile |
| `info-generale` | FAQ "question non listée" |
| `info-paiement` | Section modes de paiement |
| `info-remboursement` | Section imprévus |
| `info-dates-vol` | Section dates de vol |
| `info-documents` | Section documents |
| `agence-yaounde` | Card agence Yaoundé |
| `agence-douala` | Card agence Douala |
| `billet-avion-2500` | Encart §12.5 |
| `billet-autre` | Footer "Autres services" |

---

## Déploiement Vercel

1. Pousser sur GitHub : `git push origin main`
2. Sur [vercel.com](https://vercel.com) → **New Project** → importer `evradchris0-tech/ElitesVoyage`
3. Framework preset : **Next.js** (auto-détecté)
4. Aucune variable d'environnement requise pour V1
5. Ajouter le domaine : `elites-voyages.com` → Vercel gère le SSL automatiquement

---

## À faire avant mise en ligne

- [ ] **Remplacer les témoignages** : dans `SocialProofSection.tsx`, chercher `TODO: remplacer par vrais témoignages`
- [ ] **Photos réelles** : remplacer `hero-motivation.png` et `services-banner.jpg` par des photos propriétaires
- [ ] **Vérifier les URLs Google Maps** : les embeds Maps dans `AgenciesSection` pointent sur des requêtes approximatives — remplacer par les URLs `iframe` officielles des agences
- [ ] **Open Graph image** : créer une vraie OG image (1200×630) dans `/public/og-image.jpg` et mettre à jour `layout.tsx`
- [ ] **Favicon ICO** : générer un `/public/favicon.ico` à partir du logo
- [ ] **Test WhatsApp** : vérifier que chaque contexte génère le bon message sur un vrai téléphone
- [ ] **Test mobile 360px** : vérifier sur Android entrée de gamme physique
