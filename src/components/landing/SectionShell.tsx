import type { ReactNode } from "react";

type Props = {
  fundo: "dark" | "light" | "red";
  id?: string;
  children: ReactNode;
  className?: string;
};

const BG = {
  dark: "bg-section-dark-bg text-section-dark-fg",
  light: "bg-section-light-bg text-section-light-fg",
  red: "bg-section-red-bg text-section-red-fg",
} as const;

export function SectionShell({ fundo, id, children, className }: Props) {
  return (
    <section
      id={id}
      data-section-bg={fundo}
      className={`relative px-5 py-16 sm:px-8 sm:py-20 md:py-24 ${BG[fundo]} ${className ?? ""}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
