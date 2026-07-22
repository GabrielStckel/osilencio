Refinamento da seção "Uma Imersão de 2 Noites" — direção "evento ousado" com menos espaço vazio.

## Problema identificado
- Seção atual usa fundo claro com cards brancos, gerando aparência plana e espaços internos grandes.
- Título e cards não comunicam energia de evento ao vivo.
- Há espaço vazio excessivo dentro dos cards e entre eles.

## Solução proposta

### 1. Fundo e atmosfera
- Trocar o fundo da seção de `light` para `dark`.
- Adicionar um glow vermelho sutil por trás do título e uma linha de divisão vermelha horizontal para marcar o início da seção.

### 2. Título
- Aumentar drasticamente: `text-[clamp(2.5rem,7vw,4.5rem)]`, peso `bold`, `text-balance`.
- Adicionar um rótulo curto acima do título: "2 NOITES AO VIVO" em tracking wide, cor vermelha.

### 3. Cards
- Redesenhar para ocupar mais espaço visual e transmitir energia.
- Cada card vira um bloco escuro com borda vermelha fina (`border-red-accent/40`) e um topo vermelho de 3px de altura.
- Reduzir padding interno para `p-5` (`md:p-6`) e espaçamento entre cards para `gap-4`.
- Ícones em círculo vermelho sólido (não apenas contorno) com branco por dentro.
- Número de ordem (01, 02, 03) em destaque grande, alinhado no canto superior direito de cada card.
- Labels dos cards em `font-display` com peso `semibold` e `text-lg`.

### 4. Layout
- Manter grid de 3 colunas no desktop, mas ocupando largura total da seção (`w-full`) sem `max-w-3xl` centralizado artificialmente.
- Texto de fechamento abaixo dos cards mantido, porém mais curto ou removido se redundante com o restante da página.

### 5. Tipografia e cores
- Título: branco.
- Rótulo: vermelho accent.
- Cards: fundo `surface-dark`, texto branco, bordas vermelhas.
- Ícones: fundo vermelho, ícone branco.
- Manter acessibilidade e contraste.

## Arquivos envolvidos
- `src/components/landing/SectionComoFunciona.tsx` — alteração visual da seção.
- `src/content/landing.a.ts` — possível ajuste no texto do campo `texto` para evitar redundância.
- `src/styles.css` — garantir que tokens `red-accent`, `surface-dark` etc. existam (já existem).

## Validação
- Build local via `bun run build` (ou `tsgo` conforme disponível).
- Screenshot desktop da seção para confirmar ausência de espaço vazio e impacto visual.

## Nota
Não altero outros componentes da página. Seção mantém estrutura existente (título, 3 cards, texto de fechamento) — apenas a pele/layout mudam.