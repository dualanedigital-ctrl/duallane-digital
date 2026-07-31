"use client";

import { Phone } from "lucide-react";

export function FloatingCallButton({ phone, label }: { phone: string; label: string }) {
  return (
    <a
      href={`tel:${phone.replace(/[^+\d]/g, "")}`}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-accent-2 py-3.5 pl-4 pr-5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_16px_40px_-12px_rgba(37,99,235,0.5)] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
    >
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <Phone className="relative h-4 w-4" />
      </span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
