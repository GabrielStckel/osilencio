## Hero desktop — rebalancear e finalizar corte

Escopo: apenas `src/components/landing/Hero.tsx` (desktop `md+`). Mobile permanece igual.

### Problemas atuais
1. Coluna direita usa `md:mr-[calc(50%-50vw)]` — empurra a foto para fora do container, gerando "peso" no canto direito e desalinhamento com a grid.
2. Padding-top de 7rem (`md:pt-28`) + `items-end` deixa o topo do texto (badge) com muito ar até o H1.
3. Máscara da imagem termina em `transparent 100%` mas o `object-bottom` cola a base da foto no fim do container `h-[82vh]` — em telas mais baixas a transição visível fica curta e o corte aparece.
4. Sem hierarquia forte: badge, H1, parágrafos e CTA têm ritmo parecido.

### Mudanças propostas (desktop)

Coluna imagem
- Remover `md:mr-[calc(50%-50vw)]` — imagem passa a respeitar a grid do container (max-w-6xl).
- Trocar `md:object-bottom` por `md:object-[right_bottom]` e ancorar no canto inferior-direito da coluna, sem sangrar para fora.
- Aumentar zona de fade: máscara `linear-gradient(to bottom, black 0%, black 45%, transparent 92%)` + altura da coluna `md:h-[78vh]` com `pb-0` na section, garantindo que a foto sempre termine em transparência real antes de encostar na próxima seção.
- Glow radial reposicionado para acompanhar (centro da coluna direita, não off-screen).

Coluna texto
- Trocar `items-end` por `items-center` no grid — alinha verticalmente texto e imagem, elimina o vão superior.
- Reduzir `md:pt-28` para `md:pt-20` e remover `md:pb-16` do texto (deixar o grid controlar).
- Compactar espaçamentos: `mt-5→mt-4` (H1), `mt-4→mt-3` (parágrafos), `mt-7→mt-6` (CTA), `mt-8→mt-5` (pílulas) no desktop.
- Aumentar peso do H1 desktop de `clamp(1.5rem,3.2vw,2.35rem)` para `clamp(1.75rem,3.4vw,2.6rem)` mantendo 3 linhas (foi pedido para o hero ficar mais impactante).
- CTA ganha `md:min-h-[56px]` e `md:text-[15px]` para virar âncora visual mais forte.

### Fora do escopo
- Trocar a foto, mexer em copy, alterar tokens de cor ou tocar em mobile.

### Verificação
- Preview desktop 1102px: badge → H1 sem vão; foto termina com fade suave, sem linha reta; imagem contida na grid.
