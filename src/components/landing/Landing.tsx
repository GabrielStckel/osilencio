import type { LandingContent } from "@/content/landing.types";
import { CtaBar } from "./CtaBar";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { SectionCardsNumerados } from "./SectionCardsNumerados";
import { SectionChecklist } from "./SectionChecklist";
import { SectionComoFunciona } from "./SectionComoFunciona";
import { SectionDiferencial } from "./SectionDiferencial";
import { SectionFaq } from "./SectionFaq";
import { SectionListaVermelha } from "./SectionListaVermelha";
import { SectionOfertaForm } from "./SectionOfertaForm";
import { SectionProblema } from "./SectionProblema";
import { Topbar } from "./Topbar";

export function Landing({ content }: { content: LandingContent }) {
  return (
    <main className="relative">
      <div className="relative">
        <Topbar {...content.topbar} />
        <Hero {...content.hero} />
      </div>

      {content.sections.map((s, i) => {
        const key = `${s.kind}-${i}`;
        switch (s.kind) {
          case "problema":
            return <SectionProblema key={key} {...s} />;
          case "cardsNumerados":
            return <SectionCardsNumerados key={key} {...s} />;
          case "listaVermelha":
            return <SectionListaVermelha key={key} {...s} />;
          case "diferencial":
            return <SectionDiferencial key={key} {...s} />;
          case "checklist":
            return <SectionChecklist key={key} {...s} />;
          case "comoFunciona":
            return (
              <div key={key} id="como-funciona">
                <SectionComoFunciona {...s} />
              </div>
            );
          case "ofertaForm":
            return (
              <SectionOfertaForm key={key} section={s} variante={content.variante} />
            );
          case "faq":
            return <SectionFaq key={key} {...s} />;
          case "rodape":
            return <Footer key={key} {...s} />;
        }
      })}

      {/* Padding pra não esconder rodapé embaixo da CTA bar */}
      <div aria-hidden className="h-24" />
      <CtaBar label={content.ctaBar.label} />
    </main>
  );
}
