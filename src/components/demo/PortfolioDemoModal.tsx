"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { DemoLanguageProvider } from "@/lib/demo-i18n/LanguageContext";
import { DemoScrollerProvider } from "@/components/demo/DemoScrollerContext";
import { EASE_OUT_EXPO as EASE } from "@/lib/motion";

const TRANSITION_MS = 450;

// Matches the demos' own light background so the lazy-load window doesn't
// flash the (dark) main-site background before the light demo content mounts.
const demoLoading = () => <div className="h-full w-full bg-[#f6f7fb]" />;

const demoComponents = {
  construction: dynamic(() => import("@/app/(demos)/portfolio/construction/ConstructionDemo").then((m) => m.ConstructionDemo), { loading: demoLoading }),
  restaurant: dynamic(() => import("@/app/(demos)/portfolio/restaurant/RestaurantDemo").then((m) => m.RestaurantDemo), { loading: demoLoading }),
  autoRepair: dynamic(() => import("@/app/(demos)/portfolio/auto-repair/AutoRepairDemo").then((m) => m.AutoRepairDemo), { loading: demoLoading }),
  barbershop: dynamic(() => import("@/app/(demos)/portfolio/barbershop/BarbershopDemo").then((m) => m.BarbershopDemo), { loading: demoLoading }),
  cafe: dynamic(() => import("@/app/(demos)/portfolio/cafe/CafeDemo").then((m) => m.CafeDemo), { loading: demoLoading }),
  gym: dynamic(() => import("@/app/(demos)/portfolio/gym/GymDemo").then((m) => m.GymDemo), { loading: demoLoading }),
} as const;

export type DemoId = keyof typeof demoComponents;

function ScrolledDemo({ demoId }: { demoId: DemoId }) {
  const [scrollEl, setScrollEl] = useState<HTMLElement | null>(null);
  const DemoComponent = demoComponents[demoId];

  return (
    <div ref={setScrollEl} className="h-full w-full overflow-y-auto overscroll-contain" tabIndex={-1}>
      <DemoLanguageProvider>
        <DemoScrollerProvider value={scrollEl}>
          <DemoComponent />
        </DemoScrollerProvider>
      </DemoLanguageProvider>
    </div>
  );
}

export function PortfolioDemoModal({
  demoId,
  onClose,
  triggerRef,
}: {
  demoId: DemoId | null;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
}) {
  const [renderedId, setRenderedId] = useState<DemoId | null>(null);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Drive the mount lifecycle manually: mount immediately when a demo is picked,
  // flip to "open" a tick later so the enter transition actually animates from
  // the closed state, and only unmount after the exit transition has had time
  // to finish. Kept independent of AnimatePresence, whose exit-completion
  // tracking doesn't reliably resolve through the lazy-loaded demo subtree.
  //
  // These setState calls are intentionally in the effect body (not a render-phase
  // update): they synchronize local state to the demoId prop while also scheduling
  // the RAF/timeout that drive the transition. Rewriting as a render-phase update
  // made the mount state bounce under React's dev-mode double-render checks.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (demoId) {
      setRenderedId(demoId);
      const raf = requestAnimationFrame(() => setOpen(true));
      return () => cancelAnimationFrame(raf);
    }

    setOpen(false);
    const timeout = window.setTimeout(() => setRenderedId(null), TRANSITION_MS);
    return () => window.clearTimeout(timeout);
  }, [demoId]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!renderedId) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const trigger = triggerRef.current;
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      trigger?.focus();
    };
  }, [renderedId, triggerRef]);

  if (!renderedId) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: open ? 1 : 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-0 backdrop-blur-xl sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Demo website viewer"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.92 }}
        transition={{ duration: TRANSITION_MS / 1000, ease: EASE }}
        className="glow-accent relative h-full w-full overflow-hidden border border-white/10 bg-background shadow-2xl sm:h-[94vh] sm:w-[96vw] sm:rounded-3xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close demo"
          className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-background/90"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-full w-full bg-background">
          <ScrolledDemo demoId={renderedId} />
        </div>
      </motion.div>
    </motion.div>
  );
}
