import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { services } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      {/* Fotografia + camadas de iluminação */}
      <div className="absolute inset-0 -z-10">
        {/* No desktop a foto ocupa o lado direito, deixando o técnico visível ao lado do texto. */}
        <div className="absolute inset-0 lg:left-[32%]">
          <Image
            src="/images/hero/tecnico-quadro-eletrico.webp"
            alt="Técnico utilizando parafusadeira em um quadro elétrico"
            fill
            preload
            sizes="(min-width: 1024px) 68vw, 100vw"
            className="object-cover object-[75%_35%] opacity-60 saturate-[0.7] lg:object-[85%_40%] lg:opacity-80"
          />
          <div className="absolute inset-0 bg-[#0a1a3a] mix-blend-color" />
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/40 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-transparent lg:via-ink/30" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/70" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_30%_40%,#000_10%,transparent_75%)]" />
        <div className="absolute top-1/4 -left-40 size-[34rem] rounded-full bg-electric/20 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-[-20%] size-[30rem] rounded-full bg-cyan/10 blur-[140px]" />

        {/* Moldura técnica discreta sobre a foto (desktop) */}
        <div aria-hidden="true" className="absolute top-[24%] right-[9%] hidden size-[22rem] lg:block xl:right-[12%]">
          <span className="absolute top-0 left-0 size-8 border-t-2 border-l-2 border-cyan/50" />
          <span className="absolute top-0 right-0 size-8 border-t-2 border-r-2 border-cyan/50" />
          <span className="absolute bottom-0 left-0 size-8 border-b-2 border-l-2 border-cyan/50" />
          <span className="absolute right-0 bottom-0 size-8 border-r-2 border-b-2 border-cyan/50" />
          <span className="absolute inset-x-0 top-0 h-px animate-scan bg-linear-to-r from-transparent via-cyan/60 to-transparent" />
        </div>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pr-4 pl-2 text-xs font-medium text-snow/85 backdrop-blur-md sm:text-sm">
                <span className="relative flex size-2.5 items-center justify-center">
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-cyan" aria-hidden="true" />
                  <span className="relative size-2 rounded-full bg-cyan" />
                </span>
                Atendimento residencial e comercial
              </p>
            </Reveal>

            <Reveal delay={90}>
              <h1
                id="hero-title"
                className="mt-6 max-w-3xl font-display text-[2.35rem] leading-[1.04] font-extrabold tracking-tight text-balance uppercase sm:text-5xl lg:text-6xl xl:text-[4.1rem]"
              >
                Tecnologia, segurança e conforto{" "}
                <span className="text-gradient">para sua casa ou empresa.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-snow/75 text-pretty sm:text-lg">
                Oferecemos soluções em instalações elétricas, climatização, segurança eletrônica e
                infraestrutura de redes, com qualidade, profissionalismo e atenção a cada detalhe.
              </p>
            </Reveal>

            <Reveal delay={270} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={getWhatsAppLink("general")} size="lg" icon="whatsapp" className="w-full sm:w-auto">
                Solicitar orçamento
              </ButtonLink>
              <ButtonLink href="#servicos" variant="secondary" size="lg" className="w-full sm:w-auto">
                Conheça nossos serviços
              </ButtonLink>
            </Reveal>

            <Reveal delay={360}>
              <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap" aria-label="Áreas de atuação">
                {services.map(({ id, shortLabel, icon: Icon }) => (
                  <li
                    key={id}
                    className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-ink/40 px-3.5 py-2.5 text-sm font-medium text-snow/85 backdrop-blur-md"
                  >
                    <Icon className="size-4 shrink-0 text-cyan" aria-hidden="true" />
                    {shortLabel}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

        </div>
      </Container>

      <a
        href="#servicos"
        aria-label="Rolar para os serviços"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-semibold tracking-[0.3em] text-muted uppercase transition-colors hover:text-cyan md:flex"
      >
        Role
        <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
