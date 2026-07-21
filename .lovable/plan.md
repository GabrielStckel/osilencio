## Trocar foto do hero

Escopo: substituir apenas o asset da foto do apresentador no hero. Nada de layout, copy ou estilos.

### Passos
1. Fazer upload de `user-uploads://Design_sem_nome_11.png` como asset CDN via `lovable-assets`, sobrescrevendo `src/assets/apresentador.png.asset.json` (mantém o import atual em `src/content/landing.a.ts` — nenhum código muda).
2. Deletar o asset antigo (`apresentador.png` atual no CDN) via `lovable-assets delete` antes de gerar o novo pointer, para não deixar órfão.

### Fora do escopo
- Ajustes de máscara, altura da coluna, object-position ou qualquer estilo do Hero.
- Alterar dimensões declaradas (1080x1920) — a nova foto tem proporção equivalente.

### Verificação
- Preview desktop `/`: hero exibe a nova foto no mesmo enquadramento, com o mesmo fade inferior já configurado.