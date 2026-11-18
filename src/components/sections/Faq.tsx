import { faqs } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "./FaqAccordion";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative pb-24 lg:pb-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <SectionHeading
              align="left"
              id="faq-title"
              eyebrow="Dúvidas frequentes"
              title="Perguntas frequentes"
              description="Reunimos as dúvidas mais comuns. Se a sua não estiver aqui, fale com a gente."
            />
            <Reveal delay={120} className="mt-8">
              <ButtonLink href={getWhatsAppLink("general")} variant="secondary" icon="whatsapp">
                Tirar uma dúvida
              </ButtonLink>
            </Reveal>
          </div>
          <Reveal delay={100} className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
