# Ajuste do hero: aumentar imagem do especialista

## Objetivo
Aumentar a foto do apresentador na seção `Hero` em desktop, **sem alterar** tipografia, cores, gradientes, botão, espaçamentos de texto, badge ou layout do restante do hero.

## Alteração planejada
- No arquivo `src/components/landing/Hero.tsx`, ajustar o container da imagem na coluna direita para ocupar mais área visualmente, usando apenas os tokens de espaçamento/largura/altura do componente (nada de texto, background, gradientes ou CTA).

## Como testar
1. Aumentar a imagem em desktop mantendo o fade inferior e a posição à direita.
2. Verificar no preview se a imagem está maior e ainda se dissolve suavemente na base.
3. Rodar `bun run build` para garantir que não houve regressão.

## Risco
Praticamente zero — é ajuste localizado de dimensões do container de imagem.