"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DemoLanguageSwitcher } from "@/components/demo/DemoLanguageSwitcher";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { demoUiStrings } from "@/lib/demo-i18n/uiStrings";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type DemoNavLink = { label: string; href: string };

export function DemoNavbar({
  businessName,
  icon: Icon,
  navLinks,
  ctaLabel,
  ctaHref,
}: {
  businessName: string;
  icon: LucideIcon;
  navLinks: DemoNavLink[];
  ctaLabel: string;
  ctaHref: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale } = useDemoLanguage();
  const ui = demoUiStrings[locale];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white">
            <Icon className="h-4 w-4" />
          </span>
          {businessName}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <DemoLanguageSwitcher />
          <span className="rounded-full border border-border-strong bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-foreground-subtle">
            {ui.demoBadge}
          </span>
          <Button href={ctaHref} size="md" className="hover:translate-y-0 hover:shadow-none active:translate-y-0">
            {ctaLabel}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <span className="rounded-full border border-border-strong bg-surface px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground-subtle">
            {ui.demoBadge}
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base text-foreground-muted transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <DemoLanguageSwitcher className="w-fit" />
              <Button
                href={ctaHref}
                size="md"
                className="w-full hover:translate-y-0 hover:shadow-none active:translate-y-0"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
