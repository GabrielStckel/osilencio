import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { CHECKOUT_URL } from "./config";

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20)
    .regex(/^[\d\s()+-]+$/, "WhatsApp inválido"),
  variante: z.enum(["A", "B"]),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    // Ordem sagrada: 1) salvar no banco  2) integração externa  3) checkout
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: inserted, error } = await supabaseAdmin
      .from("leads")
      .insert({
        nome: data.nome,
        email: data.email,
        whatsapp: data.whatsapp,
        variante: data.variante,
        integracao_status: "pending",
      })
      .select("id")
      .single();

    if (error || !inserted) {
      // Se nem salvamos o lead, aí sim falha — não redireciona pro checkout.
      throw new Error("Não foi possível registrar sua inscrição. Tente novamente.");
    }

    // Integração externa opcional — nunca bloqueia o lead.
    const webhook = process.env.LEAD_WEBHOOK_URL;
    let integStatus: "ok" | "failed" | "skipped" = "skipped";
    let integErro: string | null = null;

    if (webhook) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: inserted.id, ...data }),
          signal: controller.signal,
        });
        clearTimeout(timeout);
        integStatus = res.ok ? "ok" : "failed";
        if (!res.ok) integErro = `HTTP ${res.status}`;
      } catch (err) {
        integStatus = "failed";
        integErro = err instanceof Error ? err.message : "unknown";
      }
      await supabaseAdmin
        .from("leads")
        .update({ integracao_status: integStatus, integracao_erro: integErro })
        .eq("id", inserted.id);
    }

    return { ok: true as const, checkoutUrl: CHECKOUT_URL };
  });
