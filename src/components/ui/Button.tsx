import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./icons";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg" | "xl";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold tracking-tight transition-all duration-300 ease-premium active:scale-[0.98] focus-visible:outline-offset-4 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-r from-electric to-[#1aa6f5] text-white shadow-[0_10px_30px_-10px_rgba(22,139,255,0.75)] hover:shadow-[0_14px_40px_-10px_rgba(37,217,232,0.65)] hover:-translate-y-0.5 overflow-hidden before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/25 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
  secondary:
    "border border-white/15 bg-white/[0.04] text-snow backdrop-blur-md hover:border-cyan/50 hover:bg-white/[0.08] hover:-translate-y-0.5",
  ghost: "text-snow/90 hover:text-cyan",
  whatsapp:
    "bg-whatsapp text-[#04210f] shadow-[0_10px_30px_-10px_rgba(37,211,102,0.7)] hover:-translate-y-0.5 hover:brightness-105",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
  xl: "h-15 px-9 text-base sm:h-16 sm:px-11 sm:text-lg",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "whatsapp" | "none";
  children: ReactNode;
};

/** Botão em formato de link. Links externos (WhatsApp) abrem em nova aba. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "lg",
  icon = "arrow",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {icon === "whatsapp" && <WhatsAppIcon className="relative size-5 shrink-0" />}
      <span className="relative">{children}</span>
      {icon === "arrow" && (
        <ArrowRight
          className="relative size-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
