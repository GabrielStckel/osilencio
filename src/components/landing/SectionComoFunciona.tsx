import { Calendar, Monitor, Users } from "lucide-react";
import type { SectionComoFunciona as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

const ICONS = { calendar: Calendar, monitor: Monitor, users: Users } as const;

export function SectionComoFunciona({ fundo, titulo, cards, texto }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display font-semibold leading-tight text-[clamp(2rem,4.5vw,2.75rem)]">
            {titulo}
          </h2>
        </Reveal>
      </div>
      <ul className="mt-12 grid gap-6 sm:grid-cols-3 md:mt-16">
        {cards.map((c, i) => {
          const Icon = ICONS[c.icon];
          const n = String(i + 1).padStart(2, "0");
          return (
            <Reveal as="li" key={c.label}>
              <article className="group relative flex h-full flex-col items-start gap-5 rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <span aria-hidden className="block h-1 w-8 rounded-full bg-red-accent" />
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-accent/10 text-red-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <span
                    aria-hidden
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-red-accent"
                  >
                    {n}
                  </span>
                  <p className="font-display text-lg leading-snug">{c.label}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
      <Reveal>
        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed opacity-80 sm:text-[17px]">
          {texto}
        </p>
      </Reveal>
    </SectionShell>
  );
}
