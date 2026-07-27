"use client";

import { useMediaQuery } from "@/lib/use-media-query";

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)", true);
}
