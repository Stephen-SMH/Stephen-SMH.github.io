import type { Dict } from "@/content";
import { Reveal } from "./Reveal";

export function Hero({ hero, contact }: { hero: Dict["hero"]; contact: Dict["contact"]["direct"] }) {
  const t = hero.terminal;
  const ghost =
    "rounded-full border border-rule px-3 py-2.5 font-mono text-[12px] text-ink-soft transition hover:border-ink-soft hover:text-ink";

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Decorative: masked line grid + two slowly drifting accent orbs (flat fills, blurred). */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0 opacity-[0.35]" />
        <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 animate-drift rounded-full bg-accent/12 blur-[120px]" />
        <div className="absolute -right-24 top-32 h-[26rem] w-[26rem] rounded-full bg-accent/8 blur-[110px]" />
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-7">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-soft-ink">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {hero.available}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[clamp(2.4rem,5.2vw,3.8rem)] font-extrabold leading-[1.06] tracking-[-0.015em] text-ink text-balance">
                {hero.name}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 font-mono text-sm text-accent sm:text-base">
                {hero.role}
                <span className="text-ink-faint"> · </span>
                <span className="text-ink-soft">{hero.focus}</span>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink text-balance">{hero.statement}</p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:opacity-90"
                >
                  {hero.viewWork}
                  <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-rule px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent/40"
                >
                  {hero.downloadCv}
                  <span className="font-mono text-[11px] font-normal text-ink-soft">{hero.cvType}</span>
                </a>
                <div className="flex items-center gap-2 pl-1">
                  <a href={contact.githubUrl} target="_blank" rel="noreferrer noopener" className={ghost}>
                    {contact.githubLabel}
                  </a>
                  <a href={contact.linkedinUrl} target="_blank" rel="noreferrer noopener" className={ghost}>
                    {contact.linkedinLabel}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {hero.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-rule bg-paper-raised px-2.5 py-1 font-mono text-[11px] text-ink-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="card shadow-float">
              <div className="flex items-center gap-2 border-b border-rule px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rule" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-rule" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-rule" aria-hidden="true" />
                <span className="ml-2 font-mono text-[11px] text-ink-faint">{t.file}</span>
              </div>
              <div className="space-y-3 px-5 py-5 font-mono text-[13px]">
                <p className="text-ink-faint">
                  <span className="text-accent">$</span> {t.whoamiCmd}
                </p>
                <p className="text-ink">{t.whoami}</p>
                <p className="pt-2 text-ink-faint">
                  <span className="text-accent">$</span> {t.statsCmd}
                </p>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-4 pt-1">
                  {t.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-2xl font-semibold tracking-tight text-accent">{s.value}</dt>
                      <dd className="mt-1 text-[11px] leading-snug text-ink-soft">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <p className="pt-3 text-ink-faint">
                  <span className="text-accent">$</span> {t.availabilityCmd}
                </p>
                <p className="text-ink-soft">
                  {t.availability}
                  <span
                    className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-accent/80"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
