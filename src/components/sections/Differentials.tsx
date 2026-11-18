import { differentials } from "@/config/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="relative overflow-hidden border-y border-white/[0.05] bg-navy/40 py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)] opacity-60"
      />
      <Container className="relative">
        <SectionHeading
          id="diferenciais-title"
          eyebrow="Por que escolher a Amaral Tech?"
          title={
            <>
              Profissionalismo <span className="text-gradient">em cada detalhe</span>
            </>
          }
          description="Mais do que executar um serviço, cuidamos de toda a experiência: do primeiro contato ao ambiente pronto para uso."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {differentials.map(({ title, description, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={(i % 4) * 90}>
              <div className="group gradient-border card-surface relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-premium hover:-translate-y-1">
                <span
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 size-32 rounded-full bg-electric/0 blur-2xl transition-colors duration-700 group-hover:bg-electric/20"
                />
                <span className="relative grid size-12 place-items-center rounded-xl border border-cyan/20 bg-linear-to-br from-electric/20 to-transparent text-cyan transition-all duration-500 group-hover:border-cyan/50 group-hover:shadow-[0_0_24px_-4px_rgba(37,217,232,0.5)]">
                  <Icon className="size-5.5" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 font-display text-base font-bold text-snow">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
