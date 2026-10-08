import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

/** Mono chip used for technology tags. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-paper-sunken/70 px-3 py-1 font-mono text-[11px] tracking-tight text-ink-soft ring-1 ring-inset ring-rule">
      {children}
    </span>
  );
}

export function TagList({ tags, className = "mt-6" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`${className} flex flex-wrap gap-1.5`}>
      {tags.map((t) => (
        <li key={t}>
          <Tag>{t}</Tag>
        </li>
      ))}
    </ul>
  );
}

/** Flags copy that is still reference-site placeholder text. */
export function PlaceholderPill({ label }: { label: string }) {
  return (
    <span className="shrink-0 rounded-full bg-warning-soft px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-warning-soft-ink ring-1 ring-inset ring-warning/25">
      {label}
    </span>
  );
}

/** Neutral outline badge (e.g. "Internal", "Proposal"). */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint ring-1 ring-inset ring-rule">
      {children}
    </span>
  );
}

/** Page section with macro whitespace. */
export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-10 py-24 sm:py-36">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Large heading; the small label is only passed for a few sections on purpose. */
export function SectionHead({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-14 sm:mb-20">
      {eyebrow && <span className="eyebrow mb-6">{eyebrow}</span>}
      <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1] tracking-tighter text-ink">
        {title}
      </h2>
    </div>
  );
}

/** Sentence-case metadata label. */
export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`font-mono text-[12px] text-ink-faint ${className}`}>{children}</h3>;
}

/** Double-bezel container: outer tray + inner plate. */
export function Bezel({
  children,
  className = "",
  coreClassName = "",
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  coreClassName?: string;
  lift?: boolean;
}) {
  return (
    <div className={`bezel ${lift ? "bezel-lift" : ""} ${className}`}>
      <div className={`bezel-core ${coreClassName}`}>{children}</div>
    </div>
  );
}

/** Icon island used inside buttons. */
export function ArrowIsland() {
  return (
    <span className="btn-icon" aria-hidden="true">
      <ArrowUpRight size={16} weight="light" />
    </span>
  );
}

/**
 * Asymmetric 12-column bento spans. Items are laid out in pairs that always
 * fill a row (7/5, 5/7, 6/6, 4/8, 8/4); an odd last item spans the full row,
 * so there is never an empty cell.
 */
const PAIRS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-8",
  "md:col-span-4",
];

export function bentoSpan(i: number, n: number) {
  if (n % 2 === 1 && i === n - 1) return "md:col-span-12";
  return PAIRS[i % PAIRS.length];
}

/** Rotates plate surfaces so a grid is not 6 identical tiles. */
export function bentoTone(i: number) {
  return ["", "core-accent", "core-grid"][i % 3];
}
