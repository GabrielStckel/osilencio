# Rota /lista: aceitar sck via query string

## Mudança

Apenas `src/routes/lista.tsx` é modificado. Nenhum outro arquivo é tocado.

Hoje a rota monta `checkoutUrl` em constante de módulo (`CHECKOUT_URL_LISTA`, fixa em `wpp-lista`). A mudança passa a ler o parâmetro `sck` da query string, sanitiza, e monta a URL dinamicamente dentro do componente. Quando o parâmetro não existe ou fica vazio após sanitização, mantém `wpp-lista`.

O fluxo do `checkoutUrl` já existe: `Landing` repassa `content.checkoutUrl` para `SectionOfertaForm`, que usa `checkoutUrl ?? CHECKOUT_URL`. Os demais CTAs (hero, barra fixa, rodapé) são âncoras para `#oferta` — não mudam.

## Sanitização

Whitelist `[^a-z0-9_-]` (remove tudo que não é letra minúscula, número, hífen ou underscore), `toLowerCase()`, limite de 40 caracteres. Não usa `encodeURIComponent` — encodar não impede injeção de parâmetro, só esconde.

## Diff

```diff
--- src/routes/lista.tsx (atual)
+++ src/routes/lista.tsx (novo)
@@
-import { createFileRoute } from "@tanstack/react-router";
+import { createFileRoute, useSearch } from "@tanstack/react-router";
 import { Landing } from "@/components/landing/Landing";
 import { landingContentA } from "@/content/landing.a";
-import { CHECKOUT_URL_LISTA } from "@/lib/config";
 
-const listaContent = { ...landingContentA, checkoutUrl: CHECKOUT_URL_LISTA };
+const CHECKOUT_BASE = "https://pay.hotmart.com/R106856311C?checkoutMode=10";
+const SCK_PADRAO = "wpp-lista";
 
 const CANONICAL = "https://silencio.jonasperess.com.br/";
 
 export const Route = createFileRoute("/lista")({
-  component: ListaPage,
   head: () => ({
     meta: [
       { title: landingContentA.meta.title },
       { name: "description", content: landingContentA.meta.description },
       { name: "robots", content: "noindex, nofollow" },
       { property: "og:title", content: landingContentA.meta.ogTitle },
       { property: "og:description", content: landingContentA.meta.ogDescription },
       { property: "og:type", content: "website" },
       { property: "og:url", content: CANONICAL },
       { name: "twitter:card", content: "summary_large_image" },
       { name: "twitter:title", content: landingContentA.meta.ogTitle },
       { name: "twitter:description", content: landingContentA.meta.ogDescription },
     ],
     links: [{ rel: "canonical", href: CANONICAL }],
   }),
+  component: ListaPage,
 });
 
 function ListaPage() {
-  return <Landing content={listaContent} />;
+  const { sck } = useSearch({ strict: false });
+
+  const sckLimpo = String(sck ?? "")
+    .toLowerCase()
+    .replace(/[^a-z0-9_-]/g, "")
+    .slice(0, 40);
+
+  const checkoutUrl = `${CHECKOUT_BASE}&sck=${sckLimpo || SCK_PADRAO}`;
+  const content = { ...landingContentA, checkoutUrl };
+
+  return <Landing content={content} />;
 }
```

## Validação esperada

| URL acessada | sck no checkout |
|---|---|
| `/lista` | `wpp-lista` |
| `/lista?sck=ig-carrossel` | `ig-carrossel` |
| `/lista?sck=wpp-lote3` | `wpp-lote3` |
| `/lista?sck=` (vazio) | `wpp-lista` |
| `/lista?sck=abc%26foo=bar` | `abcfoobar` |

- A URL final tem exatamente um `sck`, nunca dois.
- `/` e `/exclusivoacs` não são alterados.
- Sem Meta Pixel, sem scripts de tracking.
- Links já em circulação para `/lista` sem query param continuam com `sck=wpp-lista`.
