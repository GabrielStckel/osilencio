## Ajuste visual da seção "Em 2 noites, você vai entender:"

A seção vermelha (`SectionListaVermelha`) está com escala excessiva em relação ao restante da página: título grande demais, cards individuais com padding generoso e espaçamento vertical que criam muito vazio. O objetivo é deixá-la mais compacta, alinhada ao ritmo visual da página e com melhor aproveitamento de largura no desktop.

### Passos
1. **Reduzir o título** para o mesmo patamar da seção de cards numerados (`text-[clamp(1.5rem,4vw,2rem)] md:text-[clamp(1.5rem,2.6vw,2rem)]`), mantendo `font-display` semibold, `leading-tight` e `text-balance`.
2. **Reorganizar a lista em grid responsivo**: 1 coluna no mobile, 2 colunas no desktop (`grid gap-4 sm:grid-cols-2`), para preencher melhor a largura e reduzir a sensação de vazio.
3. **Compactar os cards**:
   - Reduzir padding para `p-4 md:p-5`.
   - Suavizar borda para `border-white/5` e fundo para `bg-white/[0.03]`.
   - Manter check + numeração, mas em layout mais denso (ícone menor ou numeração alinhada ao título).
4. **Ajustar espaçamentos verticais**: margem entre título e lista para `mt-8 md:mt-10`, e entre lista e fechamento para `mt-8 md:mt-10`, para não alongar a seção.
5. **Preservar** a textura de fundo e a hierarquia tipográfica dos itens (título em negrito + explicação).

### Fora do escopo
- Alterar conteúdo/copy da seção.
- Mudar outras seções da landing.
- Alterar a cor de fundo ou identidade visual.

### Verificação
- Preview desktop mostra a seção vermelha com título menor, cards em 2 colunas e sem vazio excessivo.
- Mobile permanece legível em 1 coluna.