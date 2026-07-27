"use client";

import {
  LayoutTemplate,
  RefreshCcw,
  TrendingUp,
  Wrench,
  Server,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { servicesIcons } from "@/lib/site";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const icons: Record<string, LucideIcon> = {
  LayoutTemplate,
  RefreshCcw,
  TrendingUp,
  Wrench,
  Server,
};

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[servicesIcons[index]];
            const featured = index === 0;
            return (
              <Reveal key={service.title} delay={(index % 3) * 0.08} className={featured ? "lg:col-span-1" : ""}>
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
                    featured
                      ? "border-accent/40 bg-gradient-to-b from-accent/10 via-surface to-surface"
                      : "border-border bg-surface hover:border-border-strong hover:bg-surface-hover"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground-muted"
                      >
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
