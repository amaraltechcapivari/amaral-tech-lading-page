import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  id?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <Reveal className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1 font-display text-xs font-semibold tracking-[0.18em] uppercase ${
          light ? "border-electric/20 bg-electric/[0.06] text-electric" : "border-cyan/20 bg-cyan/[0.06] text-cyan"
        }`}
      >
        <span className={`size-1.5 rounded-full ${light ? "bg-electric" : "bg-cyan"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-balance uppercase sm:text-4xl lg:text-[2.85rem] ${
          light ? "text-ink" : "text-snow"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
            light ? "text-slate-600" : "text-muted"
          } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
