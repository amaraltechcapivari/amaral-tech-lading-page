"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, Send } from "lucide-react";
import { quoteServiceOptions } from "@/config/content";
import { buildWhatsAppUrl, formatQuoteMessage, type QuoteRequest } from "@/lib/whatsapp";
import { maskPhone, validateQuote, type QuoteErrors } from "@/lib/quote-form";

const initial: QuoteRequest = { name: "", phone: "", service: "", message: "" };

const fieldBase =
  "w-full rounded-xl border bg-ink/60 px-4 py-3.5 text-[0.95rem] text-snow placeholder:text-subtle transition-all duration-300 outline-none focus:border-electric focus:bg-ink/80 focus:ring-4 focus:ring-electric/15";

export function ContactForm() {
  const [values, setValues] = useState<QuoteRequest>(initial);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof QuoteRequest, boolean>>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const update =
    (field: keyof QuoteRequest) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = field === "phone" ? maskPhone(e.target.value) : e.target.value;
      const next = { ...values, [field]: value };
      setValues(next);
      if (touched[field]) setErrors(validateQuote(next));
    };

  const blur = (field: keyof QuoteRequest) => () => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validateQuote(values));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validateQuote(values);
    setErrors(found);
    setTouched({ name: true, phone: true, service: true, message: true });

    const firstInvalid = (Object.keys(found) as (keyof QuoteRequest)[])[0];
    if (firstInvalid) {
      document.getElementById(`quote-${firstInvalid}`)?.focus();
      return;
    }

    const url = buildWhatsAppUrl(formatQuoteMessage(values));
    // Sem "noopener" nas features: com ele o window.open sempre retorna null.
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url; // pop-up bloqueado: abre na mesma aba
    setSentUrl(url);
  };

  const showError = (field: keyof QuoteRequest) => (touched[field] ? errors[field] : undefined);

  const fieldClass = (field: keyof QuoteRequest) =>
    `${fieldBase} ${showError(field) ? "border-red-400/70" : "border-white/10 hover:border-white/20"}`;

  if (sentUrl) {
    return (
      <div className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
        <span className="grid size-16 place-items-center rounded-full bg-whatsapp/15 text-whatsapp">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <p className="mt-6 font-display text-2xl font-bold text-snow">Mensagem pronta!</p>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Abrimos o WhatsApp com os dados da sua solicitação. É só enviar a mensagem para concluir.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={sentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-whatsapp px-6 font-display text-sm font-semibold text-[#04210f] transition-all hover:-translate-y-0.5"
          >
            Abrir WhatsApp novamente
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(initial);
              setTouched({});
              setErrors({});
              setSentUrl(null);
            }}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 font-display text-sm font-semibold text-snow transition-colors hover:border-cyan/50"
          >
            Nova solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-label="Formulário de solicitação de orçamento" className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="quote-name" label="Nome" error={showError("name")}>
          <input
            id="quote-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            value={values.name}
            onChange={update("name")}
            onBlur={blur("name")}
            aria-invalid={Boolean(showError("name"))}
            aria-describedby={showError("name") ? "quote-name-error" : undefined}
            required
            className={fieldClass("name")}
          />
        </Field>
        <Field id="quote-phone" label="Telefone" error={showError("phone")}>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(00) 00000-0000"
            value={values.phone}
            onChange={update("phone")}
            onBlur={blur("phone")}
            aria-invalid={Boolean(showError("phone"))}
            aria-describedby={showError("phone") ? "quote-phone-error" : undefined}
            required
            className={fieldClass("phone")}
          />
        </Field>
      </div>

      <Field id="quote-service" label="Serviço" error={showError("service")}>
        <div className="relative">
          <select
            id="quote-service"
            name="service"
            value={values.service}
            onChange={update("service")}
            onBlur={blur("service")}
            aria-invalid={Boolean(showError("service"))}
            aria-describedby={showError("service") ? "quote-service-error" : undefined}
            required
            className={`${fieldClass("service")} appearance-none pr-11 ${values.service ? "" : "text-subtle"}`}
          >
            <option value="" disabled>
              Selecione o serviço desejado
            </option>
            {quoteServiceOptions.map((option) => (
              <option key={option} value={option} className="bg-navy text-snow">
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
        </div>
      </Field>

      <Field id="quote-message" label="Mensagem" error={showError("message")}>
        <textarea
          id="quote-message"
          name="message"
          rows={5}
          placeholder="Conte o que você precisa: tipo de serviço, local, quantidade de pontos ou equipamentos..."
          value={values.message}
          onChange={update("message")}
          onBlur={blur("message")}
          aria-invalid={Boolean(showError("message"))}
          aria-describedby={showError("message") ? "quote-message-error" : undefined}
          required
          className={`${fieldClass("message")} resize-y`}
        />
      </Field>

      <button
        type="submit"
        className="group relative mt-1 inline-flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-linear-to-r from-electric to-[#1aa6f5] font-display text-base font-semibold text-white shadow-[0_10px_30px_-10px_rgba(22,139,255,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(37,217,232,0.65)] active:scale-[0.99]"
      >
        <Send className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-xs text-subtle">
        Ao enviar, o WhatsApp será aberto com sua mensagem pronta. Nenhum dado é armazenado neste site.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-snow/90">
        {label} <span className="text-cyan" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
