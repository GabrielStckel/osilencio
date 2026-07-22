# Ajuste do hero: exibir foto inteira e misturar só a base

## Objetivo
Corrigir a interpretação anterior: exibir a foto do especialista **quase por completo**, e aplicar o fade/sombra **apenas na parte inferior** para que ela se misture suavemente com o fundo do hero.

## Alterações planejadas
- Em `src/components/landing/Hero.tsx`:
  - Trocar a `mask-image` atual (que esconde muito da imagem) por uma máscara que mantém a foto **100% visível até aproximadamente 80-85% da altura** e só desfoca/mistura a parte de baixo (últimos 15-20%).
  - Ajustar a sombra de fundo para usar a mesma máscara suave, projetando a silhueta completa do especialista com sutil desfoque apenas na base.

## Como testar
1. Verificar no preview se a foto do especialista aparece quase inteira.
2. Confirmar que só a base da imagem se dissolve no fundo do hero, sem corte no meio.
3. Rodar `bun run build` para garantir que não houve regressão.

## Risco
Baixo — ajuste isolado de máscara CSS no hero.