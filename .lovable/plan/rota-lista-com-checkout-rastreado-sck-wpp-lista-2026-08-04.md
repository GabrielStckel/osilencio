# Rota /lista com checkout rastreado (sck=wpp-lista)

## O que encontrei hoje

- A URL de checkout da rota `/` está em um único lugar: `src/lib/config.ts` (`CHECKOUT_URL = https://pay.hotmart.com/R106856311C?checkoutMode=10`). Não há URL hardcoded espalhada em componentes.
- Pontos que levam ao checkout na página `/`: **apenas 1 link real** — o botão dentro do card de oferta (`SectionOfertaForm`, usa `checkoutUrl ?? CHECKOUT_URL`). Os demais CTAs (hero, barra fixa inferior, rodapé) são âncoras internas para `#oferta`. `LeadForm` existe mas não é renderizado em nenhuma página.
- Rotas: file-based em `src/routes/`. `/` = `index.tsx` renderiza `<Landing content={landingContentA} />` (+ MetaPixel). `/exclusivoacs` usa `landingContentB` + modal.
- `LandingContent` já aceita `checkoutUrl` opcional, repassado por `Landing` ao `SectionOfertaForm`.
- Não existe sitemap no projeto (`public/` só tem `favicon.ico`) — item de sitemap ignorado, nenhum será criado.

## Plano

1. `src/lib/config.ts`: adicionar `export const CHECKOUT_URL_LISTA = "https://pay.hotmart.com/R106856311C?checkoutMode=10&sck=wpp-lista";` (sem `bid`). `CHECKOUT_URL` intacto.
2. Criar `src/routes/lista.tsx`:
   - `createFileRoute("/lista")`
   - constante no escopo do módulo: `const listaContent = { ...landingContentA, checkoutUrl: CHECKOUT_URL_LISTA };` e `<Landing content={listaContent} />` (sem objeto inline no JSX).
   - **sem MetaPixel** e sem modal promocional.
   - `head()` próprio com os textos de `landingContentA.meta`, `robots: noindex, nofollow`, `og:url` e `canonical` apontando para `https://silencio.jonasperess.com.br/`.
   - Sem leitura de query string, sem estado global.
3. Nada muda em `index.tsx`, `exclusivoacs.tsx`, `landing.a.ts`, `landing.b.ts` nem em `src/components/landing/`. Preload de imagem e `picture`/AVIF/WebP seguem iguais (mesmo componente).

## Aceite

- `/lista` visualmente idêntica à `/`.
- Botão de compra da `/lista` → `...?checkoutMode=10&sck=wpp-lista`.
- Botão de compra da `/` → `...?checkoutMode=10`.
- `/exclusivoacs` inalterada, com modal.
- Nenhuma requisição do Meta Pixel em `/lista`.
- `noindex, nofollow` presente e canonical apontando para `/`.
- Nenhum link com `bid`.
