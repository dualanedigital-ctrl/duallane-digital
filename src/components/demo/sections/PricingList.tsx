import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export type PricingPlan = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PricingList({
  id,
  eyebrow,
  title,
  description,
  items,
  variant = "cards",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: PricingPlan[];
  variant?: "cards" | "list";
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        {variant === "cards" ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {items.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl border p-8",
                    plan.highlighted
                      ? "border-accent/40 bg-gradient-to-b from-accent/10 via-surface to-surface"
                      : "border-border bg-surface"
                  )}
                >
                  <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold text-gradient">{plan.price}</span>
                    {plan.period && <span className="text-sm text-foreground-muted">{plan.period}</span>}
                  </div>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground-muted">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.ctaLabel && (
                    <Button
                      href={plan.ctaHref ?? "#contact"}
                      variant={plan.highlighted ? "primary" : "secondary"}
                      className="mt-8 w-full"
                    >
                      {plan.ctaLabel}
                    </Button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex w-full max-w-2xl flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
            {items.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.05}>
                <div className="flex items-center justify-between gap-4 px-7 py-5">
                  <div>
                    <p className="text-sm font-medium text-foreground">{plan.name}</p>
                    {plan.features[0] && (
                      <p className="mt-0.5 text-xs text-foreground-muted">{plan.features[0]}</p>
                    )}
                  </div>
                  <span className="shrink-0 text-lg font-semibold text-accent">{plan.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
