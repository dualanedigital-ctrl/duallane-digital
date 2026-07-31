"use client";

import { useRef, type ComponentProps } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useIsFinePointer } from "@/lib/use-is-fine-pointer";

const MAX_OFFSET = 8;
const PULL_STRENGTH = 0.3;

export function MagneticButton(props: ComponentProps<typeof Button>) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const reducedMotion = usePrefersReducedMotion();
  const isFinePointer = useIsFinePointer();

  // Touch devices and reduced-motion users get the plain, unwrapped Button —
  // no pointer-follow, no extra DOM node, zero behavior change.
  if (reducedMotion || !isFinePointer) {
    return <Button {...props} />;
  }

  function handlePointerMove(event: React.PointerEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * PULL_STRENGTH)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * PULL_STRENGTH)));
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Button {...props} />
    </motion.span>
  );
}
