## Diagnóstico
Dois bugs em `src/components/landing/CtaBar.tsx` fazem a cor do fundo da barra piscar/errar no desktop:

1. **`rootMargin` invertido.** Está `"0px 0px -85% 0px"`, que reduz o *bottom* em 85% e deixa a zona de interseção nos **15% do topo** da viewport — o oposto de onde a barra fixa está. A barra deveria observar a seção que cruza os **~15% inferiores**.
2. **Estado derivado só do batch atual.** O handler do IntersectionObserver zera `overLight` toda vez que roda, e só marca `true` se uma entry *daquele batch* for light. Quando uma seção dark entra/sai, o batch pode não incluir a light que ainda está intersectando, causando flicker para preto.

No mobile o efeito é mais tolerante porque cada seção ocupa a viewport inteira; no desktop as seções são menores e os batches misturam mais entries, deixando o bug visível.

## Correção
Em `src/components/landing/CtaBar.tsx`:

- Ajustar `rootMargin` para observar a faixa inferior da viewport, ex.: `"-85% 0px 0px 0px"` (com `threshold: 0`).
- Manter um `Map<Element, boolean>` (ou `Set` das seções light atualmente intersectando) fora do callback; a cada callback, atualizar apenas as entries recebidas e derivar `overLight` a partir do estado acumulado (qualquer light presente → `true`).
- Alternativa mais robusta e simples: no handler de scroll, usar `document.elementFromPoint(x, window.innerHeight - barHeight/2)` e ler `closest("[data-section-bg]")?.getAttribute("data-section-bg")`. Elimina o observer e o problema de batch. Escolho essa abordagem se preferir — menos código e sem `rootMargin` inverso; senão fica com o IO corrigido.

## Fora de escopo
- Nenhuma mudança de cor, layout ou comportamento de visibilidade (só corrige a detecção).
- Não mexer em `SectionShell.tsx`, seções ou conteúdo.
