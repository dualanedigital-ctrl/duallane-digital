import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export type ScheduleClass = { name: string; time: string; trainer: string };
export type ScheduleDay = { day: string; classes: ScheduleClass[] };

export function ScheduleTable({
  id,
  eyebrow,
  title,
  description,
  days,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  days: ScheduleDay[];
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {days.map((day, index) => (
            <Reveal key={day.day} delay={index * 0.06}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{day.day}</h3>
                <div className="flex flex-col gap-3">
                  {day.classes.map((cls) => (
                    <div key={cls.name + cls.time} className="rounded-xl bg-background-elevated p-3">
                      <p className="text-sm font-medium text-foreground">{cls.name}</p>
                      <p className="mt-0.5 text-xs text-foreground-muted">{cls.time}</p>
                      <p className="text-xs text-foreground-subtle">{cls.trainer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
