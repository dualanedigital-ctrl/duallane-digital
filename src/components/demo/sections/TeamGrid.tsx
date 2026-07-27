import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { unsplash } from "@/lib/demo-content/images";

export type TeamMember = {
  imageId: string;
  name: string;
  role: string;
  bio?: string;
};

export function TeamGrid({
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
  items: TeamMember[];
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-surface">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image
                    src={unsplash(item.imageId, 640, 800)}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-accent">{item.role}</p>
                  {item.bio && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{item.bio}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
