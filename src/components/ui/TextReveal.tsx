"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

export function TextReveal({
  children,
  as = "h2",
  className,
  stagger = 0.03,
  delay = 0,
}: {
  children: string;
  as?: "h1" | "h2";
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !ref.current) return;

      // `autoSplit` + `onSplit` re-runs the reveal automatically if the text
      // re-flows to different lines (font finishes loading, viewport resizes),
      // instead of measuring line breaks once against a possibly-unloaded font.
      const split = SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            stagger,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 85%" },
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  const Tag = as;

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
