import type { ReactNode } from "react";

/** Mono chip used for technology tags. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-rule bg-paper-sunken px-2 py-1 font-mono text-[11px] tracking-tight text-ink">
      {children}
    </span>
  );
}

export function TagList({ tags, className = "mt-5" }: { tags: string[]; className?: string }) {
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

/** Warning-soft pill flagging copy that is still reference-site placeholder text. */
export function PlaceholderPill({ label }: { label: string }) {
  return (
    <span className="shrink-0 rounded-md border border-warning/30 bg-warning-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-warning-soft-ink">
      {label}
    </span>
  );
}

/** Neutral outline pill (e.g. "Internal", "Proposal"). */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-md border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
      {children}
    </span>
  );
}

/** Page section: hairline top border, centred 1180px column. */
export function Section({
  id,
  bordered = true,
  children,
}: {
  id: string;
  bordered?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${bordered ? "border-t border-rule" : ""}`}>
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7">{children}</div>
    </section>
  );
}

/** "02 —— DAILY TOOLKIT" eyebrow + big heading. */
export function SectionHead({ n, eyebrow, title }: { n: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <div className="flex items-center gap-3 font-mono text-xs text-ink-soft">
        <span className="text-accent">{n}</span>
        <span className="h-px w-8 bg-rule" aria-hidden="true" />
        <span className="uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
    </div>
  );
}

/** Mono uppercase metadata label (field labels, sub-headings). */
export function MonoLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h3 className={`font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint ${className}`}>{children}</h3>
  );
}
