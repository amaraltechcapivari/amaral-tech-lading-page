import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, getLocationLabel } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { contact, social, businessHours, location } = siteConfig;
  const locationLabel = getLocationLabel();
  const area = location.serviceArea.join(", ");

  const details = [
    social.instagram && {
      icon: InstagramIcon,
      label: "Instagram",
      value: social.instagramHandle || "Siga a Amaral Tech",
      href: social.instagram,
    },
    contact.email && { icon: Mail, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
    (area || locationLabel) && { icon: MapPin, label: "Região de atendimento", value: area || locationLabel },
    businessHours && { icon: Clock, label: "Horário", value: businessHours },
  ].filter(Boolean) as { icon: React.ElementType; label: string; value: string; href?: string }[];

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative overflow-hidden border-t border-white/[0.05] bg-navy/40 py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[36rem] rounded-full bg-electric/10 blur-[140px]"
      />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              id="contato-title"
              eyebrow="Contato"
              title={
                <>
                  Solicite seu <span className="text-gradient">orçamento</span>
                </>
              }
              description="Preencha o formulário e sua solicitação será enviada pelo WhatsApp com todas as informações. Se preferir, fale diretamente com a gente."
            />

            <Reveal delay={120} className="mt-10 space-y-4">
              <a
                href={getWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-whatsapp/25 bg-whatsapp/[0.07] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-whatsapp/50"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-whatsapp text-[#04210f]">
                  <MessageCircle className="size-6" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-display font-bold text-snow">Fale pelo WhatsApp</span>
                  <span className="block text-sm text-muted">
                    {contact.phoneDisplay || "Atendimento direto com a Amaral Tech"}
                  </span>
                </span>
              </a>

              {details.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.14em] text-muted uppercase">{label}</span>
                      <span className="block font-medium text-snow">{value}</span>
                    </span>
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.07] p-5 transition-colors hover:border-cyan/30"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/[0.07] p-5">
                    {content}
                  </div>
                );
              })}
            </Reveal>

            <Reveal delay={200} className="mt-8 hidden lg:block">
              <ButtonLink href={getWhatsAppLink("general")} variant="whatsapp" icon="whatsapp">
                Conversar agora
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="gradient-border card-surface rounded-[2rem] p-6 sm:p-9">
              <p className="font-display text-xl font-bold text-snow">Solicitação de orçamento</p>
              <p className="mt-1.5 mb-7 text-sm text-muted">Campos marcados com * são obrigatórios.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
