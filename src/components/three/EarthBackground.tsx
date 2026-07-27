"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { useMediaQuery } from "@/lib/use-media-query";
import { cn } from "@/lib/utils";

const EarthScene = dynamic(
  () => import("@/components/three/EarthScene").then((mod) => mod.EarthScene),
  { ssr: false }
);

const TIERS = {
  desktop: { radius: 1.3, offsetX: 0, particleCount: 1800 },
  tablet: { radius: 1.0, offsetX: 0, particleCount: 1200 },
  mobile: { radius: 0.75, offsetX: 0, particleCount: 700 },
};

export function EarthBackground({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const onVisibilityChange = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  const tier = isDesktop ? TIERS.desktop : isTablet ? TIERS.tablet : TIERS.mobile;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
    >
      <EarthScene
        particleCount={tier.particleCount}
        radius={tier.radius}
        offsetX={tier.offsetX}
        active={tabVisible && !reducedMotion}
      />
    </div>
  );
}
