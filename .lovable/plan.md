
# Refazer seção Lista Vermelha (`SectionListaVermelha.tsx`) — desktop

Escopo fechado: apenas a seção vermelha "Em 2 noites, você vai entender:". Sem mexer em conteúdo (`landing.a.ts`), tokens, ou outras seções.

## Diagnóstico do estado atual
- Grid 2 colunas com cards em `bg-white/[0.03]`, numeração `01–05`, ícone check em círculo e split tipográfico no `—`.
- Resultado: cards genéricos, muitos elementos competindo (numeral + check + head/tail), textura de pontos genérica, título isolado no topo.

## Novo layout proposto (desktop-first, mantém mobile)

Estrutura editorial em 2 colunas assimétricas dentro do `max-w-5xl`:

```text
┌───────────────────────┬──────────────────────────────┐
│ eyebrow "O QUE VOCÊ    │ 01 ─ Por que sua mente...   │
│  VAI ENTENDER"         │ 02 ─ O medo que está...     │
│                        │ 03 ─ Como sua mente...      │
│ H2 grande, display     │ 04 ─ Como mudar seu...      │
│ "Em 2 noites,          │ 05 ─ Como ter paz...        │
│  você vai entender:"   │                              │
│                        │ ─────────────────────────    │
│ fechamento em          │                              │
│ parágrafo curto        │                              │
└───────────────────────┴──────────────────────────────┘
```

- Coluna esquerda (`md:col-span-2` de 5): eyebrow curto em uppercase + tracking, H2 em `font-display` maior (sem `text-balance` forçando quebras estranhas), fechamento como parágrafo abaixo do H2 no desktop (no mobile o fechamento fica ao final da lista, como hoje).
- Coluna direita (`md:col-span-3`): lista sem cards de fundo. Cada item é uma linha com:
  - Numeral grande `01–05` em `font-display`, `text-3xl`, cor `text-white/40`, largura fixa para alinhar.
  - Regra horizontal fina `border-t border-white/15` entre itens (linha superior no primeiro item também), dando ritmo editorial.
  - Texto do item em uma linha só (sem split head/tail no `—`): `text-[17px] leading-snug`, `—` mantido inline com `text-white/60` para hierarquizar.
  - Padding vertical generoso (`py-4 md:py-5`) para respiro; sem card, sem check, sem badge.

## Ajustes de estilo
- Fundo: manter `fundo: "red"` do `SectionShell`. Substituir textura de pontos por um gradiente radial muito sutil no canto superior direito (`radial-gradient` em `rgba(0,0,0,0.25)`) para dar profundidade sem ruído.
- Remover `Reveal` item a item (fica pesado com 5 linhas); manter `Reveal` só no bloco de cabeçalho e no bloco da lista.
- Tipografia: H2 `md:text-[clamp(1.9rem,3.4vw,2.6rem)]`, eyebrow `text-xs tracking-[0.2em] uppercase opacity-70`.

## Alterações
- `src/components/landing/SectionListaVermelha.tsx`: reescrever a estrutura interna (mantém a assinatura de `Props` e o `SectionShell`).
- Remover o helper `ItemTexto` (não usado no novo layout).

## Validação
- Build (`bun run build`).
- Screenshot desktop 1280 via Playwright para conferir alinhamento, densidade e legibilidade.
