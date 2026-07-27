import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-accent uppercase">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-base text-foreground-muted text-balance sm:text-lg",
              align === "center" ? "max-w-xl" : "max-w-lg"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
