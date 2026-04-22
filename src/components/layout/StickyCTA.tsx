"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackConversion, CONVERSION_EVENTS } from "@/lib/track";
import { haptic } from "@/lib/haptics";
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
          className="sm:hidden fixed bottom-0 inset-x-0 z-30 px-4 pt-2 pb-safe pointer-events-none"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <div className="pointer-events-auto bg-gradient-to-t from-cream via-cream/95 to-transparent pt-6 -mt-6 -mx-4 px-4">
            <a
              href={buildWhatsAppLink("inscription-rapide")}
              target="_blank"
              rel="noopener"
              onClick={() => {
                haptic("medium");
                trackConversion(CONVERSION_EVENTS.STICKY_CTA);
              }}
              className="relative overflow-hidden flex items-center justify-center gap-2 w-full h-14 rounded-full bg-accent-warm text-white font-medium text-[15px] shadow-raised active:scale-[0.97] transition-transform cta-shine"
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
