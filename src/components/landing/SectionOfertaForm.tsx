import { Check } from "lucide-react";
import type { SectionOfertaForm as Props, Variante } from "@/content/landing.types";
import { CHECKOUT_URL } from "@/lib/config";
import { Reveal } from "./Reveal";
import { SectionShell } from "./SectionShell";
import apresentador540Avif from "@/assets/apresentador-540.avif.asset.json";
import apresentador1080Avif from "@/assets/apresentador-1080.avif.asset.json";
import apresentador540Webp from "@/assets/apresentador-540.webp.asset.json";
import apresentador1080Webp from "@/assets/apresentador-1080.webp.asset.json";

function DeviceMockups() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] select-none" aria-hidden>
      {/* Glow de fundo */}
      <div
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 55%, rgba(200,40,40,0.35), transparent 70%)",
        }}
      />

      {/* Notebook */}
      <div className="relative">
        {/* Tela */}
        <div className="relative mx-auto aspect-[16/10] w-full rounded-t-2xl border border-white/15 bg-neutral-900 p-2 shadow-2xl shadow-black/60">
          <div className="relative h-full w-full overflow-hidden rounded-md bg-black">
            {/* Barra do "Zoom" */}
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-neutral-950/90 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-500/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
              <span className="ml-3 font-sans text-[10px] uppercase tracking-widest text-white/50">
                Ao vivo · Imersão
              </span>
              <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-red-accent/90 px-1.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-on-red">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Live
              </span>
            </div>
            {/* Vídeo (apresentador) */}
            <div className="relative h-[calc(100%-28px)] w-full">
              <picture>
                <source
                  type="image/avif"
                  srcSet={`${apresentador540Avif.url} 540w, ${apresentador1080Avif.url} 1080w`}
                  sizes="520px"
                />
                <source
                  type="image/webp"
                  srcSet={`${apresentador540Webp.url} 540w, ${apresentador1080Webp.url} 1080w`}
                  sizes="520px"
                />
                <img
                  src={apresentador540Webp.url}
                  alt=""
                  width={1080}
                  height={1920}
                  loading="lazy"
                  decoding="async"
                  className="absolute left-1/2 top-0 h-full w-auto max-w-none -translate-x-1/2 object-cover"
                />
              </picture>
              {/* Vinheta */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_45%,rgba(0,0,0,0.7)_100%)]" />
              {/* Legenda participante */}
              <div className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 font-sans text-[10px] font-medium tracking-wide text-white/90">
                Vinicius · O Silêncio
              </div>
            </div>
          </div>
        </div>
        {/* Base do notebook */}
        <div className="relative mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-lg shadow-black/60">
          <div className="absolute left-1/2 top-0 h-1 w-24 -translate-x-1/2 rounded-b-full bg-neutral-950" />
        </div>
      </div>

      {/* Celular sobreposto */}
      <div className="absolute -bottom-6 -right-2 w-[28%] min-w-[110px] sm:-right-4 sm:w-[30%]">
        <div className="relative aspect-[9/19] w-full rounded-[22px] border border-white/20 bg-neutral-900 p-[3px] shadow-2xl shadow-black/70">
          <div className="relative h-full w-full overflow-hidden rounded-[19px] bg-black">
            {/* Notch */}
            <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-black/90" />
            <picture>
              <source type="image/avif" srcSet={apresentador540Avif.url} />
              <source type="image/webp" srcSet={apresentador540Webp.url} />
              <img
                src={apresentador540Webp.url}
                alt=""
                width={540}
                height={960}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_40%,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full bg-red-accent px-2 py-0.5 font-sans text-[8px] font-bold uppercase tracking-wider text-on-red">
              Ao vivo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

