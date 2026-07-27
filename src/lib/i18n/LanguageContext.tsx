"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { translations, type Locale } from "@/lib/i18n/translations";

const STORAGE_KEY = "duallane-locale";
const listeners = new Set<() => void>();
let cachedLocale: Locale | null = null;

function readStoredLocale(): Locale {
  if (cachedLocale) return cachedLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  cachedLocale = stored === "en" ? "en" : "fr";
  return cachedLocale;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot(): Locale {
  return readStoredLocale();
}

function getServerSnapshot(): Locale {
  return "fr";
}

function writeLocale(locale: Locale) {
  cachedLocale = locale;
  window.localStorage.setItem(STORAGE_KEY, locale);
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)["fr"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: writeLocale, t: translations[locale] }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
