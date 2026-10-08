import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Badge, Bezel, PlaceholderPill, Section, SectionHead, TagList, bentoSpan, bentoTone } from "./ui";

export function Projects({ projects }: { projects: Dict["projects"] }) {
  const n = projects.items.length;
  return (
    <Section id="projects">
      <SectionHead eyebrow={projects.eyebrow} title={projects.title} />

      <div className="grid gap-4 md:grid-cols-12">
        {projects.items.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 80} className={bentoSpan(i, n)}>
            <Bezel lift className="h-full" coreClassName={`flex h-full flex-col p-7 sm:p-9 ${bentoTone(i + 1)}`}>
              <div className="flex items-start justify-between gap-4">
                <p className="text-[13px] leading-snug text-ink-soft">{p.kicker}</p>
                {p.placeholder ? (
                  <PlaceholderPill label={projects.placeholderLabel} />
                ) : (
                  p.badge && <Badge>{p.badge}</Badge>
                )}
              </div>

              <h3 className="mt-6 max-w-[26ch] font-display text-2xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-[1.75rem]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[58ch] text-[14.5px] leading-relaxed text-ink-soft">{p.desc}</p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-6">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-semibold tracking-tight text-accent">{s.value}</dt>
                    <dd className="mt-1 text-[12.5px] leading-snug text-ink-faint">{s.label}</dd>
                  </div>
                ))}
              </dl>

              <TagList tags={p.tags} className="mt-auto pt-7" />
            </Bezel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
