"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Flips `[data-reveal]` elements to "shown" as they scroll into view. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal=""]'));
    const show = (el: HTMLElement) => {
      el.dataset.reveal = "shown";
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
