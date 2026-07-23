import { Calendar, Monitor, Ticket, Users } from "lucide-react";
import type { Hero as HeroProps, HeroPilula } from "@/content/landing.types";
import { ReservationProgress } from "@/components/ReservationProgress";
import apresentador540Avif from "@/assets/apresentador-540.avif.asset.json";
import apresentador1080Avif from "@/assets/apresentador-1080.avif.asset.json";
import apresentador540Webp from "@/assets/apresentador-540.webp.asset.json";
import apresentador1080Webp from "@/assets/apresentador-1080.webp.asset.json";

const AVIF_SRCSET = `${apresentador540Avif.url} 540w, ${apresentador1080Avif.url} 1080w`;
const WEBP_SRCSET = `${apresentador540Webp.url} 540w, ${apresentador1080Webp.url} 1080w`;
const IMG_SIZES = "(max-width: 768px) 90vw, 520px";

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
    <section className="relative overflow-hidden bg-section-dark-bg px-5 pb-10 pt-56 text-section-dark-fg min-h-[100svh] md:min-h-[88vh] md:px-0 md:py-0 md:pb-0 md:pt-[6.5rem]">
      {/* Glow radial vermelho atrás do apresentador (mobile) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70svh] md:hidden"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 38%, var(--red-accent) 0%, transparent 62%), radial-gradient(40% 40% at 50% 32%, var(--red-deep) 0%, transparent 68%)",
          opacity: 0.9,
        }}
      />
      {/* Imagem de fundo mobile */}
      <img
        src={apresentador540Webp.url}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-contain object-top md:hidden"
      />
      {/* Overlay mobile para legibilidade */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black md:hidden"
      />

      {/* Base gradiente sutil para dar profundidade sem apagar (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(20,10,10,0.85) 45%, rgba(45,15,15,0.7) 100%)",
        }}
      />
      {/* Glow radial vermelho intenso atrás do apresentador (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block"
        style={{
          background:
            "radial-gradient(60% 60% at 55% 48%, var(--red-accent) 0%, transparent 55%), radial-gradient(45% 45% at 50% 42%, var(--red-deep) 0%, transparent 60%), radial-gradient(25% 22% at 48% 38%, rgba(255,60,50,0.35) 0%, transparent 70%)",
          opacity: 0.85,
        }}
      />
      {/* Vinheta suave nas bordas para manter foco no centro (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(110% 85% at 25% 35%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-start gap-10 md:px-8 md:grid-cols-12 md:gap-6">
        {/* Coluna texto */}
        <div className="relative z-10 md:col-span-6 md:pr-4">
          <span className="hidden md:inline-block rounded-pill border border-red-accent/60 bg-red-accent/20 px-4 py-2 text-[14px] font-bold uppercase tracking-[0.06em] text-on-red shadow-[0_2px_12px_rgba(0,0,0,0.4)] md:text-[11px] md:font-semibold md:tracking-widest md:py-1 md:px-3 md:bg-red-accent/10 md:text-red-accent">
            {props.badge}
          </span>
          <h1 className="mt-5 whitespace-pre-line font-display font-semibold text-section-dark-fg text-[clamp(1.75rem,7vw,2.5rem)] leading-[1.15] md:mt-3 md:text-[clamp(1.75rem,3.4vw,2.6rem)] md:leading-[1.08]" style={{ textShadow: "var(--text-shadow-hero)" }}>
            {props.h1}
          </h1>
          {props.subtituloMobile && (
            <p className="md:hidden mt-4 text-left max-w-none text-[15px] leading-relaxed text-section-dark-fg/85" style={{ textShadow: "var(--text-shadow-hero)" }}>
              {props.subtituloMobile}
            </p>
          )}
          <p className="hidden md:mt-3 md:block md:text-[15px] md:leading-[1.55] text-section-dark-fg/85" style={{ textShadow: "var(--text-shadow-hero)" }}>
            {props.subtitulo}
          </p>
          <p className="hidden md:mt-2 md:block md:text-[15px] md:leading-[1.55] text-section-dark-fg/70" style={{ textShadow: "var(--text-shadow-hero)" }}>
            {props.apoio}
          </p>

          <div className="mt-7 w-full max-w-[420px] md:mt-5 md:max-w-[380px]">
            <a
              href="#oferta"
              className="flex w-full min-h-[56px] items-center justify-center gap-2 rounded-cta bg-red-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-on-red shadow-lg shadow-red-deep/40 transition-colors whitespace-nowrap hover:bg-red-primary-hover md:text-[15px]"
            >
              <Ticket className="h-4 w-4" aria-hidden />
              {props.cta}
            </a>
            <div className="mt-4">
              <ReservationProgress />
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap justify-start gap-2 text-xs md:mt-4">
            {props.pilulas.map((p) => (
              <li key={p.label} className={p.hiddenMobile ? "hidden md:block" : ""}>
                <Pilula {...p} />
              </li>
            ))}
          </ul>
        </div>

        {/* Imagem desktop preservada */}
        <div className="hidden md:static md:col-span-6 md:block md:h-auto md:self-end">
          <div className="relative ml-auto h-[100vh] w-full">
            {/* Sombra da foto projetada no fundo do hero */}
            <img
              src={apresentador1080Avif.url}
              width={props.imagem.width}
              height={props.imagem.height}
              alt=""
              aria-hidden
              loading="eager"
              className="absolute inset-0 h-full w-full object-contain object-right-bottom"
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
            <picture>
              <source type="image/avif" srcSet={AVIF_SRCSET} sizes={IMG_SIZES} />
              <source type="image/webp" srcSet={WEBP_SRCSET} sizes={IMG_SIZES} />
              <img
                src={props.imagem.src}
                width={props.imagem.width}
                height={props.imagem.height}
                alt={props.imagem.alt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain object-right-bottom"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(75% 100% at 50% 0%, black 35%, transparent 80%)",
                  maskImage:
                    "radial-gradient(75% 100% at 50% 0%, black 35%, transparent 80%)",
                  zIndex: 1,
                }}
              />
            </picture>

          </div>
        </div>
      </div>
    </section>
  );
}
