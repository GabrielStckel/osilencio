## Ajustes visuais desktop — rota / (variante A)

Todas as mudanças em componentes compartilhados, valem também para /1. Sem novas deps, sem animações caras, tudo tokenizado. Mobile isolado via breakpoints (`md:` só afeta desktop).

### 1) Hero (`src/components/landing/Hero.tsx` + `src/content/landing.a.ts`)
- Grid desktop: mudar de `md:col-span-7 / md:col-span-5` para dar mais peso à imagem e encostar na direita. Coluna imagem `md:col-span-6`, sem `max-w`, wrapper full-bleed até a borda direita da viewport (usar `md:mr-[calc(50%-50vw)]` no container da imagem).
- Máscara da imagem: manter fade lateral esquerdo + adicionar fade inferior (`linear-gradient(to bottom, black 78%, transparent)`) composto com o atual, sem linha de corte.
- Tipografia desktop:
  - H1: reduzir clamp de `clamp(2rem,5.2vw,3.6rem)` para `clamp(1.75rem,4vw,2.9rem)` (≈ -18% no topo).
  - Parágrafos: `md:text-base` (em vez de sm:text-[17px]) e `mt-4`→`md:mt-3`.
  - Compactar espaçamentos verticais (`mt-5`→`md:mt-4`, `mt-7`→`md:mt-5`).
- Altura do hero: remover `pb-16 md:pb-24`, usar `md:min-h-[88vh]` com flex/grid alinhando conteúdo, imagem `object-bottom` já encosta na base com o fade.
- Remover `<p>` do `microtexto` (linha "Vagas limitadas a 150 pessoas.") do JSX. Manter campo no tipo/conteúdo (não usado).
- Copy: em `landing.a.ts`, terceira pílula vira `"Vagas limitadas"`.

### 2) Cards numerados (`src/components/landing/SectionCardsNumerados.tsx`)
- Título com `text-balance` e `max-w-2xl` para evitar palavra órfã.
- Numeral: reduzir de `text-[140px]/[180px]` para `text-[96px] md:text-[120px]`, reposicionar em `bottom-2 right-3` (dentro do card), manter `overflow-hidden` no article, opacidade `text-red-accent/10`. Remover os `+` decorativos (ruído). Aumentar `p-6`→`md:p-8` para dar respiro.

### 3) Lista vermelha (`src/components/landing/SectionListaVermelha.tsx`)
- Título: aumentar para `clamp(2rem,4.5vw,3rem)`, `font-semibold`, adicionar `mb-10 md:mb-14`.
- Textura de fundo: no `SectionShell` variant red OU inline na seção — pseudo `::before` com `background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)` size 24px 24px, `pointer-events-none`. CSS puro, custo zero.
- Cada item: card com `bg-white/5 border border-white/10 rounded-lg p-5 md:p-6`, check em círculo maior (`h-8 w-8`) com `bg-white/15`, gap maior entre itens (`space-y-3`→`space-y-4`).
- Split tipográfico: se o item contém `" — "`, renderizar parte antes em `font-display font-semibold` e depois em `opacity-90 font-normal`. Fallback quando não tem `—`: texto normal.

### 4) Como Funciona / 3 cards claros (`src/components/landing/SectionComoFunciona.tsx`)
- Título: mais presença (`clamp(2rem,4.5vw,2.75rem)`, `font-semibold`, `mb-12`).
- Cards: `border border-black/10 rounded-xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]`, hover subtil.
- Ícone: círculo `h-14 w-14` com `bg-red-accent/10 text-red-accent`, ícone `h-6 w-6`.
- Rótulo curto acima do texto: usar número editorial `01 · 02 · 03` em `text-xs uppercase tracking-widest text-red-accent font-semibold` antes do label. Barra vermelha superior `h-1 w-8 bg-red-accent rounded-full mb-6`.
- Melhorar hierarquia: label em `font-display text-lg`.

### 5) Oferta + Formulário (`src/components/landing/SectionOfertaForm.tsx` + `LeadForm.tsx`)
- Título da seção: mais presença (`clamp(2rem,4.5vw,2.75rem)`, `mb-12 md:mb-16`).
- Grid: `md:gap-10` (mais respiro entre card e form).
- Card de oferta:
  - Borda `border-2 border-red-accent/60`, `shadow-[0_0_0_1px_var(--red-accent)/20,0_20px_60px_-20px_var(--red-deep)]`.
  - Selo "OFERTA": pílula com `bg-red-accent text-on-red px-3 py-1 rounded-pill text-[11px] font-bold uppercase tracking-widest` posicionada absoluta no topo.
  - Preço: quebrar `R$ 47,00` em três spans — `R$` (`text-2xl align-top`), `47` (`text-6xl md:text-7xl font-bold`), `,00` (`text-2xl align-top`). Todos em `text-red-accent font-display`.
  - Adicionar lista curta com checks reais (apenas itens verdadeiros existentes hoje: "2 noites ao vivo", "Acesso pelo Zoom"). Não inventar "material de apoio".
- Formulário (`LeadForm.tsx`):
  - Labels visíveis acima dos inputs (`text-xs uppercase tracking-widest opacity-70 mb-1.5`).
  - Inputs: `rounded-md border border-white/15 bg-black/40 px-4 py-3 focus:border-red-accent focus:ring-2 focus:ring-red-accent/40 outline-none`.
  - Espaçamento entre campos `space-y-4`.
  - Botão submit: `bg-red-primary hover:bg-red-primary-hover min-h-[52px] rounded-cta font-bold uppercase tracking-wide shadow-lg shadow-red-deep/40 w-full`.

### Propagação para /1
Todos os arquivos alterados são componentes compartilhados usados pela `Landing` (que hoje é chamada por `/` e será chamada por `/1` com `landing.b`). A única mudança de conteúdo (pílula "Vagas limitadas") fica em `landing.a.ts`; quando `landing.b.ts` existir, ele terá as próprias pílulas — a estrutura do componente continua idêntica.

### Arquivos alterados
- `src/components/landing/Hero.tsx`
- `src/components/landing/SectionCardsNumerados.tsx`
- `src/components/landing/SectionListaVermelha.tsx`
- `src/components/landing/SectionComoFunciona.tsx`
- `src/components/landing/SectionOfertaForm.tsx`
- `src/components/landing/LeadForm.tsx`
- `src/content/landing.a.ts` (só a copy da 3ª pílula)

Sem migrações, sem novas dependências, sem alteração de tokens em `styles.css`.
