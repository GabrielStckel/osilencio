import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";
import { MetaPixel } from "@/components/MetaPixel";
import { landingContentA } from "@/content/landing.a";

export const Route = createFileRoute("/")({
  component: IndexPage,
  head: () => ({
    meta: [
      { title: landingContentA.meta.title },
      { name: "description", content: landingContentA.meta.description },
      { property: "og:title", content: landingContentA.meta.ogTitle },
      { property: "og:description", content: landingContentA.meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: landingContentA.meta.canonicalPath },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: landingContentA.meta.ogTitle },
      { name: "twitter:description", content: landingContentA.meta.ogDescription },
    ],
    links: [{ rel: "canonical", href: landingContentA.meta.canonicalPath }],
  }),
});

function IndexPage() {
  return (
    <>
      <MetaPixel pixelId="489930819102829" />
      <Landing content={landingContentA} />
    </>
  );
}
