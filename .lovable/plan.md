# Ajuste do hero: aumentar ainda mais a foto do especialista

## Objetivo
Aumentar a foto do apresentador na seção `Hero` em desktop ainda mais do que no último ajuste (`md:h-[96vh]`), **sem alterar** nenhum outro elemento do hero (texto, cores, gradientes, CTA, espaçamentos de texto, badge, etc.).

## Alteração planejada
- Em `src/components/landing/Hero.tsx`, aumentar a altura do container da imagem na coluna direita, indo além de `md:h-[96vh]` para aproximadamente `md:h-[110vh]` ou um valor que ainda respeite a máscara de fade inferior e a posição à direita.

## Como testar
1. Ajustar o valor de altura da imagem no hero.
2. Verificar no preview se a imagem ficou maior, ainda se dissolve na base e não corta de forma dura.
3. Rodar `bun run build` para confirmar que não houve regressão.

## Risco
Praticamente zero — é ajuste de dimensão localizado na imagem.