import { CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export type EventItem = { date: string; title: string; description: string };

export function EventsList({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: EventItem[];
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
          {items.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.08}>
              <div className="flex items-start gap-5 rounded-2xl border border-border bg-surface p-6">
                <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">{event.date}</span>
                  <h3 className="mt-1 text-base font-semibold text-foreground">{event.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{event.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
