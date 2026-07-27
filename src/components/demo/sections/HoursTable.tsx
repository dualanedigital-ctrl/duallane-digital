"use client";

import { Clock } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { demoUiStrings } from "@/lib/demo-i18n/uiStrings";

export type HourRow = { day: string; hours: string };

export function HoursTable({ rows, note }: { rows: HourRow[]; note?: string }) {
  const { locale } = useDemoLanguage();
  const ui = demoUiStrings[locale];

  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-surface p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
            <Clock className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold text-foreground">{ui.openingHours}</h3>
        </div>
        <dl className="flex flex-col divide-y divide-border">
          {rows.map((row) => (
            <div key={row.day} className="flex items-center justify-between py-2.5 text-sm">
              <dt className="text-foreground-muted">{row.day}</dt>
              <dd className="font-medium text-foreground">{row.hours}</dd>
            </div>
          ))}
        </dl>
        {note && <p className="mt-4 text-xs text-foreground-subtle">{note}</p>}
      </div>
    </Reveal>
  );
}
