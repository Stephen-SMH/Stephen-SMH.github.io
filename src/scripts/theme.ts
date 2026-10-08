const KEY = "theme";

/**
 * Click handler for [data-theme-toggle] (delegated, so it survives page swaps).
 * The theme change is a circular wipe from the button via the View Transitions
 * API; browsers without it, or visitors who prefer reduced motion, just flip.
 */
export function initThemeToggle() {
  document.addEventListener("click", (e) => {
    const btn = (e.target as Element).closest<HTMLElement>("[data-theme-toggle]");
    if (!btn) return;

    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* storage blocked: the theme still applies for this visit */
      }
    };

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduced) return apply();

    const r = btn.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add("theme-vt");
    const vt = document.startViewTransition(apply);
    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 900, easing: "cubic-bezier(0.32, 0.72, 0, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
    vt.finished.finally(() => root.classList.remove("theme-vt"));
  });
}
