# Ajuste de posicionamento do hero — textos e cards mais para cima

## Objetivo
Subir verticalmente o bloco de texto (badge, título, parágrafos, CTA e pills) do hero no desktop, reduzindo o vão entre o topo da seção e o conteúdo, sem alterar a foto, máscara, sombra de fundo nem outros elementos do hero.

## Alterações planejadas
- Em `src/components/landing/Hero.tsx`:
  - No grid interno, trocar o alinhamento desktop da coluna de texto de `md:items-center` para `md:items-start`, deixando o texto ancorado no topo vertical do container.
  - Reduzir o `padding-top` da seção no desktop (`md:pt-20` → `md:pt-12`), aproximando o texto do topo.
  - Compactar as margens internas da coluna de texto no desktop (`md:mt-*` do badge, H1, parágrafos, CTA e lista de pills) em 1 nível, mantendo o ritmo legível.
  - Manter inalterados: gradiente de fundo, glow, vinheta, máscara da imagem, sombra projetada, tamanho da foto, tipografia e copy.

## Como testar
1. Verificar no preview (desktop) se o texto e as pills do hero subiram e o espaço vazio entre o topo e o título diminuiu.
2. Confirmar que a imagem do especialista continua visível e com o fade inferior preservado.
3. Rodar `bun run build` para garantir que não houve regressão.

## Risco
Baixo — ajuste de spacing e alinhamento vertical isolado no hero.