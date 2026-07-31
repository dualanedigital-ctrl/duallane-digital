"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Check, Maximize2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Button } from "@/components/ui/Button";
import { portfolio } from "@/lib/site";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { PortfolioDemoModal, type DemoId } from "@/components/demo/PortfolioDemoModal";

export function Portfolio() {
  const { t } = useTranslation();
  const [activeDemoId, setActiveDemoId] = useState<DemoId | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  function openDemo(event: React.MouseEvent<HTMLElement>, id: string) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    triggerRef.current = event.currentTarget;
    setActiveDemoId(id as DemoId);
  }

  return (
    <section id="realisations" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project, index) => {
            const text = t.portfolio.items[project.id as keyof typeof t.portfolio.items];
            return (
              <Reveal key={project.id} delay={(index % 3) * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-strong">
                  <ImageReveal className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={text.description}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </ImageReveal>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="w-fit text-xs font-medium uppercase tracking-wide text-accent">
                      {text.industry}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{text.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground-muted">{text.description}</p>
                    <ul className="mt-1 flex flex-col gap-1.5">
                      {text.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-foreground-muted">
                          <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      href={project.demoPath}
                      onClick={(event) => openDemo(event, project.id)}
                      variant="secondary"
                      size="md"
                      className="mt-4 w-full"
                    >
                      {t.portfolio.viewDemoCta}
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>

      <PortfolioDemoModal demoId={activeDemoId} onClose={() => setActiveDemoId(null)} triggerRef={triggerRef} />
    </section>
  );
}
