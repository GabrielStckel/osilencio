Objetivo: trocar o subtítulo e texto de apoio do hero apenas na versão mobile, mantendo o texto atual no desktop.

Plano de implementação:
1. Adicionar campos opcionais `subtituloMobile` e `apoioMobile` ao tipo `Hero` em `src/content/landing.types.ts`.
2. Incluir na tipagem a possibilidade de fallback para os textos desktop quando os mobile não existirem.
3. Atualizar `src/content/landing.a.ts` com os novos textos mobile solicitados:
   - subtituloMobile: "Sua mente não para, e você já tentou de tudo — meditação, terapia, remédios — sem resultado real, porque o problema não é o sintoma, é a causa."
   - apoioMobile: "Nesta Imersão de 2 Noites você vai descobrir por que sua mente funciona assim e como mudar isso para sempre."
4. Modificar `src/components/landing/Hero.tsx` para renderizar dois blocos de texto com classes responsivas:
   - Bloco mobile: `md:hidden` usando `subtituloMobile` e `apoioMobile`.
   - Bloco desktop: `hidden md:block` usando `subtitulo` e `apoio`.
5. Garantir que a hierarquia visual, espaçamentos e estilos de parágrafo sejam preservados.
6. Verificar build e preview mobile.

Escopo fechado: somente troca de textos do hero em mobile; nenhuma alteração de layout, imagem, CTA, cores ou outros componentes.