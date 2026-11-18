import Image from "next/image";
import { audiences } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Audience() {
  return (
    <section id="atendimento" aria-labelledby="atendimento-title" className="relative pb-24 lg:pb-32">
      <Container>
        <SectionHeading
          id="atendimento-title"
          eyebrow="Residencial e comercial"
          title={
            <>
              Sua casa ou empresa merece <span className="text-gradient">uma solução profissional</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {audiences.map(({ id, eyebrow, title, text, cta, whatsappKey, icon: Icon, image }, i) => (
            <Reveal key={id} delay={i * 120}>
              <article className="group gradient-border relative isolate flex min-h-[30rem] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/[0.08] p-7 sm:min-h-[34rem] sm:p-10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="-z-10 object-cover transition-transform duration-[1.4s] ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/80 to-ink/45" />
                <div className="absolute inset-0 -z-10 bg-[#0a1a3a] opacity-40 mix-blend-color" />

                <span className="mb-auto grid size-14 place-items-center rounded-2xl border border-white/15 bg-ink/50 text-cyan backdrop-blur-md">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-10 text-xs font-semibold tracking-[0.22em] text-cyan uppercase">{eyebrow}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-snow uppercase sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-snow/75">{text}</p>
                <ButtonLink
                  href={getWhatsAppLink(whatsappKey)}
                  variant={i === 0 ? "primary" : "secondary"}
                  className="mt-8 w-full sm:w-fit"
                >
                  {cta}
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
