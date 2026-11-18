/**
 * ============================================================================
 *  CONTEÚDO DA LANDING PAGE — serviços, diferenciais, galeria, FAQ, avaliações.
 * ============================================================================
 *  Para trocar uma imagem por foto real dos seus trabalhos:
 *   1. Coloque o arquivo em /public/images/... (de preferência .webp ou .jpg).
 *   2. Atualize o campo `src` (e o `alt`) do item abaixo.
 *   3. Na galeria, marque `illustrative: false` para remover o selo
 *      "Imagem ilustrativa".
 * ============================================================================
 */
import {
  BadgeCheck,
  CalendarCheck,
  Cctv,
  ClipboardList,
  Eye,
  FileText,
  HeartHandshake,
  House,
  Building,
  Lightbulb,
  MessageCircle,
  Network,
  ShieldCheck,
  Snowflake,
  Sparkles,
  UserRoundCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { WhatsAppMessageKey } from "@/lib/whatsapp";

export type Service = {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  image: { src: string; alt: string };
  whatsappKey: WhatsAppMessageKey;
};

export const services: Service[] = [
  {
    id: "eletrica",
    title: "Instalações Elétricas",
    shortLabel: "Instalações elétricas",
    description:
      "Instalações, melhorias e manutenção elétrica para residências, comércios e empresas.",
    items: [
      "Tomadas e interruptores",
      "Iluminação",
      "Instalações elétricas",
      "Melhorias e manutenção",
    ],
    icon: Zap,
    image: {
      src: "/images/servicos/eletrica.webp",
      alt: "Mãos de eletricista instalando tomadas em parede com alicate",
    },
    whatsappKey: "eletrica",
  },
  {
    id: "ar-condicionado",
    title: "Ar-condicionado",
    shortLabel: "Climatização",
    description:
      "Instalação e higienização para proporcionar mais conforto e cuidado com seu equipamento.",
    items: [
      "Instalação",
      "Higienização",
      "Limpeza preventiva",
      "Atendimento residencial e comercial",
    ],
    icon: Snowflake,
    image: {
      src: "/images/servicos/ar-condicionado.webp",
      alt: "Técnico realizando manutenção em sistema de ar-condicionado",
    },
    whatsappKey: "arCondicionado",
  },
  {
    id: "cameras",
    title: "Câmeras de Segurança",
    shortLabel: "Segurança",
    description:
      "Instalação de sistemas de câmeras para ajudar a proteger residências, comércios e empresas.",
    items: [
      "Instalação de câmeras",
      "Configuração",
      "Sistemas de monitoramento",
      "Soluções de segurança",
    ],
    icon: Cctv,
    image: {
      src: "/images/servicos/cameras.webp",
      alt: "Câmera de segurança do tipo dome instalada em parede",
    },
    whatsappKey: "cameras",
  },
  {
    id: "redes",
    title: "Infraestrutura de Redes",
    shortLabel: "Redes",
    description:
      "Projetos de infraestrutura e cabeamento para conectividade e organização dos seus equipamentos.",
    items: [
      "Cabeamento estruturado",
      "Pontos de rede",
      "Organização de racks",
      "Infraestrutura de internet",
    ],
    icon: Network,
    image: {
      src: "/images/servicos/redes.webp",
      alt: "Técnico organizando cabos de rede conectados a um switch em rack",
    },
    whatsappKey: "redes",
  },
];

export type Differential = { title: string; description: string; icon: LucideIcon };

export const differentials: Differential[] = [
  {
    title: "Atendimento personalizado",
    description: "Entendemos a sua necessidade antes de propor qualquer solução.",
    icon: UserRoundCheck,
  },
  {
    title: "Compromisso com a qualidade",
    description: "Execução cuidadosa, com materiais e técnicas adequados a cada serviço.",
    icon: BadgeCheck,
  },
  {
    title: "Organização e cuidado com o ambiente",
    description: "Respeito ao seu espaço durante o serviço e ambiente organizado ao final.",
    icon: Sparkles,
  },
  {
    title: "Soluções para residências e empresas",
    description: "Atendimento adaptado à rotina da sua casa ou do seu negócio.",
    icon: House,
  },
  {
    title: "Tecnologia e inovação",
    description: "Soluções atuais para mais conforto, segurança e conectividade.",
    icon: Lightbulb,
  },
  {
    title: "Transparência no atendimento",
    description: "Comunicação clara sobre o que será feito, do orçamento à execução.",
    icon: Eye,
  },
  {
    title: "Atenção aos detalhes",
    description: "Acabamento e organização pensados para durar e funcionar bem.",
    icon: ShieldCheck,
  },
  {
    title: "Foco na satisfação do cliente",
    description: "Nosso trabalho só termina quando a solução atende ao que você precisa.",
    icon: HeartHandshake,
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: string;
  /** true = imagem de banco de imagens (exibe o selo "Imagem ilustrativa"). */
  illustrative: boolean;
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/galeria/instalacao-eletrica.webp",
    alt: "Profissional instalando ponto elétrico na parede com parafusadeira",
    caption: "Instalação elétrica",
    category: "Elétrica",
    illustrative: true,
  },
  {
    src: "/images/galeria/cabeamento-estruturado.webp",
    alt: "Cabos de fibra e rede conectados a equipamentos em rack",
    caption: "Cabeamento estruturado",
    category: "Redes",
    illustrative: true,
  },
  {
    src: "/images/galeria/instalacao-ar-condicionado.webp",
    alt: "Técnico trabalhando em unidade externa de ar-condicionado split",
    caption: "Instalação de ar-condicionado",
    category: "Climatização",
    illustrative: true,
  },
  {
    src: "/images/galeria/quadro-eletrico.webp",
    alt: "Quadro elétrico com disjuntores e fiação organizada",
    caption: "Quadro elétrico organizado",
    category: "Elétrica",
    illustrative: true,
  },
  {
    src: "/images/galeria/camera-seguranca.webp",
    alt: "Câmera de segurança dome fixada em parede de prédio",
    caption: "Instalação de câmeras",
    category: "Segurança",
    illustrative: true,
  },
  {
    src: "/images/galeria/ar-condicionado-split.webp",
    alt: "Ar-condicionado split instalado em parede de ambiente interno",
    caption: "Higienização de ar-condicionado",
    category: "Climatização",
    illustrative: true,
  },
  {
    src: "/images/galeria/rack-de-redes.webp",
    alt: "Rack de redes com equipamentos e cabeamento organizado",
    caption: "Rack de redes",
    category: "Redes",
    illustrative: true,
  },
  {
    src: "/images/galeria/tecnico-em-servico.webp",
    alt: "Técnico verificando quadro de distribuição em residência",
    caption: "Técnico em serviço",
    category: "Elétrica",
    illustrative: true,
  },
];

export const audiences = [
  {
    id: "residencial",
    eyebrow: "Residencial",
    title: "Soluções para sua casa",
    text: "Mais conforto, segurança e praticidade para seu lar. Cuidamos das instalações e soluções tecnológicas para você aproveitar seu ambiente com tranquilidade.",
    cta: "Solicitar atendimento residencial",
    whatsappKey: "residencial" as const,
    icon: House,
    image: {
      src: "/images/atendimento/residencial.webp",
      alt: "Profissional instalando luminária pendente no teto de um apartamento",
    },
  },
  {
    id: "comercial",
    eyebrow: "Comercial",
    title: "Soluções para sua empresa",
    text: "Infraestrutura, instalações e tecnologia para manter seu negócio funcionando com organização, eficiência e segurança.",
    cta: "Solicitar atendimento comercial",
    whatsappKey: "comercial" as const,
    icon: Building,
    image: {
      src: "/images/atendimento/comercial.webp",
      alt: "Profissional operando computador em sala de equipamentos de rede",
    },
  },
];

export const processSteps = [
  {
    title: "Entre em contato",
    text: "Você chama pelo WhatsApp e explica sua necessidade.",
    icon: MessageCircle,
  },
  {
    title: "Entendemos seu projeto",
    text: "Avaliamos a necessidade e as informações para o serviço.",
    icon: ClipboardList,
  },
  {
    title: "Receba seu orçamento",
    text: "Apresentamos a proposta conforme o serviço solicitado.",
    icon: FileText,
  },
  {
    title: "Agendamento e execução",
    text: "Após a aprovação, alinhamos o atendimento e a execução do serviço.",
    icon: CalendarCheck,
  },
];

export const faqs = [
  {
    question: "Quais serviços a Amaral Tech oferece?",
    answer:
      "Trabalhamos com instalações elétricas, instalação e higienização de ar-condicionado, instalação de câmeras de segurança e infraestrutura de redes, incluindo cabeamento estruturado e organização de racks.",
  },
  {
    question: "Vocês atendem residências e empresas?",
    answer:
      "Sim. Atendemos residências, comércios, escritórios e empresas, adaptando a solução ao tipo de ambiente e à rotina de cada cliente.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Basta clicar em qualquer botão de orçamento do site ou preencher o formulário de contato. Você será direcionado ao WhatsApp para nos contar o que precisa.",
  },
  {
    question: "Vocês realizam instalação de ar-condicionado?",
    answer:
      "Sim. Realizamos a instalação de ar-condicionado em ambientes residenciais e comerciais. Envie as informações do equipamento e do local para avaliarmos o serviço.",
  },
  {
    question: "Vocês fazem higienização de ar-condicionado?",
    answer:
      "Sim. Fazemos higienização e limpeza preventiva, que ajudam a manter o equipamento conservado e o ar do ambiente mais limpo.",
  },
  {
    question: "Vocês instalam câmeras de segurança?",
    answer:
      "Sim. Instalamos e configuramos sistemas de câmeras para residências, comércios e empresas, com organização dos equipamentos e da fiação.",
  },
  {
    question: "Vocês trabalham com infraestrutura de redes?",
    answer:
      "Sim. Executamos cabeamento estruturado, instalação de pontos de rede, organização de cabos e racks e infraestrutura para internet e computadores.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "Após a aprovação do orçamento, combinamos pelo WhatsApp a data e o horário mais adequados para a execução do serviço.",
  },
];

/** Opções do campo "Serviço" do formulário de orçamento. */
export const quoteServiceOptions = [
  "Instalações elétricas",
  "Instalação de ar-condicionado",
  "Higienização de ar-condicionado",
  "Câmeras de segurança",
  "Infraestrutura de redes",
  "Outros",
];

/**
 * ============================================================================
 *  AVALIAÇÕES DE CLIENTES
 * ============================================================================
 *  Adicione aqui SOMENTE avaliações reais, com autorização do cliente.
 *  Enquanto a lista estiver vazia, a seção exibe um convite para avaliar
 *  em vez de cards.
 *
 *  Exemplo de estrutura (PLACEHOLDER — não é uma avaliação real):
 *  {
 *    name: "Nome do cliente",
 *    rating: 5,                       // 1 a 5
 *    comment: "Comentário do cliente.",
 *    date: "2026-01-15",              // AAAA-MM-DD
 *    service: "Instalação de câmeras", // opcional
 *    photo: "/images/avaliacoes/cliente.webp", // opcional
 *  },
 * ============================================================================
 */
export type Testimonial = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  date: string;
  service?: string;
  photo?: string;
};

export const testimonials: Testimonial[] = [];
