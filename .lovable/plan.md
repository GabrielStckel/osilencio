## Objetivo
Aplicar sombra tipográfica nos textos do hero da landing page para melhorar contraste e legibilidade contra o fundo escuro e a imagem do apresentador.

## Alterações planejadas

### 1. Adicionar tokens de sombra no design system
- Criar variáveis CSS em `src/styles.css` para sombra de texto legível sobre fundos escuros:
  - `--text-shadow-hero`: sombra suave e escura para título, subtítulo e texto de apoio.
  - `--text-shadow-hero-strong`: sombra mais intensa para o badge e destaques, se necessário.
- Usar valores semânticos sem hardcoded hex/rgb em componentes — apenas `var(--text-shadow-hero)` e similares.

### 2. Aplicar sombra no `Hero.tsx`
- Adicionar classe/utilitário de estilo nos elementos de texto:
  - `h1` do hero
  - subtítulo mobile (`p` com subtituloMobile)
  - subtítulo desktop (`p` com subtitulo)
  - texto de apoio (`p` com apoio)
- Garantir que a sombra não quebre a hierarquia visual ou aumente a altura das linhas de forma perceptível.

### 3. Verificação
- Rodar build para garantir que não haja erros de compilação.
- Validar visualmente que o texto do hero fica legível tanto no desktop quanto no mobile.

## Escopo
- Apenas `src/styles.css` e `src/components/landing/Hero.tsx` serão alterados.
- Nenhuma outra seção ou componente será afetado.
