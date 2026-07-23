import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { landingContentB } from "@/content/landing.b";

export const Route = createFileRoute("/exclusivoacs")({
  component: ExclusivoAcsPage,
  head: () => ({
    meta: [
      { title: landingContentB.meta.title },
      { name: "description", content: landingContentB.meta.description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: landingContentB.meta.ogTitle },
      { property: "og:description", content: landingContentB.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: landingContentB.meta.canonicalPath },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: landingContentB.meta.ogTitle },
      { name: "twitter:description", content: landingContentB.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: landingContentB.meta.canonicalPath }],
  }),
});

function ExclusivoAcsPage() {
  return <Landing content={landingContentB} />;
}
