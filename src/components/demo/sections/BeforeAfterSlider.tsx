"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { unsplash } from "@/lib/demo-content/images";

function Slider({
  beforeId,
  afterId,
  beforeLabel,
  afterLabel,
  caption,
}: {
  beforeId: string;
  afterId: string;
  beforeLabel: string;
  afterLabel: string;
  caption?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        className="relative aspect-4/3 w-full touch-none overflow-hidden rounded-2xl border border-border select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerLeave={() => {
          dragging.current = false;
        }}
      >
        <Image src={unsplash(afterId, 900)} alt={afterLabel} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src={unsplash(beforeId, 900)}
            alt={beforeLabel}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div
          className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 items-center justify-center bg-white"
          style={{ left: `${position}%` }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-foreground shadow-lg">
            <MoveHorizontal className="h-4 w-4" />
          </span>
        </div>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
          {afterLabel}
        </span>
      </div>
      {caption && <p className="text-center text-sm text-foreground-muted">{caption}</p>}
    </div>
  );
}

export type BeforeAfterItem = { beforeId: string; afterId: string; caption?: string };

export function BeforeAfterSlider({
  id,
  eyebrow,
  title,
  description,
  items,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: BeforeAfterItem[];
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <section id={id} className="relative py-24 sm:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.beforeId + index} delay={index * 0.1}>
              <Slider
                beforeId={item.beforeId}
                afterId={item.afterId}
                caption={item.caption}
                beforeLabel={beforeLabel}
                afterLabel={afterLabel}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
