"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BadgeCheck, ChevronDown, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowBackdrop } from "@/components/ui/GlowBackdrop";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.to(contentRef.current, {
        y: -60,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to("[data-scroll-cue]", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.1,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      <div className="bg-grid absolute inset-0 -z-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <GlowBackdrop className="-z-20" />

      <Container ref={contentRef} className="flex flex-col items-center text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/80 px-4 py-1.5 text-sm text-foreground-muted backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          {t.hero.badge}
        </motion.div>

        <motion.h1
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {t.hero.titleBefore}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
          {t.hero.titleAfter}
        </motion.h1>

        <motion.p
          custom={0.16}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg text-foreground-muted text-balance sm:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            href="#contact"
            size="lg"
            className="hover:translate-y-0 hover:shadow-none active:translate-y-0"
          >
            {t.hero.cta}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="lg">
            {t.hero.callCta}
            <Phone className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          custom={0.32}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex items-center gap-2 text-sm text-foreground-muted"
        >
          <BadgeCheck className="h-4 w-4 text-accent-2" />
          {t.hero.trustLine}
        </motion.div>

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          data-scroll-cue
          className="mt-12 flex flex-col items-center gap-2 text-foreground-subtle"
        >
          <span className="text-xs tracking-wide uppercase">{t.hero.scrollCue}</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Container>
    </section>
  );
}
