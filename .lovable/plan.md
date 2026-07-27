## Objetivo
Adicionar modal "promoção encerrada" que abre imediatamente ao entrar em `/exclusivoacs` e intercepta qualquer clique em CTA/link/botão da página (inclusive checkout Hotmart), sem tocar em nada compartilhado.

## Arquivos

**Novo:** `src/components/PromoEncerradaModal.tsx`
- Props: `open: boolean`, `onClose: () => void`.
- Não usa lib nova. Implementação com `div` fixa + overlay (mais leve que trazer Dialog do shadcn e evita mexer em `ui/`).
- Overlay preto semi-transparente, sem blur.
- Fecha em: clique no overlay, botão "X", tecla `Esc`.
- Trava scroll do body (`document.body.style.overflow = "hidden"`) e restaura no cleanup.
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, foco inicial no botão principal via `ref`.
- Retorna `null` quando `!open`.
- Fade de 150ms via classe utilitária existente (`animate-in fade-in` do `tw-animate-css` já importado no `styles.css`).
- Elemento raiz do card com `data-promo-modal`.
- Tokens usados (validados em `src/styles.css`): `bg-card`, `text-foreground`, `border-primary/30`, `bg-primary text-primary-foreground` no botão, `font-display` no título, `font-sans` no corpo. Card `max-w-[420px]`, `rounded-xl`, `border`, `p-8`, `mx-4`.
- Botão principal: `w-full`, `uppercase`, `font-semibold`, texto "VER A OFERTA ATUAL"; usa `useNavigate()` do `@tanstack/react-router` → `navigate({ to: "/" })`.
- Link secundário: `<button>` estilizado como link, texto "Continuar vendo esta página", chama `onClose`.

**Alterado:** `src/routes/exclusivoacs.tsx`
- `const [modalOpen, setModalOpen] = useState(true)`.
- Estrutura:
  ```tsx
  <>
    <div onClickCapture={handleCapture}>
      <Landing content={landingContentB} />
    </div>
    <PromoEncerradaModal open={modalOpen} onClose={() => setModalOpen(false)} />
  </>
  ```
- `handleCapture` conforme especificado, com uma diferença no seletor do FAQ (ver abaixo).

## FAQ — seletor
`src/components/landing/SectionFaq.tsx` (compartilhado) NÃO tem `data-faq`. Os botões do acordeão já têm `id="faq-btn-${i}"` estáveis. Uso `el.closest('[id^="faq-btn-"]')` em vez de `[data-faq]`, sem alterar o componente compartilhado.

Handler final:
```ts
const handleCapture = (e: React.MouseEvent) => {
  const el = (e.target as HTMLElement).closest("a, button");
  if (!el) return;
  if (el.closest("[data-promo-modal]")) return;
  if (el.closest('[id^="faq-btn-"]')) return;
  e.preventDefault();
  e.stopPropagation();
  setModalOpen(true);
};
```

## Não será tocado
`/`, `landing.a.ts`, `landing.b.ts`, `Landing.tsx`, nada em `src/components/landing/`, `MetaPixel`, `CHECKOUT_URL`, fontes.

## Verificação
Após implementar: abrir `/exclusivoacs` no preview, confirmar modal aberto no load, testar ESC/overlay/X, clicar em CTA do hero e da seção oferta (deve reabrir o modal, sem navegar pro Hotmart), abrir/fechar um item do FAQ (deve funcionar normal).