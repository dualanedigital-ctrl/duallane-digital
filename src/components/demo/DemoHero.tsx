"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useDemoScroller } from "@/components/demo/DemoScrollerContext";
import { EASE_OUT_EXPO as EASE } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export function DemoHero({
  eyebrow,
  title,
  subtitle,
  imageUrl,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const scroller = useDemoScroller();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.to(imageRef.current, {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scroller ?? undefined,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion, scroller] }
  );

  return (
    <section id="top" ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div ref={imageRef} className="absolute inset-0 -z-20 scale-110">
        <Image src={imageUrl} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background/55" />
      <div className="absolute inset-0 -z-10 bg-background/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />

      <Container className="flex flex-col items-start text-left">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/80 px-4 py-1.5 text-sm text-foreground-muted backdrop-blur"
        >
          {eyebrow}
        </motion.span>

        <motion.h1
          custom={0.08}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        <motion.p
          custom={0.16}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-foreground-muted text-balance sm:text-xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Button href={primaryCta.href} size="lg" className="hover:translate-y-0 hover:shadow-none active:translate-y-0">
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
