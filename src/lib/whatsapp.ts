import { WHATSAPP_NUMBER } from "@/config/site";

/** Mensagens pré-formatadas usadas pelos botões do site. */
export const whatsappMessages = {
  general:
    "Olá! Conheci a Amaral Tech pelo site e gostaria de solicitar um orçamento.",
  eletrica: "Olá! Gostaria de solicitar um orçamento para instalações elétricas.",
  arCondicionado:
    "Olá! Gostaria de solicitar um orçamento para instalação ou higienização de ar-condicionado.",
  cameras:
    "Olá! Gostaria de solicitar um orçamento para instalação de câmeras de segurança.",
  redes: "Olá! Gostaria de solicitar um orçamento para infraestrutura de redes.",
  residencial:
    "Olá! Gostaria de solicitar um atendimento residencial com a Amaral Tech.",
  comercial:
    "Olá! Gostaria de solicitar um atendimento comercial para a minha empresa.",
  profissional:
    "Olá! Gostaria de falar com um profissional da Amaral Tech.",
  avaliacao:
    "Olá! Gostaria de deixar uma avaliação sobre o atendimento da Amaral Tech.",
} as const;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;

/** Remove tudo que não for dígito do número configurado. */
export function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

/**
 * Monta o link do WhatsApp (wa.me) com a mensagem codificada.
 * Sem número configurado, o WhatsApp abre para o visitante escolher o contato.
 */
export function buildWhatsAppUrl(message: string, phone: string = WHATSAPP_NUMBER) {
  const number = normalizePhone(phone);
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export function getWhatsAppLink(key: WhatsAppMessageKey = "general") {
  return buildWhatsAppUrl(whatsappMessages[key]);
}

export type QuoteRequest = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

/** Mensagem formatada enviada a partir do formulário de orçamento. */
export function formatQuoteMessage({ name, phone, service, message }: QuoteRequest) {
  return [
    "Olá! Vim pelo site da Amaral Tech e gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${name.trim()}`,
    `*Telefone:* ${phone.trim()}`,
    `*Serviço:* ${service.trim()}`,
    "*Mensagem:*",
    message.trim(),
  ].join("\n");
}
