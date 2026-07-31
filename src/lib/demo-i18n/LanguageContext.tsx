"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { triggerLocaleFade } from "@/lib/locale-fade";

export type DemoLocale = "fr" | "en";

const STORAGE_KEY = "dualane-demo-locale";
const listeners = new Set<() => void>();
let cachedLocale: DemoLocale | null = null;

function readStoredLocale(): DemoLocale {
  if (cachedLocale) return cachedLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  cachedLocale = stored === "en" ? "en" : "fr";
  return cachedLocale;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): DemoLocale {
  return readStoredLocale();
}

function getServerSnapshot(): DemoLocale {
  return "fr";
}

function writeLocale(locale: DemoLocale) {
  triggerLocaleFade();
  cachedLocale = locale;
  window.localStorage.setItem(STORAGE_KEY, locale);
  listeners.forEach((listener) => listener());
}

type DemoLanguageContextValue = {
  locale: DemoLocale;
  setLocale: (locale: DemoLocale) => void;
};

const DemoLanguageContext = createContext<DemoLanguageContextValue | null>(null);

export function DemoLanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale: writeLocale }), [locale]);

  return <DemoLanguageContext.Provider value={value}>{children}</DemoLanguageContext.Provider>;
}

export function useDemoLanguage() {
  const context = useContext(DemoLanguageContext);
  if (!context) {
    throw new Error("useDemoLanguage must be used within a DemoLanguageProvider");
  }
  return context;
}
