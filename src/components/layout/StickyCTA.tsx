"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.5;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="sm:hidden fixed bottom-0 inset-x-0 z-30 px-4 pb-3 pt-2 pointer-events-none"
        >
          <div className="pointer-events-auto bg-gradient-to-t from-cream via-cream/95 to-transparent pt-3 -mb-3 -mx-4 px-4 pb-3">
            <a
              href={buildWhatsAppLink("inscription-rapide")}
              target="_blank"
              rel="noopener"
              onClick={() => trackConversion(CONVERSION_EVENTS.STICKY_CTA)}
              className="flex items-center justify-center gap-2 w-full h-14 rounded-full bg-accent-warm text-white font-medium text-base shadow-raised active:scale-[0.98] transition-transform"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Je réserve la place de mon enfant
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
