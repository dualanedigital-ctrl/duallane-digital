const FADE_MS = 160;

/**
 * Briefly dips body opacity around a locale change so the text swap doesn't
 * feel like an abrupt jump-cut. No reduced-motion check needed here — the
 * global `prefers-reduced-motion` CSS override already collapses transition
 * durations to ~0, so this becomes an instant no-op for those users.
 */
export function triggerLocaleFade() {
  if (typeof document === "undefined") return;
  document.body.classList.add("locale-fade");
  window.setTimeout(() => document.body.classList.remove("locale-fade"), FADE_MS);
}
