import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function PromoEncerradaModal({ open, onClose }: Props) {
  const navigate = useNavigate();
  const primaryRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primaryRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-encerrada-title"
      className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-150"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
      />
      <div
        data-promo-modal
        className="relative mx-4 w-full max-w-[420px] rounded-xl border border-primary/30 bg-card p-8 text-foreground shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <h2
          id="promo-encerrada-title"
          className="font-display text-2xl font-semibold leading-tight"
        >
          A promoção acabou
        </h2>
        <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/80">
          O valor promocional de R$ 27 era válido apenas até 26 de julho.
          As inscrições para a imersão continuam abertas pelo valor normal,
          com as mesmas 2 noites ao vivo.
        </p>

        <button
          ref={primaryRef}
          type="button"
          onClick={() => navigate({ to: "/" })}
          className="mt-6 w-full rounded-md bg-primary px-4 py-3 font-sans text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary-hover transition-colors"
        >
          VER A OFERTA ATUAL
        </button>

        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={onClose}
            className="font-sans text-xs text-foreground/60 hover:text-foreground hover:underline"
          >
            Continuar vendo esta página
          </button>
        </div>
      </div>
    </div>
  );
}
