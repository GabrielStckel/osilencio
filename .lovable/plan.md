Ajustes desktop na página A (rota `/`).

## 1. Hero — fade inferior da imagem
Arquivo: `src/components/landing/Hero.tsx`

- A máscara atual usa duas camadas separadas por vírgula, o que o navegador interpreta como duas imagens empilhadas (não como interseção real). Como cada camada é opaca na maior parte, o corte reto embaixo continua visível.
- Trocar por uma máscara única combinando os dois eixos:
  - `maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)"` no desktop
  - Fade lateral mantido só no mobile ou aplicado via segunda propriedade com `maskComposite: "intersect"` corretamente (usar `-webkit-mask-composite: source-in` + `mask-composite: intersect` só funciona com múltiplas `mask-image`; a solução mais previsível é uma máscara em `radial-gradient` ou combinar via SVG mask).
- Solução escolhida: máscara única `linear-gradient(to bottom, black 0%, black 60%, transparent 100%)` no desktop, garantindo dissolução real na base. No mobile mantém o fade lateral atual.
- Alternativamente, aumentar a área transparente (de `78%` para `55–60%`) já suaviza bastante o corte reto.

## 2. Hero — H1 em 3 linhas no desktop
Arquivo: `src/components/landing/Hero.tsx` linha 46

- Reduzir `md:text-[clamp(1.75rem,4vw,2.9rem)]` para `md:text-[clamp(1.5rem,3.2vw,2.35rem)]`.
- Ajustar `leading` para `md:leading-[1.1]` para acomodar 3 linhas sem apertar.

## 3. Seção "Em 2 noites, você vai entender" — reduzir escala
Arquivo: `src/components/landing/SectionCardsNumerados.tsx`

- Título (linha 10): reduzir `clamp(1.75rem,4vw,2.75rem)` → `clamp(1.5rem,2.6vw,2rem)` no desktop.
- Numerais gigantes dos cards (linha 25): reduzir `md:text-[120px]` → `md:text-[88px]` e ajustar opacidade se ficar pesado.
- Padding dos cards (linha 21): reduzir `md:p-8` → `md:p-7`.
- Gap do grid (linha 16): manter `gap-5`.

## Fora de escopo
Mobile permanece intocado. Copy, estrutura e demais seções não mudam.