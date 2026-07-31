"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EASE_OUT_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/LanguageContext";

function FaqItem({
  question,
  answer,
  badge,
  ctaLabel,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  badge?: string;
  ctaLabel?: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const baseId = useId();
  const buttonId = `${baseId}-button`;
  const panelId = `${baseId}-panel`;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-surface",
        badge ? "border-accent/30" : "border-border"
      )}
    >
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex flex-col items-start gap-2">
          {badge && (
            <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
              {badge}
            </span>
          )}
          <span className="text-base font-medium text-foreground">{question}</span>
        </span>
        <Plus
          aria-hidden="true"
          className={cn(
            "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 pb-6">
              <p className="text-sm leading-relaxed text-foreground-muted">{answer}</p>
              {ctaLabel && (
                <Button href="#contact" size="md" className="w-fit">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          description={t.faq.description}
        />

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
          {t.faq.items.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                badge={faq.badge}
                ctaLabel={faq.ctaLabel}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
