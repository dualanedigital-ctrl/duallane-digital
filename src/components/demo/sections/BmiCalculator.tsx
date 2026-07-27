"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { useDemoLanguage } from "@/lib/demo-i18n/LanguageContext";
import { demoUiStrings, type DemoUiStrings } from "@/lib/demo-i18n/uiStrings";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-xl border border-border-strong bg-background-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-subtle transition-colors focus:border-accent focus:outline-none";

function categoryFor(bmi: number, ui: DemoUiStrings) {
  if (bmi < 18.5) return { label: ui.bmiUnderweight, color: "text-blue-400" };
  if (bmi < 25) return { label: ui.bmiHealthy, color: "text-success" };
  if (bmi < 30) return { label: ui.bmiOverweight, color: "text-yellow-400" };
  return { label: ui.bmiObese, color: "text-destructive" };
}

export function BmiCalculator({ id, eyebrow, title, description }: { id?: string; eyebrow: string; title: string; description?: string }) {
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const { locale } = useDemoLanguage();
  const ui = demoUiStrings[locale];

  function handleCalculate() {
    const h = parseFloat(heightCm) / 100;
    const w = parseFloat(weightKg);
    if (!h || !w || h <= 0 || w <= 0) return;
    setBmi(w / (h * h));
  }

  const category = bmi ? categoryFor(bmi, ui) : null;

  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Reveal>
          <div className="mx-auto w-full max-w-lg rounded-2xl border border-border bg-surface p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                <Calculator className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{ui.bmiCalculatorTitle}</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="bmi-height" className="text-sm font-medium text-foreground">
                  {ui.heightCm}
                </label>
                <input
                  id="bmi-height"
                  type="number"
                  min={0}
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  placeholder="175"
                  className={inputClasses}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="bmi-weight" className="text-sm font-medium text-foreground">
                  {ui.weightKg}
                </label>
                <input
                  id="bmi-weight"
                  type="number"
                  min={0}
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  placeholder="70"
                  className={inputClasses}
                />
              </div>
            </div>
            <Button type="button" size="lg" onClick={handleCalculate} className="mt-6 w-full">
              {ui.calculateBmi}
            </Button>

            {bmi !== null && category && (
              <div className="mt-6 flex flex-col items-center gap-1 rounded-xl bg-background-elevated p-6 text-center">
                <span className="text-3xl font-semibold text-gradient">{bmi.toFixed(1)}</span>
                <span className={cn("text-sm font-medium", category.color)}>{category.label}</span>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
