"use client";

import { Container } from "@/components/ui/Container";
import { useTranslation } from "@/lib/i18n/LanguageContext";

export function LegalContent() {
  const { t } = useTranslation();

  return (
    <section className="py-32">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.legal.title}</h1>
        <div className="mt-12 flex flex-col gap-10">
          {t.legal.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
