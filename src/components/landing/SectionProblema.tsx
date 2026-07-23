import type { SectionProblema as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionProblema({ fundo, titulo, texto }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display font-semibold leading-[1.08] text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.75rem,3.4vw,2.6rem)]">
            {titulo}
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-justify text-base leading-relaxed opacity-85 sm:text-[17px] md:text-center">{texto}</p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
