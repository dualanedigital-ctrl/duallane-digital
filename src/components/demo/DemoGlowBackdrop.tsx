export function DemoGlowBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-12%] h-[42rem] w-[72rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />
      <div className="absolute right-[-8%] bottom-[6%] h-[26rem] w-[26rem] rounded-full bg-accent-2/12 blur-[140px]" />
    </div>
  );
}
