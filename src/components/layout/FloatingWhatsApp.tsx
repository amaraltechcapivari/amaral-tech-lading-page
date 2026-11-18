"use client";

import { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

/** Botão flutuante do WhatsApp — aparece após o início da rolagem. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={getWhatsAppLink("general")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Amaral Tech no WhatsApp"
      className={`group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex items-center gap-3 transition-all duration-500 ease-premium sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      tabIndex={visible ? 0 : -1}
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full border border-white/10 bg-navy/95 px-4 py-2 text-sm font-medium text-snow opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Fale conosco no WhatsApp
      </span>
      <span className="relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" aria-hidden="true" />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
