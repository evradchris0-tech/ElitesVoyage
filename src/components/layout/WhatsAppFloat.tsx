"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { buildWhatsAppLink, type WhatsAppContext } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

function contextFromPath(pathname: string): WhatsAppContext {
  if (pathname.startsWith("/mentions-legales") || pathname.startsWith("/conditions")) {
    return "info-generale";
  }
  return "inscription-principal";
}

export function WhatsAppFloat() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const context = contextFromPath(pathname);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          href={buildWhatsAppLink(context)}
          target="_blank"
          rel="noopener"
          aria-label="Nous contacter sur WhatsApp"
          onClick={() => trackConversion(CONVERSION_EVENTS.WHATSAPP_FLOAT, { path: pathname })}
          className="fixed bottom-24 right-4 z-40 sm:bottom-6 sm:right-6 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-raised hover:scale-105 transition-transform"
        >
          <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" aria-hidden />
          <WhatsAppIcon className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
