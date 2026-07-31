"use client";

import {
  Zap,
  Sparkles,
  Smartphone,
  Search,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { whyUsIcons } from "@/lib/site";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const icons: Record<string, LucideIcon> = {
  Zap,
  Sparkles,
  Smartphone,
  Search,
  ShieldCheck,
  HeadphonesIcon: Headphones,
};

export function WhyUs() {
  const { t } = useTranslation();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="pourquoi-nous" className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow={t.whyUs.eyebrow}
          title={t.whyUs.title}
          description={t.whyUs.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((item, index) => {
            const Icon = icons[whyUsIcons[index]];
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-border-strong hover:bg-surface-hover">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />
                  <motion.div
                    className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent"
                    whileHover={reducedMotion ? undefined : { scale: 1.08, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
