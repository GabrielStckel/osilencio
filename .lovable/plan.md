Objetivo: remover os textos compactos específicos do hero na versão mobile, revertendo para exibir o mesmo texto original em todas as viewports.

Plano de implementação:
1. Remover os campos `subtituloMobile` e `apoioMobile` do tipo `Hero` em `src/content/landing.types.ts`.
2. Remover os valores `subtituloMobile` e `apoioMobile` do objeto hero em `src/content/landing.a.ts`.
3. Simplificar `src/components/landing/Hero.tsx` para renderizar um único bloco de subtítulo e apoio, sem separação mobile/desktop.
4. Preservar os estilos, espaçamentos e hierarquia visual atuais do hero.
5. Verificar build e preview mobile para confirmar que o texto original voltou a aparecer no mobile.

Escopo fechado: remoção da versão mobile específica dos textos do hero; nenhuma alteração de layout, imagem, CTA, cores ou outros componentes.