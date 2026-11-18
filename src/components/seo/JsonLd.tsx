import { siteConfig, WHATSAPP_NUMBER } from "@/config/site";
import { services } from "@/config/content";

/**
 * Dados estruturados (Schema.org) para SEO local.
 * Inclui somente informações preenchidas em src/config/site.ts —
 * campos vazios não são publicados.
 */
export function JsonLd() {
  const { name, url, seo, logo, contact, social, location } = siteConfig;
  const phone = WHATSAPP_NUMBER ? `+${WHATSAPP_NUMBER.replace(/\D/g, "")}` : undefined;
  const sameAs = [social.instagram, social.facebook].filter(Boolean);
  const areaServed = location.serviceArea.length
    ? location.serviceArea.map((city) => ({ "@type": "City", name: city }))
    : location.city
      ? { "@type": "City", name: location.city }
      : undefined;
  const hasAddress = Boolean(location.city || location.streetAddress);

  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}/#empresa`,
    name,
    description: seo.description,
    url,
    logo: `${url}${logo.full}`,
    image: `${url}/opengraph-image.png`,
    ...(phone && { telephone: phone }),
    ...(contact.email && { email: contact.email }),
    ...(sameAs.length && { sameAs }),
    ...(areaServed && { areaServed }),
    ...(hasAddress && {
      address: {
        "@type": "PostalAddress",
        ...(location.streetAddress && { streetAddress: location.streetAddress }),
        ...(location.city && { addressLocality: location.city }),
        ...(location.state && { addressRegion: location.state }),
        ...(location.postalCode && { postalCode: location.postalCode }),
        addressCountry: "BR",
      },
    }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.description },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
