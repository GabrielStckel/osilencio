import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { landingContentA } from "@/content/landing.a";
import { CHECKOUT_URL_LISTA } from "@/lib/config";

const listaContent = { ...landingContentA, checkoutUrl: CHECKOUT_URL_LISTA };

const CANONICAL = "https://silencio.jonasperess.com.br/";

export const Route = createFileRoute("/lista")({
  component: ListaPage,
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
});

function ListaPage() {
  return <Landing content={listaContent} />;
}
