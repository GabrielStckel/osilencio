import { Check } from "lucide-react";
import type { SectionOfertaForm as Props, Variante } from "@/content/landing.types";
import { CHECKOUT_URL } from "@/lib/config";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";

function Preco({ valor }: { valor: string }) {
  // Espera formato "R$ 47,00"
  const match = valor.match(/^(R\$)\s*(\d+)([.,]\d{2})?$/);
  if (!match) {
    return <span className="font-sans text-5xl font-bold text-red-accent">{valor}</span>;
  }
  const [, moeda, inteiro, centavos] = match;
  return (
    <span className="inline-flex items-start font-sans text-red-accent">
      <span className="mt-2 text-2xl font-semibold">{moeda}</span>
      <span className="ml-1 text-6xl font-bold leading-none md:text-7xl">{inteiro}</span>
      {centavos && <span className="mt-2 text-2xl font-semibold">{centavos}</span>}
    </span>
  );
}

export function SectionOfertaForm({
  section,
}: {
  section: Props;
  variante: Variante;
}) {
  const inclui = [section.cardOferta.inclui].filter(Boolean);
  return (
    <SectionShell fundo={section.fundo} id="inscricao">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl whitespace-pre-line font-display font-semibold leading-[1.18] text-[clamp(1.5rem,3.5vw,2rem)]">
            {section.titulo}
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-xl md:mt-16">
        <Reveal>
          <article className="relative rounded-xl border-2 border-red-accent/60 bg-surface-dark/70 p-7 shadow-2xl shadow-red-deep/40 sm:p-8">
            <span className="absolute -top-3 left-6 inline-flex items-center rounded-pill bg-red-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-on-red shadow-md shadow-red-deep/50">
              Oferta
            </span>
            <h3 className="mt-2 font-sans text-2xl font-semibold leading-tight">
              {section.cardOferta.nome}
            </h3>

            <div className="mt-6">
              <Preco valor={section.cardOferta.preco} />
              <p className="mt-1 text-xs uppercase tracking-widest opacity-60">
                Pagamento único
              </p>
            </div>

            {inclui.length > 0 && (
              <ul className="mt-6 space-y-2.5">
                {inclui.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-accent/20 text-red-accent">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <a
              href={CHECKOUT_URL}
              className="mt-7 inline-flex min-h-[52px] w-full items-center justify-center rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red transition-colors hover:bg-red-primary-hover"
            >
              {section.cta}
            </a>

            <p className="mt-5 border-t border-white/10 pt-4 text-xs opacity-70">
              {section.urgencia}
            </p>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}

