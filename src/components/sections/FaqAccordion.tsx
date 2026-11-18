"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

type Faq = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-white/[0.07] rounded-3xl border border-white/[0.07] bg-navy/30">
      {items.map((item, i) => {
        const open = openIndex === i;
        const buttonId = `${baseId}-q-${i}`;
        const panelId = `${baseId}-a-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
              >
                <span
                  className={`font-display text-base font-semibold transition-colors duration-300 sm:text-lg ${
                    open ? "text-snow" : "text-snow/80 group-hover:text-snow"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-premium ${
                    open
                      ? "rotate-45 border-cyan/50 bg-cyan/10 text-cyan"
                      : "border-white/10 text-muted group-hover:border-white/25"
                  }`}
                  aria-hidden="true"
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-premium ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden" inert={!open}>
                <p className="px-5 pb-6 leading-relaxed text-muted sm:px-7 sm:pr-20">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
