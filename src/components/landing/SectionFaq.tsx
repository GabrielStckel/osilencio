import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { SectionFaq as Props } from "@/content/landing.types";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionFaq({ fundo, titulo, itens }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SectionShell fundo={fundo}>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <h2 className="font-display text-[clamp(3rem,10vw,6rem)] font-semibold leading-none opacity-90">
              {titulo}
            </h2>
          </Reveal>
        </div>
        <ul className="md:col-span-8">
          {itens.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <Reveal as="li" key={item.pergunta}>
                <div className="border-b border-white/10">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="text-base font-medium leading-snug sm:text-lg">
                        {item.pergunta}
                      </span>
                      <span
                        aria-hidden
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5"
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 pr-12 text-sm leading-relaxed opacity-80 sm:text-base">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
