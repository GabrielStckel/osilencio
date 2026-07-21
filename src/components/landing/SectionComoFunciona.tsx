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
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight">
            {titulo}
          </h2>
        </Reveal>
      </div>
      <ul className="mt-10 grid gap-5 sm:grid-cols-3">
        {cards.map((c) => {
          const Icon = ICONS[c.icon];
          return (
            <Reveal as="li" key={c.label}>
              <article className="flex h-full flex-col items-start gap-3 rounded-lg border border-black/10 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-accent/10 text-red-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-base leading-relaxed">{c.label}</p>
              </article>
            </Reveal>
          );
        })}
      </ul>
      <Reveal>
        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed opacity-80 sm:text-[17px]">
          {texto}
        </p>
      </Reveal>
    </SectionShell>
  );
}
