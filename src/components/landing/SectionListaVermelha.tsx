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
          <h2 className="font-display font-semibold leading-tight text-[clamp(2rem,4.5vw,3rem)]">
            {titulo}
          </h2>
        </Reveal>

        <ul className="mt-10 space-y-4 md:mt-14">
          {itens.map((item, i) => (
            <Reveal as="li" key={item}>
              <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-5 md:p-6">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Check className="h-4 w-4" aria-hidden />
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
          <p className="mt-10 text-base leading-relaxed opacity-90 sm:text-[17px]">
            {fechamento}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
