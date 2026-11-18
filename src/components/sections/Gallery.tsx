import Image from "next/image";
import { gallery } from "@/config/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Formato de cada posição no mosaico (desktop, grade de 4 colunas).
 * As posições seguem a ordem da lista `gallery` em src/config/content.ts.
 * Dica: posições "tall" combinam melhor com fotos verticais.
 */
const layout = [
  "col-span-2 row-span-2", // grande
  "", // pequena
  "", // pequena
  "lg:row-span-2", // tall
  "lg:row-span-2", // tall
  "lg:col-span-2", // wide
  "lg:col-span-2", // wide
  "col-span-2", // wide (também largura total no celular)
];

export function Gallery() {
  const hasIllustrative = gallery.some((item) => item.illustrative);

  return (
    <section id="galeria" aria-labelledby="galeria-title" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="galeria-title"
          eyebrow="Galeria"
          title={
            <>
              Nossas áreas de atuação <span className="text-gradient">em imagens</span>
            </>
          }
          description="Elétrica, climatização, segurança eletrônica e redes: soluções para diferentes tipos de ambiente."
        />

        <ul className="mt-16 grid grid-cols-2 gap-3 auto-rows-[170px] sm:auto-rows-[230px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[210px] xl:auto-rows-[240px]">
          {gallery.map((item, i) => (
            <Reveal
              as="li"
              key={item.src}
              delay={(i % 4) * 80}
              className={layout[i] ?? ""}
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-navy">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-[1.2s] ease-premium group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                {item.illustrative && (
                  <span className="absolute top-3 left-3 rounded-full bg-ink/60 px-2.5 py-1 text-[0.62rem] font-medium tracking-wide text-snow/75 backdrop-blur-md">
                    Imagem ilustrativa
                  </span>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-cyan uppercase">
                    {item.category}
                  </span>
                  <p className="mt-1 font-display text-sm font-bold text-snow transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 sm:text-base">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {hasIllustrative && (
          <p className="mt-6 text-center text-xs text-subtle">
            Imagens ilustrativas de banco de imagens, utilizadas para representar os tipos de serviço.
          </p>
        )}
      </Container>
    </section>
  );
}
