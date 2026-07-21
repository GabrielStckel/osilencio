import { Calendar } from "lucide-react";
import type { Topbar as TopbarProps } from "@/content/landing.types";

export function Topbar({ marca, badgeCalendario }: TopbarProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-5 pt-5 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <span className="font-display text-lg tracking-wide text-section-dark-fg sm:text-xl">
          {marca}
        </span>
        <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-black/30 px-3 py-1.5 text-[11px] font-medium text-section-dark-fg sm:text-xs">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          <span>{badgeCalendario}</span>
        </span>
      </div>
    </header>
  );
}
