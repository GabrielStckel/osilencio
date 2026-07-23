## Objetivo
Adicionar barra de progresso de reservas no Hero (entre CTA e pílulas) e corrigir o layout mobile do Hero. Preservar o desktop 100% intacto.

## 1. Novo componente: `src/components/ReservationProgress.tsx`

Determinístico, sem `Math.random` e sem `localStorage`.

Constantes de módulo:
```
const START = new Date("2026-07-23T00:00:00-03:00").getTime();
const END   = new Date("2026-08-10T23:59:00-03:00").getTime();
const START_PCT = 32;
const END_PCT = 97;

function getPct() {
  const t = (Date.now() - START) / (END - START);
  const c = Math.min(Math.max(t, 0), 1);
  return Math.round(START_PCT + (END_PCT - START_PCT) * c);
}
```

Comportamento:
- `useState(getPct())` → número real já no primeiro paint.
- `useState(0)` para `barWidth`; primeiro `useEffect` seta para o pct → barra anima 0 → pct em ~1.2s via `transition-all duration-1000 ease-out`.
- `setInterval(60000)` recalcula pct e barWidth; `clearInterval` no cleanup.
- Altura fixa desde o primeiro render (sem CLS).

Markup:
- Wrapper `w-full`.
- Linha superior: `flex justify-between items-center mb-2` — `"Vagas reservadas"` (`text-xs uppercase tracking-wide text-white/60`) + `{pct}%` (`text-sm font-bold text-red-400`).
- Trilha: `h-2.5 rounded-full bg-white/10 overflow-hidden border border-white/5 relative`, com `role="progressbar"`, `aria-valuenow={pct}`, `aria-valuemin=0`, `aria-valuemax=100`, `aria-label="Vagas reservadas"`.
- Preenchimento: `h-full rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 relative overflow-hidden transition-all duration-1000 ease-out`, `style={{ width: barWidth+'%', boxShadow: '0 0 12px rgba(239,68,68,0.5)' }}`.
- Shimmer como **div filho** (não pseudo-elemento): `absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer`.
- Linha inferior: `mt-2 text-[11px] text-white/45` — `Restam apenas {100 - pct}% das vagas · Encerra 10 de agosto`.

## 2. CSS

Adicionar em `src/styles.css` (arquivo de entrada Tailwind v4 já existente):
```
@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-shimmer { animation: shimmer 2.5s linear infinite; }
```

## 3. Ajustes em `src/components/landing/Hero.tsx`

Integração:
- Envolver CTA + `<ReservationProgress />` num wrapper `w-full max-w-[420px] md:max-w-[380px] mt-7 md:mt-5` para que a barra tenha exatamente a mesma largura do botão.
- Ordem final: badge → h1 → parágrafo → CTA → `ReservationProgress` → pílulas.

Correções mobile (< md), sem tocar em nenhuma classe `md:`:
1. Parágrafo mobile: remover `text-justify` → `text-left max-w-none text-[15px] leading-relaxed`.
2. Remover o bloco de imagem mobile separado (`absolute inset-x-0 top-0 h-[560px]` com máscara linear) e o `pt-[340px]/sm:pt-[360px]` do grid. Substituir por:
   - `<img>` absoluta dentro do `<section>`: `absolute inset-0 w-full h-full object-cover object-top md:hidden` + `aria-hidden`.
   - Overlay irmão: `absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-black md:hidden`.
   - Grid/conteúdo em `relative z-10`.
   - `<section>` mantém `relative overflow-hidden`.
3. H1 mobile: `text-[clamp(1.75rem,7vw,2.5rem)] leading-[1.15] text-balance` (preservar classes `md:` atuais).
4. CTA mobile: `w-full min-h-[56px] text-base py-4 whitespace-nowrap` (adicionar sem quebrar as `md:` atuais).
5. Pílulas: `flex flex-wrap gap-2 text-xs justify-start` — podem ocupar 2 linhas.
6. `<section>` mobile: `px-5 py-10 min-h-[100svh]`.
7. Garantir `overflow-x-hidden` no wrapper da página (adicionar no `<section>` do Hero se já não estiver globalmente).

Não alterar: textos/copy, tokens de cor, demais seções, imagem e máscara do desktop, grid de 12 colunas.

## Validação
- Build.
- Playwright em 375px: ordem correta, zero scroll horizontal, barra com mesma largura do CTA, parágrafo alinhado à esquerda, retrato como background com overlay legível.
- Desktop pixel-idêntico ao atual.
