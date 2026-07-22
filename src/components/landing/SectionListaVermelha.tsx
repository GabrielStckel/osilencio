import type { SectionListaVermelha as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionListaVermelha({ fundo, titulo, itens, fechamento }: Props) {
  return (
    <SectionShell fundo={fundo} className="overflow-hidden">
      {/* Profundidade sutil no canto superior direito */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(0,0,0,0.28), transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-5 md:gap-14">
        {/* Coluna esquerda: cabeçalho editorial */}
        <div className="md:col-span-2">
          <Reveal>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">
              O que você vai entender
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.25rem)] font-semibold leading-[1.05] md:text-[clamp(1.9rem,3.4vw,2.6rem)]">
              {titulo}
            </h2>
            <p className="mt-6 hidden text-[15px] leading-relaxed opacity-85 md:block">
              {fechamento}
            </p>
          </Reveal>
        </div>

        {/* Coluna direita: lista editorial */}
        <div className="md:col-span-3">
          <Reveal>
            <ul className="border-t border-white/15">
              {itens.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-5 border-b border-white/15 py-4 md:gap-6 md:py-5"
                >
                  <span
                    aria-hidden
                    className="w-8 shrink-0 pt-0.5 font-sans text-2xl font-semibold leading-none text-white/45 md:text-3xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] leading-snug md:text-[17px]">
                    {item.split(" — ").map((part, idx, arr) => (
                      <span key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <span className="text-white/60"> — </span>
                        )}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="mt-8 text-[15px] leading-relaxed opacity-90 md:hidden">
            {fechamento}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
