"use client";

import { createContext, useContext } from "react";

/**
 * Lets DemoHero's GSAP ScrollTrigger target a custom scroll container instead
 * of the window — needed when a demo is rendered inside the portfolio modal,
 * where the modal panel (not the page) is what actually scrolls. Defaults to
 * null, meaning "use window", which preserves the standalone demo pages'
 * existing behavior unchanged.
 */
const DemoScrollerContext = createContext<HTMLElement | null>(null);

export const DemoScrollerProvider = DemoScrollerContext.Provider;

export function useDemoScroller() {
  return useContext(DemoScrollerContext);
}
