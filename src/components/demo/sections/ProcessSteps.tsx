import { type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export type ProcessStep = { icon: LucideIcon; title: string; description: string };

export function ProcessSteps({
  id,
  eyebrow,
  title,
  description,
  stepLabel = "STEP",
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  stepLabel?: string;
  items: ProcessStep[];
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block"
          />
          {items.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <div className="relative flex flex-col gap-4">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background text-accent">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium tracking-widest text-foreground-subtle">
                    {stepLabel} {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
