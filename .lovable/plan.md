## Ajuste do Hero Mobile

**Objetivo:** título em exatamente 3 linhas no mobile e conteúdo (badge/título/subtítulo/CTA/pílulas) mais para baixo. Foto do especialista intocada.

### Alterações

1. `src/content/landing.a.ts` (linha 21)
   - Trocar `h1` para 3 linhas: `"Você passa o dia\npensando em problemas\nsem solução."` (mantém a mesma ideia, encaixa em 3 quebras).
   - Desktop continua usando o mesmo h1 (a versão atual também tem 3 linhas, então a leitura desktop segue equivalente).

2. `src/components/landing/Hero.tsx` (linha 29)
   - Aumentar o padding-top mobile do `<section>` de `pt-24` para `pt-40` (empurra badge, título, textos, CTA e pílulas para baixo).
   - Desktop (`md:pt-[6.5rem]`) mantido.
   - Não alterar nenhuma classe/estilo da imagem do especialista (background mobile, picture desktop, máscaras, sombras).

### Fora do escopo
Foto do especialista, layout desktop, tokens, demais seções.
