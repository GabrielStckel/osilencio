import { Check } from "lucide-react";
import type { SectionListaVermelha as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

function ItemTexto({ texto }: { texto: string }) {
  const sep = " — ";
  const idx = texto.indexOf(sep);
  if (idx === -1) {
    return <span className="text-base leading-relaxed sm:text-[17px]">{texto}</span>;
  }
  const head = texto.slice(0, idx);
  const tail = texto.slice(idx + sep.length);
  return (
    <span className="block text-base leading-relaxed sm:text-[17px]">
      <span className="font-display text-lg font-semibold sm:text-xl">{head}</span>
      <span className="mt-1 block opacity-90">{tail}</span>
    </span>
  );
}

export function SectionListaVermelha({ fundo, titulo, itens, fechamento }: Props) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden">
      {/* Textura sutil de fundo — CSS puro, custo zero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2 className="whitespace-pre-line text-balance font-display text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-tight md:text-[clamp(1.5rem,2.6vw,2rem)]">
            {titulo}
          </h2>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10">
          {itens.map((item, i) => (
            <Reveal as="li" key={item}>
              <div className="flex h-full items-start gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-4 md:p-5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div className="flex-1">
                  <span
                    aria-hidden
                    className="mb-1 block text-[11px] font-semibold uppercase tracking-widest opacity-60"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ItemTexto texto={item} />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-8 text-base leading-relaxed opacity-90 sm:text-[17px] md:mt-10">
            {fechamento}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
