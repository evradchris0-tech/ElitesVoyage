"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { haptic } from "@/lib/haptics";
import { cn } from "@/lib/utils";

const ANCHORS = [
  { href: "#offre", label: "Offre" },
  { href: "#paiement", label: "Paiement" },
  { href: "#dates", label: "Dates" },
  { href: "#agences", label: "Agences" },
  { href: "#documents", label: "Documents" },
  { href: "#faq", label: "FAQ" },
] as const;

const SECTION_IDS = ANCHORS.map((a) => a.href.slice(1));

export function MobileAnchorBar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Show after hero, hide before footer/final CTA
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nearBottom = y > docHeight - 600;
      setVisible(y > window.innerHeight * 0.6 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view to highlight the matching pill
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
          aria-label="Navigation rapide entre les sections"
          className="sm:hidden fixed top-16 inset-x-0 z-40 border-b border-accent/20 bg-cream/85 supports-[backdrop-filter]:bg-cream/70 backdrop-blur-xl"
        >
          <div
            className="snap-row flex gap-2 overflow-x-auto px-4 py-2.5"
            style={{ scrollSnapType: "none" }}
          >
            {ANCHORS.map((a) => {
              const id = a.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={a.href}
                  href={a.href}
                  onClick={() => haptic("light")}
                  className={cn(
                    "shrink-0 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all active:scale-95",
                    isActive
                      ? "border-navy bg-navy text-cream shadow-soft"
                      : "border-accent/35 bg-white/70 text-navy/75 hover:text-navy",
                  )}
                >
                  {a.label}
                </a>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
