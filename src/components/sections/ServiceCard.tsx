import Image from "next/image";
import { Check } from "lucide-react";
import type { Service } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { title, description, items, icon: Icon, image, whatsappKey } = service;
  return (
    <article className="group gradient-border card-surface flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(22,139,255,0.5)]">
      <div className="relative">
        <div className="relative aspect-[16/11] overflow-hidden">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/20 to-transparent" />
          <span className="absolute top-4 right-4 font-display text-xs font-bold tracking-[0.2em] text-white/60">
            0{index + 1}
          </span>
        </div>
        <span className="absolute -bottom-6 left-6 grid size-13 place-items-center rounded-2xl bg-linear-to-br from-electric to-cyan text-white shadow-[0_12px_30px_-8px_rgba(22,139,255,0.8)] ring-4 ring-navy transition-transform duration-500 ease-premium group-hover:-rotate-6">
          <Icon className="size-6" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pt-10 pb-6">
        <h3 className="font-display text-xl font-bold tracking-tight text-snow">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <ul className="mt-5 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-snow/85">
              <span className="mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full bg-cyan/12 text-cyan">
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <ButtonLink
            href={getWhatsAppLink(whatsappKey)}
            variant="secondary"
            size="md"
            className="w-full group-hover:border-electric/50 group-hover:bg-electric/15"
            aria-label={`Solicitar orçamento de ${title}`}
          >
            Solicitar orçamento
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
