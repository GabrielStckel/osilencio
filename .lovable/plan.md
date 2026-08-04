# Rota /lista com checkout rastreado (sck=wpp-lista)

## O que encontrei hoje

- A URL de checkout da rota `/` está em um único lugar: `src/lib/config.ts` (`CHECKOUT_URL = https://pay.hotmart.com/R106856311C?checkoutMode=10`). Não há URL hardcoded espalhada em componentes.
- Pontos que levam ao checkout na página `/`: **apenas 1 link real** — o botão dentro do card de oferta (`SectionOfertaForm`, usa `checkoutUrl ?? CHECKOUT_URL`). Os demais CTAs (hero, barra fixa inferior, rodapé) são âncoras internas para `#oferta`, não vão direto ao Hotmart. Existe também `LeadForm` (retorna `CHECKOUT_URL` via server function), mas ele **não é renderizado em nenhuma página** hoje.
- Rotas: TanStack Router file-based em `src/routes/`. `/` = `src/routes/index.tsx` renderiza `<Landing content={landingContentA} />` (+ MetaPixel). `/exclusivoacs` renderiza o mesmo `Landing` com `landingContentB` + modal.
- `LandingContent` já aceita `checkoutUrl` opcional, que `Landing` repassa para `SectionOfertaForm`. É o mecanismo que a `/exclusivoacs` já usa.

## Plano

1. `src/lib/config.ts`: adicionar `export const CHECKOUT_URL_LISTA = "https://pay.hotmart.com/R106856311C?checkoutMode=10&sck=wpp-lista";` (sem `bid`). `CHECKOUT_URL` fica intacto.
2. Criar `src/routes/lista.tsx`:
   - `createFileRoute("/lista")`
   - renderiza `<Landing content={{ ...landingContentA, checkoutUrl: CHECKOUT_URL_LISTA }} />` — mesmo componente e mesmo arquivo de conteúdo, sem duplicação, sem estado global, sem leitura de query string.
   - `head()` próprio reaproveitando os textos de `landingContentA.meta`, com `canonical` apontando para `/` e `robots: noindex, nofollow` (é uma variante de tracking, não deve competir na busca).
   - Sem modal promocional.
3. Nada muda em `index.tsx`, `exclusivoacs.tsx`, `landing.a.ts`, `landing.b.ts` nem nos componentes de `src/components/landing/`. Preload de imagem e `picture`/AVIF/WebP continuam iguais, pois o componente é o mesmo.

## Ponto a confirmar

O Meta Pixel hoje está só na `/`. Na `/lista` eu **não** vou incluir o pixel, a menos que você peça — me avise se quiser que ele também dispare lá.

## Aceite

- `/lista` visualmente idêntica à `/`.
- Botão de compra da `/lista` → `...?checkoutMode=10&sck=wpp-lista`.
- Botão de compra da `/` → `...?checkoutMode=10`.
- `/exclusivoacs` inalterada, com modal.
- Nenhum link com `bid`.
