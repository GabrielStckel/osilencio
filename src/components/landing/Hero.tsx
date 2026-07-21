import { Calendar, Monitor, Ticket, Users } from "lucide-react";
import type { Hero as HeroProps, HeroPilula } from "@/content/landing.types";
import { CHECKOUT_URL } from "@/lib/config";

const ICONS = { calendar: Calendar, monitor: Monitor, users: Users } as const;

function Pilula({ icon, label }: HeroPilula) {
  const Icon = ICONS[icon];
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-medium text-section-dark-fg">
      <Icon className="h-3.5 w-3.5 text-red-accent" aria-hidden />
      {label}
    </span>
  );
}

export function Hero(props: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-section-dark-bg pb-16 pt-24 text-section-dark-fg sm:pt-28 md:min-h-[88vh] md:pb-0 md:pt-20">
      {/* Glow radial vermelho atrás do apresentador */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[80%] md:w-[50%]"
        style={{
          background:
            "radial-gradient(55% 55% at 60% 50%, var(--red-deep) 0%, transparent 65%), radial-gradient(30% 28% at 55% 45%, var(--red-accent) 0%, transparent 70%)",
          opacity: 0.55,
        }}
      />
      {/* Vinheta escura nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 30%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-end gap-10 px-5 sm:px-8 md:grid-cols-12 md:items-center md:gap-6">
        {/* Coluna texto */}
        <div className="md:col-span-6 md:pr-4">
          <span className="inline-block rounded-pill border border-red-accent/40 bg-red-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-red-accent">
            {props.badge}
          </span>
          <h1 className="mt-5 font-display font-semibold leading-[1.05] text-section-dark-fg text-[clamp(2rem,5.2vw,3.6rem)] md:mt-4 md:text-[clamp(1.75rem,3.4vw,2.6rem)] md:leading-[1.08]">
            {props.h1}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-section-dark-fg/85 sm:text-[17px] md:mt-4 md:text-[15px] md:leading-[1.55]">
            {props.subtitulo}
          </p>
          <p className="mt-4 text-base leading-relaxed text-section-dark-fg/70 sm:text-[17px] md:mt-3 md:text-[15px] md:leading-[1.55]">
            {props.apoio}
          </p>

          <a
            href={CHECKOUT_URL}
            className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-colors hover:bg-red-primary-hover md:mt-6 md:min-h-[56px] md:text-[15px]"
          >
            <Ticket className="h-4 w-4" aria-hidden />
            {props.cta}
          </a>

          <ul className="mt-8 flex flex-wrap gap-2 md:mt-5">
            {props.pilulas.map((p) => (
              <li key={p.label}>
                <Pilula {...p} />
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna imagem */}
        <div className="relative md:col-span-6 md:self-end">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[420px] md:max-w-none md:ml-auto md:aspect-auto md:h-[78vh]">
            <img
              src={props.imagem.src}
              width={props.imagem.width}
              height={props.imagem.height}
              alt={props.imagem.alt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain object-right-bottom md:object-[right_bottom]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 45%, transparent 92%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 45%, transparent 92%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
