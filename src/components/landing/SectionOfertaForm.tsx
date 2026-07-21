import type { SectionOfertaForm as Props, Variante } from "@/content/landing.types";
import { LeadForm } from "./LeadForm";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

export function SectionOfertaForm({
  section,
  variante,
}: {
  section: Props;
  variante: Variante;
}) {
  return (
    <SectionShell fundo={section.fundo} id="inscricao">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight">
            {section.titulo}
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-lg border border-red-accent/40 bg-surface-dark/70 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-accent">
              Oferta
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight">
              {section.cardOferta.nome}
            </h3>
            <p className="mt-6 font-display text-5xl font-bold text-red-accent">
              {section.cardOferta.preco}
            </p>
            <p className="mt-4 text-sm opacity-80">{section.cardOferta.inclui}</p>
            <p className="mt-6 text-xs opacity-70">{section.urgencia}</p>
          </article>
        </Reveal>

        <Reveal>
          <div className="rounded-lg border border-white/10 bg-black/30 p-6 sm:p-7">
            <LeadForm variante={variante} cta={section.cta} />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
