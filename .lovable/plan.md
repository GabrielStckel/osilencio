Objetivo: na versão mobile do hero, reposicionar a foto do especialista para ficar atrás do título e do subtítulo, como uma camada de fundo, sem alterar o layout desktop.

Plano de implementação:
1. Modificar `src/components/landing/Hero.tsx`:
   - Tornar a coluna de imagem posicionada absolutamente apenas no mobile (`absolute inset-0 md:static md:col-span-6`), enviando-a para trás do texto.
   - Elevar a coluna de texto e os elementos do hero para `relative z-10` para ficarem acima da foto.
   - Ajustar a imagem no mobile para `object-cover` / `object-position` que destaque o rosto/especialista atrás do título.
   - Aplicar máscara/gradiente de fade na parte inferior da imagem mobile para que ela se misture com o fundo escuro e não polua o CTA e as pílulas.
   - Manter o layout desktop exatamente como está: imagem lateral, proporcional e com máscara atual.
2. Revisar espaçamentos mobile (padding-top, gaps, margens do texto) para garantir legibilidade e hierarquia sem que a imagem dificulte a leitura.
3. Verificar build e tirar screenshot mobile para confirmar que a foto está atrás do título/subtítulo e o desktop permanece inalterado.

Escopo fechado: apenas reorganização da imagem no mobile dentro do hero; nenhuma mudança de copy, tipos, dados, CTA ou sessões seguintes.