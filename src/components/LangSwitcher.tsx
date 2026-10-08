import Link from "next/link";
import { localeMeta, locales, type Locale } from "@/content";

export function LangSwitcher({ current, label }: { current: Locale; label: string }) {
  return (
    <div role="group" aria-label={label} className="flex items-center rounded-full bg-ink/6 p-0.5 font-mono text-[11px]">
      {locales.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={`/${l}`}
            hrefLang={localeMeta[l].htmlLang}
            lang={localeMeta[l].htmlLang}
            aria-label={localeMeta[l].name}
            title={localeMeta[l].name}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2 py-1.5 transition-colors duration-500 sm:px-2.5 ${
              active ? "bg-ink/12 text-ink" : "text-ink-soft hover:text-ink"
            }`}
          >
            {localeMeta[l].label}
          </Link>
        );
      })}
    </div>
  );
}
