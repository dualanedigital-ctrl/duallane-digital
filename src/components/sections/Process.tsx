"use client";

import { MessagesSquare, PenTool, Code2, Rocket, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/site";
import { useTranslation } from "@/lib/i18n/LanguageContext";

const icons: Record<string, LucideIcon> = {
  MessagesSquare,
  PenTool,
  Code2,
  Rocket,
};

export function Process() {
  const { t } = useTranslation();

  return (
    <section id="processus" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block"
          />
          {t.process.items.map((step, index) => {
            const meta = processSteps[index];
            const Icon = icons[meta.icon];
            return (
              <Reveal key={meta.step} delay={index * 0.1}>
                <div className="relative flex flex-col gap-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium tracking-widest text-foreground-subtle">
                      {t.process.stepLabel} {meta.step}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
