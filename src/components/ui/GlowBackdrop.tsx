import { cn } from "@/lib/utils";

export function GlowBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute left-1/2 top-0 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent-2/15 blur-[120px]" />
    </div>
  );
}
