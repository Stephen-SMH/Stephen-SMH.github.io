"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dict, Locale } from "@/content";
import { LangSwitcher } from "./LangSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Nav({ locale, brand, nav }: { locale: Locale; brand: Dict["brand"]; nav: Dict["nav"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#experience", label: nav.experience },
    { href: "#projects", label: nav.projects },
    { href: "#blog", label: nav.notes },
    { href: "#contact", label: nav.contact },
  ];

  const cta =
    "whitespace-nowrap rounded-full border border-accent/40 bg-accent-soft px-3 py-2 font-mono text-[12px] text-accent-soft-ink transition hover:bg-accent/20";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open ? "border-rule bg-paper/85 backdrop-blur-[10px]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-7">
        <Link href={`/${locale}`} className="group flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-sm text-ink">
          <span className="text-accent">~</span>
          <span className="tracking-tight">{brand.handle}</span>
          <span className="hidden h-4 w-[7px] animate-blink bg-accent/80 group-hover:bg-accent sm:block" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 font-mono text-[13px] text-ink-soft transition hover:bg-paper-sunken hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LangSwitcher current={locale} label={nav.switchLanguage} />
          <ThemeToggle label={nav.toggleTheme} />
          <a href="/cv.pdf" download className={`hidden sm:inline-flex ${cta}`}>
            {nav.downloadCv}
          </a>
          <button
            type="button"
            aria-label={nav.menu}
            title={nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink-soft lg:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span className={`absolute inset-x-0 h-px bg-current transition-all ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute inset-x-0 top-1/2 h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 h-px bg-current transition-all ${open ? "bottom-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Sections"
          className="border-t border-rule bg-paper-raised shadow-float lg:hidden"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col gap-1 px-5 py-3 sm:px-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-mono text-[13px] text-ink-soft transition hover:bg-paper-sunken hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a href="/cv.pdf" download className={`mt-2 inline-flex justify-center ${cta}`}>
              {nav.downloadCv}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
