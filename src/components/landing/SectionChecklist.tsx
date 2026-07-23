import { Check } from "lucide-react";
import type { SectionChecklist as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionChecklist({ fundo, titulo, itens, fechamento }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display font-semibold leading-[1.08] text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.75rem,3.4vw,2.6rem)]">
            {titulo}
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {itens.map((item) => (
            <Reveal as="li" key={item}>
              <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-surface-dark/60 p-4">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-accent/20 text-red-accent">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-base leading-relaxed">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 text-justify text-base leading-relaxed opacity-85 sm:text-[17px] md:text-left">
            {fechamento}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
