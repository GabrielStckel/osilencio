# Ajuste do hero: fade inferior e sombra da foto no fundo

## Objetivo
1. Eliminar o aspecto de "linha reta" na base da foto do especialista, suavizando o fade inferior.
2. Adicionar uma sombra/projeção sutil da foto do especialista no fundo do hero, aumentando profundidade e integração visual.

## Alterações planejadas
- Em `src/components/landing/Hero.tsx`:
  - Ajustar a `mask-image` do `<img>` para um fade inferior mais suave e gradual, evitando a sensação de corte reto.
  - Adicionar um elemento de sombra (por exemplo, uma camada blur da imagem ou um gradiente de sombra) posicionada atrás da foto, com baixa opacidade e desfoque, para criar a projeção no fundo.

## Como testar
1. Verificar no preview se a base da foto desaparece suavemente sem linha reta.
2. Confirmar que o fundo ganha uma sombra/reflexo sutil da imagem, sem competir com o texto.
3. Rodar `bun run build` para garantir que não houve regressão.

## Risco
Baixo — alterações visuais isoladas no hero, sem impacto em funcionalidade ou dados.