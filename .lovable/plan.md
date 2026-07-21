## Trocar foto do apresentador no hero

Escopo: apenas substituir o asset usado no hero pela nova imagem enviada (`user-uploads://Design_sem_nome_12.png`).

### Passos
1. Fazer upload da nova imagem via `lovable-assets create --file /mnt/user-uploads/Design_sem_nome_12.png --filename apresentador.png` e sobrescrever `src/assets/apresentador.png.asset.json` com o novo pointer.
2. Deletar o asset antigo (asset_id `de01c4b1-...`) via `lovable-assets delete` para não deixar CDN órfão — feito depois de escrever o novo pointer.
3. Não mexer em `Hero.tsx` nem no `landing.a.ts`: eles já leem `apresentador.url` a partir do JSON, então a troca é transparente. Dimensões (1080x1920) permanecem — a nova foto tem proporção parecida (retrato), então máscara e alinhamento seguem funcionando.

### Fora do escopo
- Ajustes de layout, máscara, glow ou copy do hero.
- Qualquer mudança em mobile ou outras seções.

### Verificação
- Preview desktop `/` mostra a nova foto no hero com o mesmo enquadramento inferior-direito e fade.
