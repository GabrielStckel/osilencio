## Objetivo
Reduzir o LCP mobile (10,5s → alvo <2,5s) otimizando a imagem do apresentador no hero, sem mudar o visual.

## Diagnóstico
- `apresentador.png`: 1080×1920, ~1,5 MB, servido via CDN (`.asset.json`).
- Exibido em ~520px CSS mobile / desktop com máscara.
- Só existe a rota `/` (não há `/1`). Aplicar apenas em `Hero.tsx` (componente único).
- `vite-imagetools` não serve aqui: o binário está no CDN, não no bundle. Gerar variantes localmente com `sharp` e subir via `lovable-assets`.

## Passos

1. **Gerar variantes otimizadas** (script local, uso único):
   - Baixar o PNG original do CDN.
   - Com `sharp`, gerar:
     - `apresentador-540.avif` (540w, quality ~55)
     - `apresentador-1080.avif` (1080w, quality ~55)
     - `apresentador-540.webp` (540w, quality ~72)
     - `apresentador-1080.webp` (1080w, quality ~72)
   - Fazer upload de cada uma via `lovable-assets create` e salvar `.asset.json` em `src/assets/`.
   - Manter o `.asset.json` do PNG original como fallback.

2. **Trocar `<img>` por `<picture>` em `src/components/landing/Hero.tsx`** (mobile e desktop):
   - Importar os 4 `.asset.json` novos + o PNG existente.
   - Estrutura:
     ```jsx
     <picture>
       <source type="image/avif" srcSet={`${av540} 540w, ${av1080} 1080w`} sizes="(max-width: 768px) 90vw, 520px" />
       <source type="image/webp" srcSet={`${wp540} 540w, ${wp1080} 1080w`} sizes="(max-width: 768px) 90vw, 520px" />
       <img src={png} width={1080} height={1920} alt=... loading="eager" fetchpriority="high" decoding="async" className=... style=... />
     </picture>
     ```
   - **Preservar exatamente**: classes, máscaras `WebkitMaskImage`/`maskImage`, posicionamento absoluto, `width`/`height`, `loading="eager"`, `fetchpriority="high"`, `decoding="async"`, sem animação.
   - Aplicar em ambos os blocos (mobile e desktop). Para o clone desktop com blur (sombra), manter o PNG puro (não precisa de `<picture>` — é decorativo e já borrado).

3. **Atualizar preload em `src/routes/__root.tsx`**:
   - Trocar (ou adicionar) o preload da imagem LCP para a variante AVIF 1080w com `imageSrcSet`/`imageSizes` casando o `<picture>`. Isso é o que efetivamente derruba o LCP.
   - `{ rel: "preload", as: "image", href: av1080, type: "image/avif", imageSrcset: "...540w, ...1080w", imagesizes: "(max-width: 768px) 90vw, 520px", fetchpriority: "high" }`

4. **CSS bloqueante**: não mexer nesta rodada — risco de FOUC/layout. Priorizar a imagem, como o próprio pedido autoriza.

5. **Validação**:
   - `bun run build` verde.
   - Confirmar no DOM (via preview) que a `<img>` real usa AVIF/WebP conforme o navegador.
   - Rodar PageSpeed Insights no domínio de produção após publicar.

## Detalhes técnicos
- Não instalar `vite-imagetools` (não resolve URLs de CDN e adiciona peso ao build).
- `sharp` roda só localmente no sandbox para gerar os arquivos; não vai para dependências do projeto.
- Alvos de tamanho esperados: AVIF 1080 ≈ 60–90 KB, WebP 1080 ≈ 90–130 KB, versus PNG 1,5 MB (~15–20× menor).

## Arquivos afetados
- Novos: `src/assets/apresentador-540.avif.asset.json`, `apresentador-1080.avif.asset.json`, `apresentador-540.webp.asset.json`, `apresentador-1080.webp.asset.json`.
- Editados: `src/components/landing/Hero.tsx`, `src/routes/__root.tsx`.
- Sem mudanças em copy, tokens, layout ou outros componentes.

## Nota
Você mencionou aplicar também na rota `/1`, mas ela não existe no projeto (só `/`). Se quiser criar uma variante B em rota separada, me avisa em outro pedido.

## Lembrete final
Depois do deploy, rodar o PageSpeed Insights no domínio de produção pra confirmar o LCP.