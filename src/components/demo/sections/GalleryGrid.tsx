import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { unsplash } from "@/lib/demo-content/images";

export type GalleryItem = {
  imageId: string;
  caption?: string;
  category?: string;
};

export function GalleryGrid({
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
  items: GalleryItem[];
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.imageId + index} delay={(index % 3) * 0.08}>
              <ImageReveal className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src={unsplash(item.imageId, 800)}
                  alt={item.caption ?? ""}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {(item.caption || item.category) && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-10">
                    {item.category && (
                      <span className="text-xs font-medium uppercase tracking-wide text-white/70">
                        {item.category}
                      </span>
                    )}
                    {item.caption && <p className="mt-1 text-sm font-medium text-white">{item.caption}</p>}
                  </div>
                )}
              </ImageReveal>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
