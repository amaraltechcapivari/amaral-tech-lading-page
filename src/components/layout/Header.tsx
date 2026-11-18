"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/config/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { BrandMark } from "@/components/ui/BrandMark";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção visível no momento.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Menu mobile: trava a rolagem e fecha com Esc.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        solid
          ? "border-b border-white/[0.06] bg-ink/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <nav
        aria-label="Navegação principal"
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-500 sm:px-6 lg:px-8 ${
          scrolled ? "h-16 lg:h-[4.5rem]" : "h-18 lg:h-22"
        }`}
      >
        <a href="#inicio" aria-label="Amaral Tech — voltar ao início" onClick={() => setOpen(false)}>
          <BrandMark />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-snow ${
                    isActive ? "text-snow" : "text-muted"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-px bg-linear-to-r from-electric to-cyan transition-transform duration-500 ease-premium ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={getWhatsAppLink("general")} size="md" icon="none">
              Solicitar orçamento
            </ButtonLink>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-snow transition-colors hover:border-cyan/40 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-premium lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <div className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/[0.06] px-4 pt-6 pb-10 sm:px-6">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={`transition-all duration-500 ease-premium ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-4 font-display text-xl font-bold transition-colors ${
                      active === link.href ? "bg-white/[0.06] text-snow" : "text-snow/80 hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`size-1.5 rounded-full ${active === link.href ? "bg-cyan" : "bg-transparent"}`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <ButtonLink href={getWhatsAppLink("general")} size="lg" icon="none" onClick={() => setOpen(false)}>
                Solicitar orçamento
              </ButtonLink>
              <ButtonLink
                href={getWhatsAppLink("profissional")}
                variant="secondary"
                size="lg"
                icon="none"
                onClick={() => setOpen(false)}
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="size-5 text-whatsapp" /> Falar no WhatsApp
                </span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
