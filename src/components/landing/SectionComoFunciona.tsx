import { Calendar, Monitor, Users } from "lucide-react";
import type { SectionComoFunciona as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

const ICONS = { calendar: Calendar, monitor: Monitor, users: Users } as const;

export function SectionComoFunciona({ fundo, titulo, cards, texto }: Props) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden">
      {/* Glow vermelho sutil por trás do título */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-60"
        style={{
          width: "60vw",
          height: "45vh",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(220, 38, 38, 0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="text-center">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.25em] text-red-accent">
              2 NOITES AO VIVO
            </span>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] text-balance">
              {titulo}
            </h2>
          </Reveal>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3 md:mt-12">
          {cards.map((c, i) => {
            const Icon = ICONS[c.icon];
            const n = String(i + 1).padStart(2, "0");
            return (
              <Reveal as="li" key={c.label}>
                <article className="group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-xl border border-white/10 bg-surface-dark/70 p-5 transition-all duration-300 hover:border-red-accent/60 hover:bg-surface-dark">
                  {/* Topo vermelho */}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-red-primary via-red-accent to-red-primary"
                  />

                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-2 top-3 font-display text-[4.5rem] font-bold leading-none text-red-accent/10 transition-transform duration-300 group-hover:scale-105 group-hover:text-red-accent/15"
                  >
                    {n}
                  </span>

                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-accent text-white shadow-lg shadow-red-accent/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>

                  <p className="relative font-display text-lg font-semibold leading-snug">
                    {c.label}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed opacity-80 sm:text-[17px] md:mt-12">
            {texto}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
