## Escopo
Adicionar `ReservationProgress` (variante compacta) no card de OFERTA, ajustar copy de urgência e corrigir mobile do bloco (card + mockup). Sem tocar em Hero, tokens, lógica de datas ou desktop.

## Arquivos a alterar

**1. `src/components/ReservationProgress.tsx`**
- Adicionar prop `variant?: "default" | "compact"` (default = comportamento atual, inalterado).
- Em `"compact"`:
  - trilha `h-2` (em vez de `h-2.5`);
  - label superior `text-[11px]`, número `text-xs`;
  - omitir o parágrafo inferior "Restam apenas…";
  - wrapper sem margem própria (`mt-0`), espaçamento fica no container.
- Mesma lógica de cálculo/estado — só muda a apresentação. Uso atual no Hero permanece idêntico.

**2. `src/components/landing/SectionOfertaForm.tsx`**
- Importar `ReservationProgress`.
- Inserir `<div className="mt-5 mb-5"><ReservationProgress variant="compact" /></div>` entre o `<a>` do CTA e o bloco `<div className="mt-5 … border-t …">` da urgência (mesmo container do card → mesma largura do CTA, sem `max-w` extra).
- Card mobile:
  - `article`: padding `p-6 sm:p-7 md:p-8` (hoje `p-7 sm:p-8`);
  - CTA: `min-h-[56px] text-[13px] md:text-sm py-4 px-4 text-center` mantendo `w-full`;
  - `h3` do card: `text-[clamp(1.25rem,5.5vw,1.75rem)] leading-tight text-balance` (substitui `text-2xl`);
  - `Preco`: adicionar `flex items-baseline justify-center flex-nowrap` no wrapper para não estourar em 375px.
- Mockup mobile: o `DeviceMockups` já vive em coluna acima do card no md:grid-cols-2. Verificar se algum absolute/overflow no interior está vazando; ajustar o wrapper para `w-full h-auto overflow-visible` e garantir que o celular sobreposto (`right-[-4%]`) não cause scroll horizontal em <375px — trocar por `right-0 sm:right-[-6%]` no mobile e reduzir `w-[42%]` para caber. Desktop (md:) preservado 100%.
- Zero mudança na grid `md:grid-cols-2`.

**3. `src/content/landing.a.ts`**
- Trocar `urgencia` de "Vagas limitadas. Não deixe para depois." para "Vagas limitadas · Inscrições encerram em 10 de agosto." (mesmo campo, mesmo estilo já renderizado).

## Validação
- Build.
- Preview 375px: barra dentro do card, `w-full` = largura do CTA, percentual idêntico ao Hero, sem scroll horizontal, mockup sem corte, CTA sem estourar.
- Desktop: apenas a barra nova aparece; resto inalterado.
