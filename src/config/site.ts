/**
 * ============================================================================
 *  CONFIGURAÇÃO CENTRAL — AMARAL TECH
 * ============================================================================
 *  Todas as informações comerciais do site ficam neste arquivo.
 *  Edite aqui e o site inteiro (textos, links, SEO e Schema.org) é atualizado.
 *
 *  Campos vazios ("") são tratados como "não configurado": o item
 *  correspondente fica oculto no site e não é enviado ao Google (Schema.org).
 *  Nunca preencha com dados que não sejam reais.
 * ============================================================================
 */

/**
 * >>> NÚMERO OFICIAL DO WHATSAPP <<<
 *
 * Formato internacional, somente dígitos: código do país + DDD + número.
 * Exemplo de FORMATO (NÃO é um número real): 5511999999999
 *
 * Se ficar vazio, os botões abrem o WhatsApp sem destinatário
 * definido (o visitante escolhe o contato), e nenhum telefone é exibido.
 */
export const WHATSAPP_NUMBER: string = "5519994521218";

function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Amaral Tech",
  legalName: "Amaral Tech", // Razão social, se desejar exibir no rodapé
  segment: "Assistência Técnica",
  slogan: "Conectando soluções. Construindo confiança.",

  /**
   * Domínio oficial do site (sem barra no final), ex.: "https://www.seudominio.com.br".
   * Usado em SEO, sitemap, robots e Open Graph.
   * Ordem: NEXT_PUBLIC_SITE_URL → domínio de produção da Vercel
   * (VERCEL_PROJECT_PRODUCTION_URL, definido automaticamente) → localhost.
   */
  url: getSiteUrl(),

  seo: {
    title: "Amaral Tech | Instalações, Climatização, Segurança e Redes",
    description:
      "Conheça a Amaral Tech. Soluções em instalações elétricas, ar-condicionado, higienização, câmeras de segurança e infraestrutura de redes para residências e empresas.",
    keywords: [
      "instalações elétricas",
      "eletricista",
      "instalação de ar-condicionado",
      "higienização de ar-condicionado",
      "instalação de câmeras de segurança",
      "infraestrutura de redes",
      "cabeamento estruturado",
      "assistência técnica",
    ],
    locale: "pt_BR",
  },

  /** Logotipo original (não alterar o arquivo). */
  logo: {
    full: "/brand/amaral-tech-logo.png", // logotipo completo (891 × 484)
    fullWidth: 891,
    fullHeight: 484,
    symbol: "/brand/amaral-tech-symbol.png", // recorte exato do símbolo "AT" (269 × 280)
    symbolWidth: 269,
    symbolHeight: 280,
  },

  contact: {
    whatsapp: WHATSAPP_NUMBER,
    /** Telefone para exibição, ex.: "(11) 99999-9999". Vazio = oculto. */
    phoneDisplay: "(19) 99452-1218",
    /** E-mail comercial. Vazio = oculto. */
    email: "",
  },

  social: {
    /** URL completa do perfil, ex.: "https://www.instagram.com/seuperfil". Vazio = oculto. */
    instagram: "",
    /** @ do Instagram para exibição, ex.: "@seuperfil". */
    instagramHandle: "",
    facebook: "",
  },

  /** SEO local — preencha quando quiser divulgar a área de atendimento. */
  location: {
    city: "", // ex.: "São Paulo"
    state: "", // ex.: "SP"
    /** Regiões / cidades atendidas, ex.: ["São Paulo", "Guarulhos"]. */
    serviceArea: [] as string[],
    /** Endereço físico (somente se houver atendimento no local). */
    streetAddress: "",
    postalCode: "",
  },

  /** Horário de atendimento para exibição, ex.: "Seg. a sex., 8h às 18h". Vazio = oculto. */
  businessHours: "",
};

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;

/** Texto "Cidade - UF" ou "" quando não configurado. */
export function getLocationLabel() {
  const { city, state } = siteConfig.location;
  return [city, state].filter(Boolean).join(" - ");
}
