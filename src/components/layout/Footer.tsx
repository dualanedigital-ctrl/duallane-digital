"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { InstagramIcon, LinkedinIcon, XIcon } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/lib/site";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "X", href: siteConfig.social.x, icon: XIcon },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background-elevated">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm text-foreground-muted">
            {t.footer.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground-muted transition-all hover:border-accent/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            <InstagramIcon className="h-4 w-4" />
            {siteConfig.instagramHandle}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-foreground">{t.footer.navigationTitle}</h3>
          {t.nav.links.map((link) => (
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
          <h3 className="text-sm font-medium text-foreground">{t.footer.contactTitle}</h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <Link
            href="/mentions-legales"
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {t.footer.legalLink}
          </Link>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-foreground-subtle sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {t.footer.allRightsReserved}
          </p>
          <p>{t.footer.designedWithCare}</p>
        </Container>
      </div>
    </footer>
  );
}
