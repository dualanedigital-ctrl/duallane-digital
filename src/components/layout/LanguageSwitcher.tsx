"use client";

import { useTranslation } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useTranslation();

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-border-strong bg-surface p-1 text-xs font-medium",
        className
      )}
      role="group"
      aria-label="Choisir la langue / Choose language"
    >
      <button
        type="button"
        onClick={() => setLocale("fr")}
        aria-pressed={locale === "fr"}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          locale === "fr" ? "bg-accent text-white" : "text-foreground-muted hover:text-foreground"
        )}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          locale === "en" ? "bg-accent text-white" : "text-foreground-muted hover:text-foreground"
        )}
      >
        EN
      </button>
    </div>
  );
}
