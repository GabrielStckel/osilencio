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
    <section className="relative overflow-hidden bg-section-dark-bg pb-16 pt-24 text-section-dark-fg sm:pt-28 md:min-h-[88vh] md:pb-0 md:pt-[6.5rem]">
      {/* Base gradiente sutil para dar profundidade sem apagar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,10,10,0.85) 45%, rgba(45,15,15,0.7) 100%)",
        }}
      />
      {/* Glow radial vermelho intenso atrás do apresentador */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[90%] md:w-[58%]"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 48%, var(--red-accent) 0%, transparent 55%), radial-gradient(45% 45% at 50% 42%, var(--red-deep) 0%, transparent 60%), radial-gradient(25% 22% at 48% 38%, rgba(255,60,50,0.35) 0%, transparent 70%)",
          opacity: 0.85,
        }}
      />
      {/* Vinheta suave nas bordas para manter foco no centro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 85% at 25% 35%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-end gap-10 px-5 sm:px-8 md:grid-cols-12 md:items-start md:gap-6">
        {/* Coluna texto */}
        <div className="md:col-span-6 md:pr-4">
          <span className="inline-block rounded-pill border border-red-accent/40 bg-red-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-red-accent">
            {props.badge}
          </span>
          <h1 className="mt-5 font-display font-semibold leading-[1.05] text-section-dark-fg text-[clamp(2rem,5.2vw,3.6rem)] md:mt-3 md:text-[clamp(1.75rem,3.4vw,2.6rem)] md:leading-[1.08]">
            {props.h1}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-section-dark-fg/85 sm:text-[17px] md:mt-3 md:text-[15px] md:leading-[1.55]">
            {props.subtitulo}
          </p>
          <p className="mt-4 text-base leading-relaxed text-section-dark-fg/70 sm:text-[17px] md:mt-2 md:text-[15px] md:leading-[1.55]">
            {props.apoio}
          </p>

          <a
            href={CHECKOUT_URL}
            className="mt-7 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-colors hover:bg-red-primary-hover md:mt-5 md:min-h-[56px] md:text-[15px]"
          >
            <Ticket className="h-4 w-4" aria-hidden />
            {props.cta}
          </a>

          <ul className="mt-8 flex flex-wrap gap-2 md:mt-4">
            {props.pilulas.map((p) => (
              <li key={p.label}>
                <Pilula {...p} />
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna imagem */}
        <div className="relative md:col-span-6 md:self-end">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-[420px] md:max-w-none md:ml-auto md:aspect-auto md:h-[110vh]">
            {/* Sombra da foto projetada no fundo do hero */}
            <img
              src={props.imagem.src}
              width={props.imagem.width}
              height={props.imagem.height}
              alt=""
              aria-hidden
              loading="eager"
              className="absolute inset-0 h-full w-full object-contain object-right-bottom md:object-[right_bottom]"
              style={{
                filter: "blur(50px) brightness(0.25) saturate(0)",
                opacity: 0.35,
                transform: "translateY(28px) scale(1.12)",
                WebkitMaskImage:
                  "radial-gradient(75% 100% at 50% 0%, black 35%, transparent 80%)",
                maskImage:
                  "radial-gradient(75% 100% at 50% 0%, black 35%, transparent 80%)",
                zIndex: 0,
              }}
            />
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
                  "radial-gradient(75% 100% at 50% 0%, black 35%, transparent 80%)",
                maskImage:
                  "radial-gradient(75% 100% at 50% 0%, black 35%, transparent 80%)",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
