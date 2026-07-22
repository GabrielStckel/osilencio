import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/config";

type Props = { label: string };

export function CtaBar({ label }: Props) {
  const [overLight, setOverLight] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Detecta a seção que cruza a faixa da barra (últimos ~80px da viewport)
    // usando elementFromPoint — evita bugs de batch do IntersectionObserver.
    const BAR_OFFSET = 40; // metade da altura aproximada da barra
    const detect = () => {
      const y = window.innerHeight - BAR_OFFSET;
      const x = window.innerWidth / 2;
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      const section = el?.closest<HTMLElement>("[data-section-bg]");
      const bg = section?.getAttribute("data-section-bg");
      setOverLight(bg === "light");
    };
    detect();

    const onFrame = () => {
      detect();
    };
    window.addEventListener("scroll", onFrame, { passive: true });
    window.addEventListener("resize", onFrame);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onFrame);
      window.removeEventListener("resize", onFrame);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t transition-opacity duration-200 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      } ${
        overLight
          ? "border-black/10 bg-white/95 text-section-light-fg"
          : "border-white/10 bg-black text-section-dark-fg"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-3 sm:px-8">
        <a
          href={CHECKOUT_URL}
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red transition-colors hover:bg-red-primary-hover sm:w-auto sm:min-w-[360px]"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
