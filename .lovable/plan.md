## Ajuste textual na seção de oferta

### Objetivo
Reorganizar os títulos da seção `#inscricao` (`SectionOfertaForm`) e reduzir o tamanho tipográfico dos dois textos.

### Estado atual
A seção de oferta possui um único campo `titulo` com duas frases em sequência:

```text
Você está cansado de sofrer com mente acelerada?
Você está pronto para mudar de verdade?
```

Esse texto é exibido no topo da seção, acima do mockup de dispositivos e do card de oferta.

### Mudanças propostas

1. **Separar o conteúdo no data source**
   - Manter `titulo` como `"Você está cansado de sofrer com mente acelerada?"`.
   - Adicionar novo campo `subtitulo` no tipo `SectionOfertaForm` (`src/content/landing.types.ts`) e no conteúdo de `Variante A` (`src/content/landing.a.ts`) com o valor `"Você está pronto para mudar de verdade?"`.

2. **Reorganizar a renderização**
   - Em `src/components/landing/SectionOfertaForm.tsx`, manter o `titulo` no topo da seção.
   - Renderizar o `subtitulo` dentro do card de oferta, logo acima do botão de CTA (`INSCREVER-SE AGORA — R$ 47`) e abaixo da lista de itens inclusos.

3. **Reduzir tamanho tipográfico**
   - Diminuir o tamanho do `titulo` no topo da seção.
   - Aplicar tamanho proporcionalmente menor ao `subtitulo` dentro do card, mantendo hierarquia visual e legibilidade.

### Arquivos alterados
- `src/content/landing.types.ts` — adicionar `subtitulo?: string` em `SectionOfertaForm`.
- `src/content/landing.a.ts` — separar o texto em `titulo` e `subtitulo` na seção `ofertaForm`.
- `src/components/landing/SectionOfertaForm.tsx` — ajustar posição e tamanho dos textos.

### Escopo
Apenas a seção de oferta da página `/` (Variante A). Nenhuma outra seção ou rota será modificada.