import { createFileRoute, useSearch } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { landingContentA } from "@/content/landing.a";

const CHECKOUT_BASE = "https://pay.hotmart.com/R106856311C?checkoutMode=10";
const SCK_PADRAO = "wpp-lista";

const CANONICAL = "https://silencio.jonasperess.com.br/";

export const Route = createFileRoute("/lista")({
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
  component: ListaPage,
});

function ListaPage() {
  const { sck } = useSearch({ strict: false });

  const sckLimpo = String(sck ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "")
    .slice(0, 40);

  const checkoutUrl = `${CHECKOUT_BASE}&sck=${sckLimpo || SCK_PADRAO}`;
  const content = { ...landingContentA, checkoutUrl };

  return <Landing content={content} />;
}
