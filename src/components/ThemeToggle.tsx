"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

/**
 * Icon-only toggle. The icon swap is pure CSS (see globals.css) so it is
 * correct before hydration; the click handler reads the DOM as truth.
 */
export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* storage blocked: the theme still applies for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors duration-500 hover:bg-ink/10 hover:text-ink active:scale-95"
    >
      {/* Shows the theme you would switch TO: sun while dark, moon while light. */}
      <Sun size={18} weight="light" className="theme-icon-sun" aria-hidden="true" />
      <Moon size={18} weight="light" className="theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
