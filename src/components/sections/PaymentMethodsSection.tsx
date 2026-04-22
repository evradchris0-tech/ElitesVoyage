"use client";

import { motion } from "framer-motion";
import { Building2, Copy, Check, CreditCard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BANK_DETAILS, AGENCIES } from "@/lib/config";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { haptic } from "@/lib/haptics";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

function IBANDisplay({ iban }: { iban: string }) {
  const [copied, setCopied] = useState(false);

  async function copyIBAN() {
    await navigator.clipboard.writeText(iban);
    setCopied(true);
    haptic("success");
    trackConversion(CONVERSION_EVENTS.COPY_IBAN);
    toast.success("IBAN copié ✓", {
      description: "Collez-le dans votre ordre de virement.",
      duration: 4000,
    });
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <div className="rounded-xl border-2 border-accent/40 bg-accent/5 p-4 flex items-center justify-between gap-4 flex-wrap">
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-navy/60 mb-1">IBAN</div>
        <code className="font-mono text-navy font-semibold text-sm sm:text-base tracking-wider break-all">
          {iban}
        </code>
      </div>
      <button
        onClick={copyIBAN}
        className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-medium text-cream hover:bg-navy-light transition-all active:scale-95 tap-target"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-whatsapp" /> Copié
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" /> Copier l'IBAN
          </>
        )}
      </button>
    </div>
  );
}

export function PaymentMethodsSection() {
  return (
    <section id="paiement-methodes" className="section-spacing bg-gradient-to-b from-white to-cream">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <Badge variant="default" className="mb-4">
            <CreditCard className="h-3.5 w-3.5" />
            Paiement sécurisé
          </Badge>
          <h2 className="fluid-h2 font-serif font-medium text-navy text-balance">
            Comment payer en toute sécurité
          </h2>
          <p className="mt-4 text-base sm:text-lg text-navy/70 leading-relaxed text-pretty">
            Deux options à votre convenance : en agence avec reçu officiel, ou
            par virement bancaire UBA depuis n'importe où.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <Tabs defaultValue="agence" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="agence">
                  <Building2 className="h-4 w-4 mr-2" />
                  En agence
                </TabsTrigger>
                <TabsTrigger value="virement">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Virement bancaire UBA
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: En agence */}
            <TabsContent value="agence">
              <div className="rounded-3xl border border-accent/20 bg-white p-6 sm:p-10">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      city: "Yaoundé",
                      address: AGENCIES.yaounde.address,
                      detail: "Mballa II, Carrefour Jamot",
                    },
                    {
                      city: "Douala",
                      address: AGENCIES.douala.address,
                      detail: "Bali, face Pharmacie Koumassi",
                    },
                  ].map((ag) => (
                    <div
                      key={ag.city}
                      className="flex gap-4 p-5 rounded-2xl bg-cream border border-accent/20"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-cream">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-serif text-lg font-semibold text-navy">
                          Agence {ag.city}
                        </div>
                        <div className="text-sm text-navy/70">{ag.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-whatsapp/30 bg-whatsapp/5 p-5 text-sm text-navy/80 leading-relaxed">
                  <strong className="text-navy">✓ Reçu officiel remis sur place.</strong>{" "}
                  Notre équipe dédiée vous accompagne pour le versement, répond à toutes vos
                  questions et confirme immédiatement votre inscription.
                </div>
              </div>
            </TabsContent>

            {/* Tab 2: Virement UBA */}
            <TabsContent value="virement">
              <div className="rounded-3xl border border-accent/20 bg-white p-6 sm:p-10 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  {[
                    { label: "Titulaire", value: BANK_DETAILS.holder },
                    { label: "Banque", value: BANK_DETAILS.bank },
                    { label: "Code banque", value: BANK_DETAILS.bankCode },
                    { label: "Code guichet", value: BANK_DETAILS.counterCode },
                    { label: "N° compte", value: BANK_DETAILS.accountNumber },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl bg-cream/70 border border-accent/20 p-4">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-navy/50 mb-1">
                        {label}
                      </div>
                      <div className="font-medium text-navy">{value}</div>
                    </div>
                  ))}
                </div>

                <IBANDisplay iban={BANK_DETAILS.iban} />

                <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 text-sm text-navy/80 leading-relaxed">
                  Après votre virement, envoyez-nous une copie du reçu par WhatsApp au{" "}
                  <a
                    href={buildWhatsAppLink("info-paiement")}
                    target="_blank"
                    rel="noopener"
                    className="font-semibold text-whatsapp hover:underline"
                  >
                    +237 672 42 98 49
                  </a>{" "}
                  pour une confirmation immédiate de votre inscription.
                </div>

                <Button asChild variant="whatsapp" size="default">
                  <a
                    href={buildWhatsAppLink("info-paiement")}
                    target="_blank"
                    rel="noopener"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Questions sur le paiement ?
                  </a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
