import { Check } from "lucide-react";
import type { SectionListaVermelha as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionListaVermelha({ fundo, titulo, itens, fechamento }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight">
            {titulo}
          </h2>
        </Reveal>
        <ul className="mt-8 space-y-4">
          {itens.map((item) => (
            <Reveal as="li" key={item}>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="text-base leading-relaxed sm:text-[17px]">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 text-base leading-relaxed opacity-90 sm:text-[17px]">
            {fechamento}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
