import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/config";

type Props = { label: string };

export function CtaBar({ label }: Props) {
  const [overLight, setOverLight] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const BAR_OFFSET = 40;

    const update = () => {
      const scrolled = window.scrollY > 320;
      const section = document.getElementById("como-funciona");
      const reachedHide = section
        ? section.getBoundingClientRect().top <= window.innerHeight - BAR_OFFSET
        : false;
      setVisible(scrolled && !reachedHide);

      const y = window.innerHeight - BAR_OFFSET;
      const x = window.innerWidth / 2;
      const el = document.elementFromPoint(x, y) as HTMLElement | null;
      const bgSection = el?.closest<HTMLElement>("[data-section-bg]");
      const bg = bgSection?.getAttribute("data-section-bg");
      setOverLight(bg === "light");
    };
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
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
          href="#oferta"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-cta bg-red-primary px-6 text-sm font-bold uppercase tracking-wide text-on-red transition-colors hover:bg-red-primary-hover sm:w-auto sm:min-w-[360px]"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
