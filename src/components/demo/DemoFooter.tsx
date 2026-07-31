"use client";

import Link from "next/link";
import { Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { demoUiStrings } from "@/lib/demo-i18n/uiStrings";

export type DemoQuickLink = { label: string; href: string };

export function DemoFooter({
  businessName,
  icon: Icon,
  tagline,
  quickLinks,
  address,
  phone,
  email,
}: {
  businessName: string;
  icon: LucideIcon;
  tagline: string;
  quickLinks: DemoQuickLink[];
  address: string;
  phone: string;
  email: string;
}) {
  const year = new Date().getFullYear();
  const { locale } = useDemoLanguage();
  const ui = demoUiStrings[locale];

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-white">
              <Icon className="h-4 w-4" />
            </span>
            {businessName}
          </div>
          <p className="max-w-sm text-sm text-foreground-muted">{tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-foreground">{ui.quickLinks}</h3>
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-foreground">{ui.contact}</h3>
          <p className="text-sm text-foreground-muted">{address}</p>
          <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="text-sm text-foreground-muted transition-colors hover:text-foreground">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="text-sm text-foreground-muted transition-colors hover:text-foreground">
            {email}
          </a>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-foreground-subtle sm:flex-row">
          <p>
            © {year} {businessName}. {ui.allRightsReserved}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-foreground-subtle transition-colors hover:text-accent"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {ui.designCredit}
          </Link>
        </Container>
      </div>
    </footer>
  );
}
