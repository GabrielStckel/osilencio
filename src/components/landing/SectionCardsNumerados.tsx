import type { SectionCardsNumerados as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionCardsNumerados({ fundo, titulo, cards, fechamento }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight">
            {titulo}
          </h2>
        </Reveal>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {cards.map((texto, i) => {
          const n = String(i + 1).padStart(2, "0");
          return (
            <Reveal as="li" key={n}>
              <article className="relative overflow-hidden rounded-lg border border-white/10 bg-surface-dark/70 p-6 sm:p-7">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-6 select-none font-display text-[140px] leading-none text-red-accent/15 sm:text-[180px]"
                >
                  {n}
                </span>
                <span
                  aria-hidden
                  className="absolute left-3 top-3 text-xs text-red-accent/60"
                >
                  +
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-3 right-3 text-xs text-red-accent/60"
                >
                  +
                </span>
                <p className="relative text-base leading-relaxed sm:text-[17px]">{texto}</p>
              </article>
            </Reveal>
          );
        })}
      </ul>

      <Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed opacity-80 sm:text-[17px]">
          {fechamento}
        </p>
      </Reveal>
    </SectionShell>
  );
}
