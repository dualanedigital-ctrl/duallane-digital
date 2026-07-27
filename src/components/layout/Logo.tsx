import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 text-lg font-semibold tracking-tight text-foreground",
        className
      )}
    >
      <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/logo-mark.png"
          alt=""
          fill
          sizes="32px"
          className="scale-[1.4] object-cover"
          priority
        />
      </span>
      <span>
        DualLane <span className="text-foreground-muted font-normal">Digital</span>
      </span>
    </Link>
  );
}
