import type { SectionDiferencial as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionDiferencial({ fundo, titulo, texto }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight">
            {titulo}
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-base leading-relaxed opacity-85 sm:text-[17px]">{texto}</p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
