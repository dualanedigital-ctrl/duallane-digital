"use client";

import { motion, type Variants } from "framer-motion";

const directions = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { y: 0, x: 24 },
  right: { y: 0, x: -24 },
  none: { y: 0, x: 0 },
};

export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: keyof typeof directions;
  delay?: number;
  duration?: number;
  as?: "div" | "li";
}) {
  const offset = directions[direction];

  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
