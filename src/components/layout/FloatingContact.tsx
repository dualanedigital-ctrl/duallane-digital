"use client";

import { FloatingCallButton } from "@/components/demo/FloatingCallButton";
import { useTranslation } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/site";

export function FloatingContact() {
  const { t } = useTranslation();

  return <FloatingCallButton phone={siteConfig.phone} label={t.hero.callCta} />;
}
