import type { SectionRodape as Props } from "@/content/landing.types";
import { CHECKOUT_URL } from "@/lib/config";
import { SectionShell } from "./SectionShell";

export function Footer({ marca, cta, links, aviso, fundo }: Props) {
  return (
    <SectionShell fundo={fundo}>
      <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-10 text-center">
        <span className="font-sans text-2xl font-semibold tracking-wide">{marca}</span>
        <a
          href={CHECKOUT_URL}
          className="inline-flex min-h-[52px] items-center justify-center rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red transition-colors hover:bg-red-primary-hover"
        >
          {cta}
        </a>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs opacity-70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="max-w-xl text-xs opacity-60">{aviso}</p>
      </div>
    </SectionShell>
  );
}
