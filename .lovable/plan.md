## Objetivo
Instalar o Meta Pixel (ID `489930819102829`) apenas na rota `/` (Variante A). A rota `/exclusivoacs` continua sem pixel.

## Escopo
1. **Pixel no navegador (rota `/` apenas)**
   - Criar `src/components/MetaPixel.tsx` que injeta o snippet oficial do Meta Pixel + `<noscript>` fallback, disparando `PageView` no mount.
   - Guardar contra duplo-init (checar `window.fbq`) e só rodar no cliente (`useEffect`).
   - Importar e renderizar `<MetaPixel pixelId="489930819102829" />` **somente** em `src/routes/index.tsx` (dentro do componente `IndexPage`). Nada em `__root.tsx`, nada em `/exclusivoacs`.

2. **Conversions API token (sensível)**
   - O token `EAAG...` é da Conversions API do Meta — **não pode ir para o cliente**. Vou solicitar armazenamento como secret backend (`META_CAPI_ACCESS_TOKEN`) via `add_secret`.
   - Nesta etapa **não** implemento envio server-side de eventos (CAPI) — só o pixel no browser, conforme pedido. O secret fica salvo para uso futuro se você quiser CAPI depois.

## Fora do escopo
- Eventos customizados (Lead, Purchase) — só `PageView` agora.
- Envio server-side via Conversions API.
- Consent/LGPD banner.

## Arquivos
- Criar: `src/components/MetaPixel.tsx`
- Alterar: `src/routes/index.tsx` (renderizar `<MetaPixel />`)

## Confirmação necessária
Ok seguir com **apenas o pixel no browser em `/`** agora e guardar o token da CAPI como secret para uso futuro?
