import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Badge, PlaceholderPill, Section, SectionHead, TagList } from "./ui";

export function Projects({ projects }: { projects: Dict["projects"] }) {
  return (
    <Section id="projects">
      <SectionHead n="04" eyebrow={projects.eyebrow} title={projects.title} />

      <div className="grid gap-4 md:grid-cols-2">
        {projects.items.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 70} className="relative">
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{p.kicker}</p>
                {p.placeholder ? (
                  <PlaceholderPill label={projects.placeholderLabel} />
                ) : (
                  p.badge && <Badge>{p.badge}</Badge>
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">{p.desc}</p>

              <dl className="mt-5 grid grid-cols-2 gap-3">
                {p.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-rule bg-paper p-3">
                    <dt className="font-mono text-base text-accent">{s.value}</dt>
                    <dd className="mt-0.5 text-[11px] leading-snug text-ink-faint">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <TagList tags={p.tags} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
