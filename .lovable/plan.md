Problema: os textos em `font-display` (Playfair Display), especialmente o card "11 e 12 de agosto, das 19h30 às 21h30" e textos similares em cards/labels, estão com legibilidade ruim.

Diagnóstico confirmado: `SectionComoFunciona.tsx` aplica `font-display` no label dos cards (linha 72). Outros textos de interface — preço, nome do produto, marca no topo, números decorativos — também usam Playfair Display, o que reduz a legibilidade em tamanhos pequenos/médios.

Plano de ajuste:
1. Manter Playfair Display apenas onde ele tem impacto editorial: H1 do hero e títulos de seção (H2).
2. Converter para Inter (`font-sans`) todos os textos funcionais/cards:
   - Labels dos cards de "Como Funciona" (data, online, vagas).
   - Nome do produto e preço no card de oferta.
   - Marca no topo e no rodapé.
   - Textos de apoio, parágrafos e listas que já estão em Inter permanecem inalterados.
3. Ajustar peso/tamanho dos cards convertidos para manter hierarquia sem perder a leitura (ex.: `font-semibold` ou `font-bold` com `tracking-wide` leve).
4. Verificar build e preview visual.

Escopo fechado: somente troca de fonte desses textos; nenhuma alteração de layout, cores, imagem ou funcionalidade.