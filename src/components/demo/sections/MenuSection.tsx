import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { unsplash } from "@/lib/demo-content/images";

export type MenuItem = { name: string; description?: string; price: string; imageId?: string };
export type MenuCategory = { name: string; items: MenuItem[] };

export function MenuSection({
  id,
  eyebrow,
  title,
  description,
  categories,
  variant = "list",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  categories: MenuCategory[];
  variant?: "list" | "cards";
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        {variant === "list" ? (
          <div className="mx-auto grid w-full max-w-4xl gap-12 sm:grid-cols-2">
            {categories.map((category, catIndex) => (
              <Reveal key={category.name} delay={catIndex * 0.1}>
                <div>
                  <h3 className="mb-5 text-lg font-semibold text-accent">{category.name}</h3>
                  <div className="flex flex-col gap-5">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.name}</p>
                          {item.description && (
                            <p className="mt-0.5 text-xs text-foreground-muted">{item.description}</p>
                          )}
                        </div>
                        <span className="shrink-0 text-sm font-semibold text-foreground">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories
              .flatMap((c) => c.items)
              .map((item, index) => (
                <Reveal key={item.name} delay={(index % 3) * 0.08}>
                  <div className="group overflow-hidden rounded-2xl border border-border bg-surface">
                    {item.imageId && (
                      <div className="relative aspect-4/3 w-full overflow-hidden">
                        <Image
                          src={unsplash(item.imageId, 700)}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-3 p-5">
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.name}</p>
                        {item.description && (
                          <p className="mt-0.5 text-xs text-foreground-muted">{item.description}</p>
                        )}
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-accent">{item.price}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        )}
      </Container>
    </section>
  );
}
