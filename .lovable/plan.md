Ajustar alinhamento dos parágrafos listados para justificado **somente no mobile**, preservando o alinhamento atual no desktop.

Escopo:
- Hero.tsx: subtítulo mobile (`subtituloMobile`) → `text-justify md:text-left`.
- SectionProblema.tsx: parágrafo principal → `text-justify md:text-center`.
- SectionCardsNumerados.tsx: texto de fechamento → `text-justify md:text-center`.
- SectionDiferencial.tsx: parágrafo principal → `text-justify md:text-center`.
- SectionChecklist.tsx: texto de fechamento → `text-justify md:text-left`.
- SectionComoFunciona.tsx: parágrafo abaixo dos cards → `text-justify md:text-center`.

Todos os títulos, cards, listas e demais elementos permanecem inalterados. Desktop mantém o alinhamento original de cada bloco.

Validação: build e screenshot mobile da página para confirmar justificação nos textos listados.