# Página A — Diagnóstica (rota `/`) + base reutilizável

## Objetivo
Construir a landing "O Silêncio" na rota `/` (variante A) com **componentes reutilizáveis por props**, prontos para a variante B (`/1`) apenas trocar o conteúdo. Zero copy hardcoded dentro dos componentes.

## Pré-requisitos (executar antes das seções)
1. **Ativar Lovable Cloud** — obrigatório pela regra do funil ("nenhum formulário sem persistência"). Criar tabela `leads`:
   - `id uuid pk`, `nome text`, `email text`, `whatsapp text`, `variante text check in ('A','B')`, `integracao_status text` (`pending|ok|failed|skipped`), `integracao_erro text null`, `created_at timestamptz default now()`
   - RLS habilitada; policy `INSERT` para `anon` + `authenticated`; sem `SELECT` público. GRANTs `INSERT` para `anon, authenticated`, `ALL` para `service_role`.
2. **Upload da imagem do hero** via `lovable-assets` a partir de `user-uploads://Design_sem_nome_10.png` → `src/assets/apresentador_final.png.asset.json` (CDN, com width/height reais lidos do arquivo).
3. **Constante global** `CHECKOUT_URL = "#definir-checkout"` em `src/lib/config.ts` (única fonte usada por todos os CTAs).

## Arquitetura de conteúdo e componentes

### Objeto de conteúdo (tipado)
`src/content/landing.types.ts` — tipos: `LandingContent` com `meta`, `topbar`, `hero`, `sections[]` (união discriminada: `problema | cardsNumerados | listaVermelha | diferencial | checklist | comoFunciona | ofertaForm | faq | rodape`), `ctaBar`.

`src/content/landing.a.ts` — instância com toda a copy da variante A do prompt.

### Componentes reutilizáveis (todos recebem props, sem texto hardcoded)
- `src/components/landing/Topbar.tsx` — nome + badge calendário.
- `src/components/landing/Hero.tsx` — 2 colunas, badge, h1, sub, apoio, CTA, 3 pílulas de logística, glow radial vermelho via CSS, `mask-image` na foto, `loading="eager"` + `fetchpriority="high"` + width/height. Único `<h1>` da página. **Zero animação acima da dobra.**
- `src/components/landing/SectionShell.tsx` — wrapper que aplica tokens de seção (`dark|light|red`) via classes que consomem `--section-*-bg/fg`.
- `src/components/landing/SectionProblema.tsx` (título + texto).
- `src/components/landing/SectionCardsNumerados.tsx` (título + 4 cards com numeral 01–04 gigante atrás em `--red-accent` translúcido, ornamentos `+` nos cantos + texto de fechamento).
- `src/components/landing/SectionListaVermelha.tsx` (fundo vermelho, título + itens com check + fechamento).
- `src/components/landing/SectionDiferencial.tsx` (título + texto, fundo claro).
- `src/components/landing/SectionChecklist.tsx` (título + checklist + fechamento).
- `src/components/landing/SectionComoFunciona.tsx` (título + 3 cards + texto).
- `src/components/landing/SectionOfertaForm.tsx` (card oferta + `LeadForm` + urgência).
- `src/components/landing/SectionFaq.tsx` (título display gigante + acordeão com altura animada e botão +/− circular; um item aberto por vez).
- `src/components/landing/Footer.tsx` (nome, CTA final, links placeholder, aviso).
- `src/components/landing/CtaBar.tsx` — barra fixa no rodapé da viewport, fundo sólido (sem `backdrop-blur`), botão vermelho central. Detecta seção clara/escura via `IntersectionObserver` observando os `SectionShell` para ajustar opacidade sobre claro.
- `src/components/landing/LeadForm.tsx` — Nome/E-mail/WhatsApp com `type`/`inputMode`/`autocomplete` corretos, `label` real por campo, validação pt-BR (Zod), botão com loading + `disabled`, guarda contra duplo submit, aria-live para erros.
- `src/components/landing/Reveal.tsx` — wrapper com fade-in + translate-Y (uma vez) via `IntersectionObserver`. **Não aplicar em Topbar nem Hero.**

### Lógica do lead (ordem sagrada)
`src/lib/leads.functions.ts` — `createServerFn` `submitLead`:
- `.inputValidator` Zod (nome, email, whatsapp, variante `'A'|'B'`)
- `.handler`: 1) insere em `leads` com `integracao_status='pending'` via `supabaseAdmin` (carregado dentro do handler); 2) tenta integração externa se `LEAD_WEBHOOK_URL` presente (fetch com timeout curto); atualiza `integracao_status` para `ok|failed|skipped`; 3) retorna `{ ok: true, checkoutUrl: CHECKOUT_URL }`. **Falha externa nunca bloqueia** — sempre retorna `ok:true` se o insert deu certo. Cliente faz `window.location.href = checkoutUrl` só depois.

### Rota `/`
`src/routes/index.tsx` — importa `landingContentA`, define `head()` com title/description/og reais (título: "O Silêncio — Imersão de 2 Noites | Paz Mental de Verdade"), monta na ordem: Topbar → Hero → Problema → CardsNumerados → ListaVermelha → Diferencial → Checklist → ComoFunciona → OfertaForm → Faq → Footer + CtaBar fixa. Passa `variante="A"` no `LeadForm`.

## Tokens/estilos (aditivos, não quebram nada)
- Em `src/styles.css`, adicionar classes utilitárias mínimas para seções: `.section-dark`, `.section-light`, `.section-red` mapeadas aos tokens `--section-*-bg/fg` já definidos.
- Nada de hex/font-family em componentes — só classes ligadas a tokens.

## Performance (inegociável)
- Hero: imagem com width/height reais, `loading="eager"`, `fetchpriority="high"`, sem `Reveal` acima da dobra.
- Nenhuma dependência nova (nem animação, nem carrossel, nem ícone pesado). Ícones ficam com Lucide já disponível.
- Fontes já resolvidas em passo anterior (@fontsource, subset latin).
- Sem `backdrop-blur` na CTA bar. Glow do hero é gradiente radial CSS puro.

## SEO
- `head()` da rota `/`: title, description, og:title, og:description, og:type, twitter:card, canonical placeholder até termos domínio de produção. `og:image` fica pendente (URL absoluta só após publicar).
- `html lang="pt-BR"` já está no `__root.tsx`.

## Pendências que ficam abertas (documentar no fim)
- `CHECKOUT_URL` real (hoje `#definir-checkout`).
- `og:image` e `canonical` absolutos (após publicar).
- Favicon próprio.
- Integração externa (`LEAD_WEBHOOK_URL`) — hook pronto, secret a definir.
- Respostas `[DEFINIR]` do FAQ 3 e 7 (replay/ausência).

## Fora de escopo
- Rota `/1` (variante B) — só na próxima etapa, reaproveitando 100% dos componentes com outro `landing.b.ts`.
- Página de agradecimento/pós-checkout.
- Testes automatizados.
