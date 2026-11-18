import Image from "next/image";
import { siteConfig } from "@/config/site";

/**
 * Marca para fundos escuros: símbolo original "AT" + nome da empresa.
 * O símbolo é um recorte exato do logotipo original, sem alterações.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  const { logo, name, segment } = siteConfig;
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Image
        src={logo.symbol}
        alt=""
        width={logo.symbolWidth}
        height={logo.symbolHeight}
        className="h-10 w-auto sm:h-11"
        preload
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-snow sm:text-xl">{name}</span>
        <span className="mt-1 text-[0.62rem] font-medium tracking-[0.18em] whitespace-nowrap sm:text-[0.68rem] sm:tracking-[0.2em] text-muted uppercase">{segment}</span>
      </span>
    </span>
  );
}

/** Logotipo completo original (melhor exibido sobre fundo claro). */
export function FullLogo({ className = "" }: { className?: string }) {
  const { logo, name } = siteConfig;
  return (
    <Image
      src={logo.full}
      alt={`Logotipo ${name}`}
      width={logo.fullWidth}
      height={logo.fullHeight}
      className={`h-auto ${className}`}
      sizes="240px"
    />
  );
}
