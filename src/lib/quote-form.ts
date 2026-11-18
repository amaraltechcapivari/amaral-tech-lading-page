import type { QuoteRequest } from "./whatsapp";

export type QuoteErrors = Partial<Record<keyof QuoteRequest, string>>;

/** Aplica a máscara de telefone brasileiro: (11) 99999-9999 ou (11) 9999-9999. */
export function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function validateQuote(data: QuoteRequest): QuoteErrors {
  const errors: QuoteErrors = {};
  const phoneDigits = data.phone.replace(/\D/g, "");

  if (data.name.trim().length < 2) errors.name = "Informe seu nome.";
  if (phoneDigits.length < 10) errors.phone = "Informe um telefone válido com DDD.";
  if (!data.service) errors.service = "Selecione o serviço desejado.";
  if (data.message.trim().length < 5) errors.message = "Descreva brevemente sua necessidade.";

  return errors;
}
