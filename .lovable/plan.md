## Objetivo
Padronizar o tamanho de todos os títulos de seção (`h2`) da landing para o mesmo tamanho do `h1` do Hero selecionado.

## Tamanho de referência (Hero h1)
`text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.75rem,3.4vw,2.6rem)]` com `font-display font-semibold leading-[1.08]`.

## Arquivos alterados (só a classe de tamanho/leading do h2, sem mexer em cor, margem ou copy)
- `src/components/landing/SectionProblema.tsx` (linha 10)
- `src/components/landing/SectionCardsNumerados.tsx` (linha 10)
- `src/components/landing/SectionListaVermelha.tsx` (linha 25)
- `src/components/landing/SectionDiferencial.tsx` (linha 10)
- `src/components/landing/SectionChecklist.tsx` (linha 11)
- `src/components/landing/SectionComoFunciona.tsx` (linha 42) — hoje está muito maior (`clamp(2.5rem,7vw,4.5rem)`), vai reduzir para o padrão
- `src/components/landing/SectionFaq.tsx` (linha 14) — hoje está gigante (`clamp(3rem,10vw,6rem)`), vai reduzir para o padrão
- `src/components/landing/SectionOfertaForm.tsx` (linha 147)

Em cada `h2` troco a classe de tamanho por:
`font-display font-semibold leading-[1.08] text-[clamp(1.6rem,6.8vw,2.35rem)] md:text-[clamp(1.75rem,3.4vw,2.6rem)]`
Mantenho `whitespace-pre-line`, `text-balance`, `max-w-*`, `mt-*` e cor onde já existirem.

## Fora do escopo
- Não altero o h1 do Hero.
- Não altero textos, subtítulos, números decorativos, cards, botões ou espaçamentos verticais.
- Não altero o título interno do card de oferta (`h3`) nem títulos pequenos dentro dos mockups.

## Observação
O título do FAQ hoje é um elemento decorativo enorme; após o ajuste ele fica no mesmo porte dos demais. Se preferir manter o FAQ com tratamento gigante atual, me avise antes de eu implementar.
