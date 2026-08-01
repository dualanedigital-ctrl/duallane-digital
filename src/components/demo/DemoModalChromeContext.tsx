"use client";

import { createContext, useContext } from "react";

// Lets shared demo components (DemoNavbar, DemoHero) know whether they're
// rendered standalone (a real /portfolio/* page) or inside
// PortfolioDemoModal, where the modal's own floating language switcher and
// close button need dedicated space at the top on mobile. Standalone pages
// are unaffected — the context defaults to false.
const DemoModalChromeContext = createContext(false);

export function DemoModalChromeProvider({ children }: { children: React.ReactNode }) {
  return <DemoModalChromeContext.Provider value={true}>{children}</DemoModalChromeContext.Provider>;
}

export function useIsInsideDemoModal() {
  return useContext(DemoModalChromeContext);
}
