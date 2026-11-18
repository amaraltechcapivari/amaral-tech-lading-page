import { processSteps } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="relative overflow-hidden bg-snow py-24 text-ink lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:radial-gradient(rgba(16,29,51,0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]"
      />
      <Container className="relative">
        <SectionHeading
          tone="light"
          id="como-funciona-title"
          eyebrow="Processo de atendimento"
          title={
            <>
              Como funciona a <span className="text-gradient">contratação</span>
            </>
          }
          description="Um processo simples e transparente, do primeiro contato à execução do serviço."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Linha da timeline (desktop) */}
          <span
            aria-hidden="true"
            className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-linear-to-r from-electric/0 via-electric/40 to-cyan/0 lg:block"
          />
          {/* Linha da timeline (mobile) */}
          <span
            aria-hidden="true"
            className="absolute top-8 bottom-8 left-8 w-px bg-linear-to-b from-electric/50 to-cyan/0 md:hidden"
          />

          {processSteps.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 120} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <span className="group relative grid size-16 shrink-0 place-items-center rounded-2xl bg-ink text-cyan shadow-[0_18px_40px_-16px_rgba(8,13,25,0.7)] ring-4 ring-snow transition-transform duration-500 ease-premium hover:-translate-y-1">
                <Icon className="size-6" aria-hidden="true" />
                <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-linear-to-br from-electric to-cyan font-display text-[0.7rem] font-bold text-white ring-2 ring-snow">
                  {i + 1}
                </span>
              </span>
              <div className="pt-1 lg:pt-4">
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 lg:mx-auto lg:max-w-[15rem]">{text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-lg font-semibold text-ink">O primeiro passo é uma mensagem.</p>
          <ButtonLink href={getWhatsAppLink("general")} icon="whatsapp">
            Solicite seu orçamento
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
