"use client";

import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="tarifs" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {t.pricing.items.map((plan) => (
            <Reveal key={plan.name}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 hover:border-border-strong hover:bg-surface-hover">
                {plan.badge && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                    {plan.badge}
                  </span>
                )}

                <p className="text-xs font-semibold tracking-wide text-foreground-muted uppercase">
                  {plan.name}
                </p>

                <div className="mt-3 flex flex-wrap items-baseline gap-x-1.5 gap-y-0">
                  <span className="text-4xl font-bold whitespace-nowrap text-gradient sm:text-5xl">
                    {plan.heroPrice}
                  </span>
                  {plan.heroSuffix && (
                    <span className="text-base font-medium whitespace-nowrap text-foreground-muted">
                      {plan.heroSuffix}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-foreground-muted">{plan.subtitle}</p>

                {plan.downPayment && (
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm text-foreground">{plan.downPayment}</p>
                  </div>
                )}

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href="#contact" variant="secondary" className="mt-8 w-full">
                  {plan.ctaLabel}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto max-w-2xl text-center text-sm text-foreground-muted">{t.pricing.note}</p>
      </Container>
    </section>
  );
}
