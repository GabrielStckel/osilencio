import { useEffect, useState } from "react";
import { CHECKOUT_URL } from "@/lib/config";

type Props = { label: string };

export function CtaBar({ label }: Props) {
  const [overLight, setOverLight] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Aparece após rolar um pouco do hero.
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Detecta seção clara em interseção com a barra (últimos ~80px da viewport).
    const targets = document.querySelectorAll<HTMLElement>("[data-section-bg]");
    const io = new IntersectionObserver(
      (entries) => {
        // Pega a entry com maior interseção na base
        let light = false;
        for (const e of entries) {
          if (e.isIntersecting && e.target.getAttribute("data-section-bg") === "light") {
            light = true;
          }
        }
        setOverLight(light);
      },
      { rootMargin: "0px 0px -85% 0px", threshold: 0 },
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
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
