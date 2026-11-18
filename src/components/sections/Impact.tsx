import Image from "next/image";
import { ClipboardList, Ruler, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  { icon: ClipboardList, title: "Planejamento", text: "Entender o ambiente antes de executar." },
  { icon: Ruler, title: "Execução cuidadosa", text: "Acabamento, organização e capricho." },
  { icon: ShieldCheck, title: "Segurança", text: "Soluções pensadas para funcionar bem." },
];

export function Impact() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="fade" className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-electric/30 via-cyan/10 to-transparent blur-3xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/images/impacto/tecnico-painel.webp"
                alt="Eletricista verificando conexões em um quadro de disjuntores"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute inset-0 bg-electric/10 mix-blend-overlay" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-ink/60 p-5 backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
                <p className="font-display text-sm font-semibold text-snow">{siteConfig.name}</p>
                <p className="mt-1 text-sm text-muted">{siteConfig.slogan}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.06] px-3.5 py-1 font-display text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
                <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
                Sobre a Amaral Tech
              </p>
              <h2
                id="sobre-title"
                className="font-display text-3xl leading-[1.08] font-extrabold tracking-tight text-balance uppercase sm:text-4xl lg:text-5xl"
              >
                Mais do que instalações, <span className="text-gradient">entregamos soluções.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-snow/80 text-pretty">
                Cada projeto merece atenção, planejamento e execução cuidadosa. Nosso compromisso é oferecer
                soluções que façam a diferença no seu dia a dia.
              </p>
              <p className="mt-4 leading-relaxed text-muted text-pretty">
                A Amaral Tech atua com instalações elétricas, climatização, segurança eletrônica e
                infraestrutura de redes, atendendo residências, comércios e empresas com foco em organização,
                qualidade e transparência.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-9 grid gap-3 sm:grid-cols-3">
                {pillars.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4">
                    <Icon className="size-5 text-cyan" aria-hidden="true" />
                    <p className="mt-3 font-display text-sm font-bold text-snow">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260} className="mt-10">
              <ButtonLink href={getWhatsAppLink("profissional")} icon="whatsapp" className="w-full sm:w-auto">
                Fale com um profissional
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
