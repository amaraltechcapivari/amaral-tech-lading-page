import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative pb-24 lg:pb-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-6 py-20 text-center sm:px-12 sm:py-24 lg:rounded-[2.5rem] lg:py-28">
            <Image
              src="/images/cta/cabeamento-fibra.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="-z-20 object-cover opacity-50"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-ink/80 via-navy/85 to-ink/95" />
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 h-72 w-[46rem] max-w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/30 blur-[110px]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-cyan/70 to-transparent" />

            <p className="text-xs font-semibold tracking-[0.25em] text-cyan uppercase">Conte com a Amaral Tech</p>
            <h2
              id="cta-title"
              className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl"
            >
              Precisa de uma <span className="text-gradient">solução?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-snow/75 text-pretty">
              Estamos prontos para ajudar você com instalações, climatização, segurança e infraestrutura
              tecnológica.
            </p>
            <ButtonLink
              href={getWhatsAppLink("general")}
              size="xl"
              icon="whatsapp"
              className="mt-10 w-full uppercase sm:w-auto"
            >
              Fale com a Amaral Tech
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
