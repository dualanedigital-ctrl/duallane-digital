"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, REVEAL_VIEWPORT } from "@/lib/motion";

export function ImageReveal({
  children,
  className,
  delay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(8% round 0px)", scale: 1.1 }}
      whileInView={{ clipPath: "inset(0% round 0px)", scale: 1 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
      style={{ willChange: "clip-path, transform" }}
    >
      {children}
    </motion.div>
  );
}
