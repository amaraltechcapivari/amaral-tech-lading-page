import Image from "next/image";
import { MessageSquareQuote, Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/config/content";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatDate(date: string) {
  const [year, month] = date.split("-").map(Number);
  if (!year || !month) return date;
  const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  return `${months[month - 1]}. ${year}`;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, rating, comment, date, service, photo } = testimonial;
  return (
    <figure className="gradient-border card-surface flex h-full flex-col rounded-3xl p-7">
      <div className="flex items-center justify-between">
        <div className="flex gap-1" role="img" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`size-4 ${i < rating ? "fill-cyan text-cyan" : "text-white/20"}`}
              aria-hidden="true"
            />
          ))}
        </div>
        <Quote className="size-7 text-electric/40" aria-hidden="true" />
      </div>
      <blockquote className="mt-5 flex-1 leading-relaxed text-snow/85">“{comment}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        {photo ? (
          <Image src={photo} alt="" width={44} height={44} className="size-11 rounded-full object-cover" />
        ) : (
          <span className="grid size-11 place-items-center rounded-full bg-linear-to-br from-electric to-cyan font-display font-bold text-white">
            {name.charAt(0)}
          </span>
        )}
        <span>
          <span className="block font-display text-sm font-bold text-snow">{name}</span>
          <span className="block text-xs text-muted">
            {[service, formatDate(date)].filter(Boolean).join(" · ")}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="avaliacoes-title"
          eyebrow="Avaliações"
          title={
            <>
              Quem contrata, <span className="text-gradient">recomenda.</span>
            </>
          }
          description={
            hasTestimonials
              ? "A opinião de quem já contou com a Amaral Tech."
              : "Este espaço é reservado para as avaliações reais dos nossos clientes."
          }
        />

        {hasTestimonials ? (
          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={`${t.name}-${t.date}`} delay={(i % 3) * 100}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="mx-auto mt-14 max-w-2xl">
            <div className="gradient-border card-surface relative overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-12">
              <div
                aria-hidden="true"
                className="absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-electric/15 blur-3xl"
              />
              <span className="relative mx-auto grid size-14 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
                <MessageSquareQuote className="size-6" aria-hidden="true" />
              </span>
              <p className="relative mt-6 font-display text-xl font-bold text-snow">Já foi atendido pela Amaral Tech?</p>
              <p className="relative mx-auto mt-3 max-w-md leading-relaxed text-muted">
                Sua opinião ajuda outras pessoas a conhecerem nosso trabalho. Conte como foi sua experiência pelo
                WhatsApp.
              </p>
              <ButtonLink
                href={getWhatsAppLink("avaliacao")}
                variant="secondary"
                size="md"
                icon="whatsapp"
                className="relative mt-7"
              >
                Enviar minha avaliação
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
