import { useEffect, useState } from "react";

const START = new Date("2026-07-23T00:00:00-03:00").getTime();
const END = new Date("2026-08-10T23:59:00-03:00").getTime();
const START_PCT = 32;
const END_PCT = 97;

function getPct() {
  const t = (Date.now() - START) / (END - START);
  const c = Math.min(Math.max(t, 0), 1);
  return Math.round(START_PCT + (END_PCT - START_PCT) * c);
}

export function ReservationProgress() {
  const [pct, setPct] = useState<number>(() => getPct());
  const [barWidth, setBarWidth] = useState<number>(0);

  useEffect(() => {
    const current = getPct();
    setPct(current);
    // Anima 0 -> pct em ~1.2s no primeiro paint
    const raf = requestAnimationFrame(() => setBarWidth(current));

    const id = window.setInterval(() => {
      const next = getPct();
      setPct(next);
      setBarWidth(next);
    }, 60000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(id);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-white/60">
          Vagas reservadas
        </span>
        <span className="text-sm font-bold text-red-400">{pct}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Vagas reservadas"
        className="relative h-2.5 w-full overflow-hidden rounded-full border border-white/5 bg-white/10"
      >
        <div
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 transition-all duration-1000 ease-out"
          style={{
            width: `${barWidth}%`,
            boxShadow: "0 0 12px rgba(239,68,68,0.5)",
          }}
        >
          <div
            aria-hidden
            className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>
      </div>
      <p className="mt-2 text-[11px] text-white/45">
        Restam apenas {100 - pct}% das vagas · Encerra 10 de agosto
      </p>
    </div>
  );
}
