import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { unsplash } from "@/lib/demo-content/images";
import { getInitials } from "@/lib/utils";

export function AboutSplit({
  id,
  eyebrow,
  title,
  paragraphs,
  imageId,
  avatarName,
  stats,
  reverse,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  imageId?: string;
  /** When set, renders an initials placeholder instead of a photo (no real image tied to this name). */
  avatarName?: string;
  stats?: { value: string; label: string }[];
  reverse?: boolean;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container
        className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <Reveal direction={reverse ? "left" : "right"}>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border">
            {avatarName ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-accent-2">
                <span className="text-6xl font-semibold text-white">{getInitials(avatarName)}</span>
              </div>
            ) : (
              imageId && <Image src={unsplash(imageId, 900)} alt="" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            )}
          </div>
        </Reveal>
        <Reveal direction={reverse ? "right" : "left"} delay={0.1}>
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-accent uppercase">
              {eyebrow}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground-muted">
                {p}
              </p>
            ))}
            {stats && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-gradient">{stat.value}</p>
                    <p className="text-xs text-foreground-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
