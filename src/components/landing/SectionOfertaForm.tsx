import { Check } from "lucide-react";
import type { SectionOfertaForm as Props, Variante } from "@/content/landing.types";
import { CHECKOUT_URL } from "@/lib/config";
import { Reveal } from "./Reveal";
import { ReservationProgress } from "@/components/ReservationProgress";
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
            {/* Palco da palestra */}
            <div className="relative grid h-[calc(100%-28px)] w-full grid-cols-[70%_30%]">
              {/* Slide da palestra */}
              <div className="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-black p-3">
                <div className="font-sans text-[8px] font-semibold uppercase tracking-[0.18em] text-red-accent">
                  Aula 01 · O Silêncio
                </div>
                <div className="mt-1.5 font-display text-[13px] font-semibold leading-tight text-white">
                  Por que sua mente<br />não desliga
                </div>
                <ul className="mt-2 space-y-1 font-sans text-[8.5px] leading-snug text-white/80">
                  <li className="flex gap-1"><span className="text-red-accent">›</span> A causa oculta da mente acelerada</li>
                  <li className="flex gap-1"><span className="text-red-accent">›</span> Por que meditar não funcionou</li>
                  <li className="flex gap-1"><span className="text-red-accent">›</span> O método das 2 noites</li>
                </ul>
                <div className="absolute bottom-2 left-3 font-sans text-[7px] uppercase tracking-widest text-white/40">
                  01 / 12
                </div>
                <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-red-accent/20 blur-2xl" />
              </div>

              {/* Área escura para o celular sobrepor */}
              <div className="relative overflow-hidden border-l border-white/10 bg-gradient-to-br from-black via-neutral-950 to-black">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_45%,rgba(0,0,0,0.75)_100%)]" />
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
      <div className="absolute top-[15%] right-0 z-10 w-[38%] min-w-[130px] sm:right-[-6%] sm:w-[48%]">
        <div className="relative aspect-[9/19] w-full rounded-[22px] border border-white/20 bg-neutral-900 p-[3px] shadow-2xl shadow-black/70">
          <div className="relative h-full w-full overflow-hidden rounded-[19px] bg-black">
            {/* Notch */}
            <div className="absolute left-1/2 top-1.5 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-black/90" />
            {/* Palestrante em tela cheia */}
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
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.85)_100%)]" />
            {/* Slide flutuante */}
            <div className="absolute bottom-8 left-1.5 right-1.5 rounded-md border border-white/10 bg-black/75 p-1.5 backdrop-blur-sm">
              <div className="font-sans text-[6px] font-semibold uppercase tracking-widest text-red-accent">
                Aula 01
              </div>
              <div className="mt-0.5 font-display text-[8px] font-semibold leading-tight text-white">
                Por que sua mente não desliga
              </div>
            </div>
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
  checkoutUrl,
}: {
  section: Props;
  variante: Variante;
  checkoutUrl?: string;
}) {
  const inclui = [section.cardOferta.inclui].filter(Boolean);
  const href = checkoutUrl ?? CHECKOUT_URL;
  return (
    <SectionShell fundo={section.fundo} id="oferta">

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-block rounded-pill border border-red-accent/40 bg-red-accent/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-red-accent">
            Imersão · 2 noites ao vivo
          </span>
          <h2 className="mx-auto mt-4 max-w-[18ch] whitespace-pre-line font-display font-semibold leading-[1.08] text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.75rem,3.4vw,2.6rem)]">
            {section.titulo}
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl items-center gap-14 md:mt-16 md:grid-cols-2 md:gap-10 lg:gap-16">
        <Reveal>
          <div className="pb-8 md:pb-10">
            <DeviceMockups />
          </div>
        </Reveal>

        <Reveal>
          <article className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-red-accent/40 bg-surface-dark/80 p-6 shadow-[0_0_60px_-12px_rgba(200,40,40,0.45)] backdrop-blur-xl sm:p-7 md:p-8">
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full blur-3xl"
              style={{ background: "rgba(200,40,40,0.18)" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full blur-3xl"
              style={{ background: "rgba(200,40,40,0.12)" }}
              aria-hidden
            />

            <div className="absolute top-0 right-0">
              <div className="rounded-bl-xl bg-red-accent px-4 py-1.5 font-sans text-[10px] font-black uppercase tracking-widest text-on-red">
                Oferta
              </div>
            </div>

            <div className="relative text-center">
              <h3 className="whitespace-pre-line px-2 font-sans font-semibold leading-tight text-balance text-[clamp(1.25rem,5.5vw,1.75rem)]">
                {section.cardOferta.nome}
              </h3>

              <div className="mt-6 flex items-baseline justify-center flex-nowrap">
                <Preco valor={section.cardOferta.preco} />
              </div>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest opacity-60">
                Pagamento único
              </p>

              {inclui.length > 0 && (
                <ul className="mt-6 inline-flex flex-col items-start gap-2.5 text-left text-sm">
                  {inclui.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-accent/20 text-red-accent">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subtitulo && (
                <p className="mt-6 whitespace-pre-line font-display text-lg font-semibold leading-snug text-white/90 md:text-xl">
                  {section.subtitulo}
                </p>
              )}

              <a
                href={href}

                className="mt-7 inline-flex min-h-[56px] w-full items-center justify-center rounded-cta bg-red-primary px-4 py-4 text-center font-sans text-[13px] font-bold uppercase tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-all hover:bg-red-primary-hover active:scale-[0.99] md:text-sm md:px-6"
              >
                {section.cta}
              </a>

              <div className="mt-5 mb-5">
                <ReservationProgress variant="compact" />
              </div>

              <div className="flex items-center justify-center gap-2 border-t border-white/10 pt-4">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-accent" aria-hidden />
                <p className="font-sans text-xs opacity-70">
                  {section.urgencia}
                </p>
              </div>

            </div>
          </article>
        </Reveal>
      </div>
    </SectionShell>
  );
}

