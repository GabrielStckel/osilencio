// Tipos do conteúdo da landing. Componentes recebem tudo por props — zero copy hardcoded.

export type Variante = "A" | "B";

export type Meta = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  canonicalPath: string;
};

export type Topbar = {
  marca: string;
  badgeCalendario: string;
};

export type HeroPilula = { icon: "calendar" | "monitor" | "users"; label: string; hiddenMobile?: boolean };

export type Hero = {
  badge: string;
  h1: string;
  subtitulo: string;
  apoio: string;
  subtituloMobile?: string;
  cta: string;
  microtexto: string;
  pilulas: HeroPilula[];
  imagem: { src: string; width: number; height: number; alt: string };
};

export type SectionProblema = {
  kind: "problema";
  fundo: "dark" | "light" | "red";
  titulo: string;
  texto: string;
};

export type SectionCardsNumerados = {
  kind: "cardsNumerados";
  fundo: "dark" | "light" | "red";
  titulo: string;
  cards: string[];
  fechamento: string;
};

export type SectionListaVermelha = {
  kind: "listaVermelha";
  fundo: "dark" | "light" | "red";
  titulo: string;
  itens: string[];
  fechamento: string;
};

export type SectionDiferencial = {
  kind: "diferencial";
  fundo: "dark" | "light" | "red";
  titulo: string;
  texto: string;
};

export type SectionChecklist = {
  kind: "checklist";
  fundo: "dark" | "light" | "red";
  titulo: string;
  itens: string[];
  fechamento: string;
};

export type SectionComoFunciona = {
  kind: "comoFunciona";
  fundo: "dark" | "light" | "red";
  titulo: string;
  cards: { icon: "calendar" | "monitor" | "users"; label: string }[];
  texto: string;
};

export type SectionOfertaForm = {
  kind: "ofertaForm";
  fundo: "dark" | "light" | "red";
  titulo: string;
  subtitulo?: string;
  cardOferta: {
    nome: string;
    preco: string;
    inclui: string;
  };
  cta: string;
  urgencia: string;
};

export type FaqItem = { pergunta: string; resposta: string };

export type SectionFaq = {
  kind: "faq";
  fundo: "dark" | "light" | "red";
  titulo: string;
  itens: FaqItem[];
};

export type SectionRodape = {
  kind: "rodape";
  fundo: "dark" | "light" | "red";
  marca: string;
  cta: string;
  links: { label: string; href: string }[];
  aviso: string;
};

export type LandingSection =
  | SectionProblema
  | SectionCardsNumerados
  | SectionListaVermelha
  | SectionDiferencial
  | SectionChecklist
  | SectionComoFunciona
  | SectionOfertaForm
  | SectionFaq
  | SectionRodape;

export type CtaBar = {
  label: string;
};

export type LandingContent = {
  variante: Variante;
  meta: Meta;
  topbar: Topbar;
  hero: Hero;
  sections: LandingSection[];
  ctaBar: CtaBar;
  checkoutUrl?: string;
};

