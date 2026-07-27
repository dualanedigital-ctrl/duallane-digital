import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getInitials } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  rating?: number;
};

export function TestimonialsGrid({
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
  items: Testimonial[];
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-7">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: item.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-foreground-muted">“{item.quote}”</p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-semibold text-white">
                    {getInitials(item.name)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.name}</p>
                    {item.role && <p className="text-xs text-foreground-subtle">{item.role}</p>}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
