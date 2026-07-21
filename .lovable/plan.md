## Setup inicial do projeto (landing page / funil)

Executarei apenas o setup técnico da Seção 7 do prompt. Nenhuma página nova, nenhuma fonte, nenhuma dependência.

### 1. Knowledge permanente (memória do projeto)
Gravarei as Seções 1–6 como regras permanentes em `mem://`:
- `mem://index.md` — Core com regras universais curtas (português BR, escopo fechado, performance inegociável, tokens obrigatórios, formulários sempre persistem, ordem sagrada do lead, sem Google Fonts CDN, sem deps sem autorização) + referências para os arquivos detalhados.
- `mem://preferences/postura.md` — Seções 1 e 2 (papel, postura, formato de resposta, regra do PageSpeed externo).
- `mem://constraints/performance.md` — Seção 3 (fontes via @fontsource latin, LCP sem animação, imagens com dimensões, terceiros não-bloqueantes, sem backdrop-blur em sticky).
- `mem://design/sistema.md` — Seção 4 (tokens obrigatórios, mobile-first 390–1440, toque ≥44px, texto ≥16px, semântica, acessibilidade).
- `mem://features/funil-formularios.md` — Seção 5 (persistência obrigatória, ordem salvar→integrar→redirect, variantes A/B idênticas, checkboxes nunca pré-marcados, evento Pixel único, segredos server-side).
- `mem://features/seo-publicacao.md` — Seção 6 (lang pt-BR, meta reais, favicon próprio como pendência até definido, checagem de placeholders antes de publicar).

### 2. Tokens neutros provisórios
`src/styles.css` já usa tokens (oklch) mapeados no `@theme inline`. Ajustarei apenas:
- Trocar os valores atuais por uma paleta neutra provisória (fundo claro quase-branco, texto quase-preto, accent neutro cinza-médio), em oklch.
- Comentar o bloco `:root` com `/* PROVISÓRIO — identidade será definida por prompt */`.
- Manter estrutura de `@theme inline`, `.dark`, `@layer base` intactas (só valores mudam).

### 3. Limpeza da raiz
`src/routes/index.tsx`: substituir o placeholder Lovable por uma página mínima:
```tsx
<main className="min-h-screen flex items-center justify-center bg-background text-foreground">
  <h1 className="text-2xl font-medium">Projeto em construção</h1>
</main>
```
Sem imagem, sem estilos hardcoded, apenas tokens.

### 4. Head global pt-BR
`src/routes/__root.tsx`:
- `<html lang="en">` → `<html lang="pt-BR">` no `RootShell`.
- No `head()`: title `[DEFINIR]`, description `[DEFINIR]`, og:title/og:description `[DEFINIR]`, manter og:type, twitter:card, viewport, charSet. Estrutura pronta para og:url, canonical e og:image quando forem definidos em rotas leaf.

### 5. Não fazer
- Não instalar `@fontsource/*` nem qualquer dependência.
- Não criar novas rotas.
- Não tocar em `src/routeTree.gen.ts`, router, server, lib de erros.

### Entrega
Ao final, resposta no formato da Seção 2: arquivos criados, arquivos alterados (1 linha cada) e pendências (favicon próprio, identidade visual, title/description reais, og:image, tabela de leads).
