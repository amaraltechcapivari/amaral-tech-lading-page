import { services } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="relative py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 left-1/2 h-96 w-[70rem] max-w-full -translate-x-1/2 rounded-full bg-electric/[0.07] blur-[120px]"
      />
      <Container className="relative">
        <SectionHeading
          id="servicos-title"
          eyebrow="Nossos serviços"
          title={
            <>
              Soluções completas <span className="text-gradient">para seu projeto</span>
            </>
          }
          description="Da instalação à manutenção, oferecemos soluções para tornar seu ambiente mais seguro, funcional e confortável."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 100} className="h-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-muted">
            Precisa de instalação ou manutenção?{" "}
            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan underline-offset-4 transition-colors hover:text-snow hover:underline"
            >
              Vamos resolver isso para você.
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
