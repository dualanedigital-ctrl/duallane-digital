"use client";

import { useMediaQuery } from "@/lib/use-media-query";

export function useIsFinePointer() {
  return useMediaQuery("(pointer: fine)", false);
}
