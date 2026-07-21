import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Loader2 } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";
import type { Variante } from "@/content/landing.types";

type Props = {
  variante: Variante;
  cta: string;
};

type FieldErrors = Partial<Record<"nome" | "email" | "whatsapp" | "form", string>>;

export function LeadForm({ variante, cta }: Props) {
  const submit = useServerFn(submitLead);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const payload = {
      nome: String(fd.get("nome") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      whatsapp: String(fd.get("whatsapp") ?? "").trim(),
      variante,
    };

    const local: FieldErrors = {};
    if (payload.nome.length < 2) local.nome = "Informe seu nome";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) local.email = "E-mail inválido";
    if (payload.whatsapp.replace(/\D/g, "").length < 10)
      local.whatsapp = "WhatsApp inválido";
    if (Object.keys(local).length) {
      setErrors(local);
      return;
    }

    setErrors({});
    setSubmitting(true);
    try {
      const res = await submit({ data: payload });
      if (res?.ok && res.checkoutUrl) {
        window.location.href = res.checkoutUrl;
        return;
      }
      setErrors({ form: "Não foi possível concluir. Tente novamente." });
      setSubmitting(false);
    } catch (err) {
      setErrors({
        form:
          err instanceof Error
            ? err.message
            : "Não foi possível concluir. Tente novamente.",
      });
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-md border border-white/15 bg-black/40 px-4 py-3 text-base text-section-dark-fg placeholder:text-section-dark-fg/40 outline-none transition-colors focus:border-red-accent focus:ring-2 focus:ring-red-accent/40";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="lead-nome" className="mb-1 block text-xs font-semibold uppercase tracking-wide opacity-70">
          Nome
        </label>
        <input
          id="lead-nome"
          name="nome"
          type="text"
          autoComplete="name"
          inputMode="text"
          required
          maxLength={100}
          className={inputBase}
          aria-invalid={!!errors.nome}
          aria-describedby={errors.nome ? "err-nome" : undefined}
        />
        {errors.nome && (
          <p id="err-nome" role="alert" className="mt-1 text-xs text-red-accent">
            {errors.nome}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="lead-email" className="mb-1 block text-xs font-semibold uppercase tracking-wide opacity-70">
          E-mail
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          maxLength={255}
          className={inputBase}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
        />
        {errors.email && (
          <p id="err-email" role="alert" className="mt-1 text-xs text-red-accent">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="lead-whatsapp" className="mb-1 block text-xs font-semibold uppercase tracking-wide opacity-70">
          WhatsApp
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          maxLength={20}
          placeholder="(11) 99999-9999"
          className={inputBase}
          aria-invalid={!!errors.whatsapp}
          aria-describedby={errors.whatsapp ? "err-whatsapp" : undefined}
        />
        {errors.whatsapp && (
          <p id="err-whatsapp" role="alert" className="mt-1 text-xs text-red-accent">
            {errors.whatsapp}
          </p>
        )}
      </div>

      {errors.form && (
        <p role="alert" className="text-sm text-red-accent">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red transition-colors hover:bg-red-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {submitting ? "Enviando..." : cta}
      </button>
    </form>
  );
}
