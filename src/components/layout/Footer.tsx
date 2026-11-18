import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig, getLocationLabel } from "@/config/site";
import { services } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { FullLogo } from "@/components/ui/BrandMark";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();
  const { contact, social, slogan, name, legalName, businessHours } = siteConfig;
  const location = getLocationLabel();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#060a14]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-electric/10 blur-[120px]"
      />
      <Container className="relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="inline-block rounded-2xl bg-snow px-6 py-5 shadow-[0_20px_50px_-25px_rgba(22,139,255,0.6)]">
              <FullLogo className="w-44" />
            </div>
            <p className="mt-6 font-display text-lg font-semibold text-snow">{slogan}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Instalações elétricas, climatização, segurança eletrônica e infraestrutura de redes para
              residências e empresas.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={getWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Amaral Tech"
                className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-snow transition-all hover:-translate-y-0.5 hover:border-whatsapp/50 hover:text-whatsapp"
              >
                <WhatsAppIcon className="size-5" />
              </a>
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Amaral Tech"
                  className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-snow transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-cyan"
                >
                  <InstagramIcon className="size-5" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Links do rodapé" className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-snow uppercase">Navegação</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-cyan">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-snow uppercase">Serviços</h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={getWhatsAppLink(service.whatsappKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-cyan"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold tracking-[0.16em] text-snow uppercase">Contato</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li>
                <a
                  href={getWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-whatsapp"
                >
                  <WhatsAppIcon className="size-4 shrink-0" />
                  {contact.phoneDisplay ? `WhatsApp ${contact.phoneDisplay}` : "Fale pelo WhatsApp"}
                </a>
              </li>
              {social.instagram && (
                <li>
                  <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-cyan"
                  >
                    <InstagramIcon className="size-4 shrink-0" />
                    {social.instagramHandle || "Instagram"}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 transition-colors hover:text-cyan">
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phoneDisplay && (
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  {contact.phoneDisplay}
                </li>
              )}
              {location && (
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0" aria-hidden="true" />
                  {location}
                </li>
              )}
              {businessHours && <li className="pl-7">{businessHours}</li>}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {legalName || name}. Todos os direitos reservados.
          </p>
          <p>Imagens de serviços meramente ilustrativas.</p>
        </div>
      </Container>
    </footer>
  );
}
