import type { LandingContent } from "./landing.types";
import apresentador from "@/assets/apresentador.png.asset.json";

export const landingContentA: LandingContent = {
  variante: "A",
  meta: {
    title: "O Silêncio — Imersão de 2 Noites | Paz Mental de Verdade",
    description:
      "Imersão online de 2 noites (11 e 12 de agosto, 19h30 às 21h30) para quem sofre com mente acelerada, ansiedade e pensamento excessivo. R$ 47.",
    ogTitle: "O Silêncio — Imersão de 2 Noites",
    ogDescription:
      "Descubra por que sua mente não para — e como mudar isso. 2 noites ao vivo no Zoom, 11 e 12 de agosto. R$ 47.",
    canonicalPath: "/",
  },
  topbar: {
    marca: "O Silêncio",
    badgeCalendario: "11 e 12 de agosto · 19h30 às 21h30",
  },
  hero: {
    badge: "IMERSÃO ONLINE E AO VIVO • 2 NOITES",
    h1: "Você passa o dia inteiro pensando em problemas que não consegue resolver.",
    subtitulo:
      "Sua mente não para. Preocupação. Ansiedade. Falta de foco. Memória fraca. Cansaço mental. Você já tentou de tudo. Meditação. Terapia. Remédios. Nada funciona de verdade. Porque você está tratando o sintoma, não a causa.",
    apoio:
      "Existe uma razão profunda pela qual sua mente não consegue descansar. E existe uma solução que realmente funciona. Junte-se a nós em uma Imersão de 2 Noites onde você vai descobrir por que sua mente funciona assim — e como mudar isso para sempre.",
    subtituloMobile:
      "Sua mente não para, e você já tentou de tudo — meditação, terapia, remédios — sem resultado real, porque o problema não é o sintoma, é a causa. Nesta Imersão de 2 Noites você vai descobrir por que sua mente funciona assim e como mudar isso para sempre.",
    cta: "Garantir minha vaga - R$ 47",
    microtexto: "Vagas limitadas a 150 pessoas.",
    pilulas: [
      { icon: "calendar", label: "2 noites ao vivo" },
      { icon: "monitor", label: "Direto no Zoom" },
      { icon: "users", label: "Vagas limitadas" },
    ],
    imagem: {
      src: apresentador.url,
      width: 1080,
      height: 1920,
      alt: "Apresentador da imersão O Silêncio",
    },
  },
  sections: [
    {
      kind: "problema",
      fundo: "light",
      titulo: "Você não está quebrado. Seu modo de funcionamento está.",
      texto:
        "Você aprendeu a depender da mente para se sentir seguro. Para controlar. Para prever. Para evitar o sofrimento. Resultado? Uma mente que nunca descansa. Que pensa em problemas 24 horas por dia. Que não consegue estar presente. Que rouba sua paz e sua vida. Você tenta relaxar, mas a mente volta. Tenta focar, mas a mente dispersa. Tenta dormir, mas a mente continua acelerada. Porque o problema não é mental. É estrutural.",
    },
    {
      kind: "cardsNumerados",
      fundo: "dark",
      titulo: "Você já tentou muita coisa.\u00a0\nE nada resolveu.",
      cards: [
        "Meditação? Ajuda por um tempo, mas a mente volta.",
        "Terapia? Você entende melhor, mas continua sofrendo.",
        "Remédios? Mascaram o problema, não resolvem.",
        "Coaching? Motivação passa, o padrão continua.",
      ],
      fechamento:
        "Porque todas essas abordagens tratam o sintoma, não a causa. A causa é o seu modo de funcionamento da consciência — como você está estruturado para pensar, reagir e buscar segurança através do controle mental. Enquanto você não mudar esse modo, nada vai resolver de verdade.",
    },
    {
      kind: "listaVermelha",
      fundo: "red",
      titulo: "Em 2 noites, você vai entender:",
      itens: [
        "Por que sua mente não para — a raiz do pensamento excessivo",
        "O medo que está por trás — por que você precisa pensar para se sentir seguro",
        "Como sua mente te afasta da realidade — e por que você não consegue estar presente",
        "Como mudar seu modo de funcionamento — não é meditação, não é terapia, é algo diferente",
        "Como ter paz de verdade — não temporária, mas estrutural",
      ],
      fechamento:
        "Você vai sair do evento com clareza, confiança e ferramentas práticas para viver diferente.",
    },
    {
      kind: "diferencial",
      fundo: "light",
      titulo: "Por que este evento é diferente?",
      texto:
        "Não vamos te dar mais técnicas para controlar a mente. Não vamos te motivar temporariamente. Não vamos te oferecer um remédio. Vamos mudar a forma como você funciona. Vamos mostrar que o problema não é você — é o modo como você aprendeu a estar no mundo. E quando você muda esse modo, tudo muda: sua mente, sua paz, sua vida. Isso é o que ninguém mais oferece. Por isso funciona.",
    },
    {
      kind: "checklist",
      fundo: "dark",
      titulo: "Este evento é para você se:",
      itens: [
        "Sua mente não para de pensar em problemas",
        "Você passa o dia preocupado e sem solução",
        "Você não consegue focar ou se concentrar",
        "Você não consegue estar presente na vida",
        "Você já tentou muita coisa sem resultado real",
        "Você quer paz de verdade, não temporária",
      ],
      fechamento:
        "Não importa sua idade, profissão ou experiência anterior. Se você sofre com mente acelerada e quer mudar, este evento é para você.",
    },
    {
      kind: "comoFunciona",
      fundo: "dark",
      titulo: "Uma Imersão de 2 Noites",
      cards: [
        { icon: "calendar", label: "11 e 12 de agosto, das 19h30 às 21h30" },
        { icon: "monitor", label: "Online e ao vivo, pelo Zoom" },
        { icon: "users", label: "Vagas limitadas a 150 pessoas" },
      ],
      texto:
        "Você vai aprender a verdadeira causa do seu sofrimento mental e como mudar seu modo de funcionamento para ter paz, clareza e presença na vida.",
    },
    {
      kind: "ofertaForm",
      fundo: "dark",
      titulo:
        "Você está cansado de sofrer com mente acelerada?\nVocê está pronto para mudar de verdade?",
      cardOferta: {
        nome: "Imersão O Silêncio — 2 Noites ao Vivo",
        preco: "R$ 47,00",
        inclui: "Acesso às 2 noites ao vivo pelo Zoom",
      },
      cta: "INSCREVER-SE AGORA — R$ 47",
      urgencia: "Vagas limitadas a 150 pessoas. Não deixe para depois.",
    },
    {
      kind: "faq",
      fundo: "dark",
      titulo: "FAQ",
      itens: [
        {
          pergunta: "Quando e onde acontece?",
          resposta:
            "Nos dias 11 e 12 de agosto, das 19h30 às 21h30, ao vivo pelo Zoom. Você recebe o link de acesso após a inscrição.",
        },
        {
          pergunta:
            "Preciso ter experiência com meditação, terapia ou algo do tipo?",
          resposta:
            "Não. A imersão foi feita para qualquer pessoa que sofre com a mente acelerada, independentemente de idade, profissão ou experiência anterior.",
        },
        {
          pergunta: "É ao vivo ou gravado?",
          resposta:
            "É ao vivo, nas duas noites. [DEFINIR: haverá gravação/replay? Ajuste conforme sua política.]",
        },
        {
          pergunta: "Como recebo o acesso?",
          resposta:
            "Após a inscrição e confirmação, você recebe o link do Zoom por e-mail e/ou WhatsApp.",
        },
        {
          pergunta: "Quanto custa?",
          resposta:
            "O ingresso é R$ 47,00 e dá acesso às duas noites ao vivo.",
        },
        {
          pergunta: "Isso substitui terapia ou tratamento médico?",
          resposta:
            "Não. A imersão é um espaço de aprendizado e transformação pessoal e não substitui acompanhamento médico ou psicológico.",
        },
        {
          pergunta: "E se eu não puder participar de uma das noites?",
          resposta: "[DEFINIR conforme sua política.]",
        },
      ],
    },
    {
      kind: "rodape",
      fundo: "dark",
      marca: "O Silêncio",
      cta: "GARANTIR MINHA VAGA — R$ 47",
      links: [
        { label: "Termos de Uso", href: "#termos" },
        { label: "Política de Privacidade", href: "#privacidade" },
      ],
      aviso:
        "Este evento não substitui tratamento médico ou psicológico.",
    },
  ],
  ctaBar: {
    label: "GARANTIR MINHA VAGA — R$ 47",
  },
};
