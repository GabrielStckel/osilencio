import type { SectionCardsNumerados as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionCardsNumerados({ fundo, titulo, cards, fechamento }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="whitespace-pre-line font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight text-balance md:text-[clamp(1.5rem,2.6vw,2rem)]">
            {titulo}
          </h2>
        </Reveal>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {cards.map((texto, i) => {
          const n = String(i + 1).padStart(2, "0");
          return (
            <Reveal as="li" key={n}>
              <article className="relative overflow-hidden rounded-lg border border-white/10 bg-surface-dark/70 p-6 sm:p-7 md:p-7">
                <p className="relative text-base leading-relaxed sm:text-[17px]">{texto}</p>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-3 right-3 select-none font-display font-semibold leading-none text-red-accent/10 text-[80px] md:text-[88px]"
                >
                  {n}
                </span>
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
