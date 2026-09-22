import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHead, TagList } from "./ui";

export function Experience({ experience }: { experience: Dict["experience"] }) {
  return (
    <Section id="experience">
      <SectionHead n="03" eyebrow={experience.eyebrow} title={experience.title} />

      <ol className="relative space-y-12 border-l border-rule pl-6 sm:pl-10">
        {experience.items.map((job, i) => (
          <Reveal as="li" key={`${job.org}-${job.period}`} delay={i === 0 ? 0 : 80} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[27px] top-1.5 flex h-3 w-3 items-center justify-center sm:-left-[43px]"
            >
              <span className="h-3 w-3 rounded-full border border-accent/60 bg-paper" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-accent" />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-ink">
                {job.role}
                <span className="text-ink-faint"> @ </span>
                <span className="text-accent">{job.org}</span>
              </h3>
              <p className="font-mono text-[12px] text-ink-soft">
                {[job.period, job.place].filter(Boolean).join(" · ")}
              </p>
            </div>

            {job.kind && (
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">{job.kind}</p>
            )}
            <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-ink">{job.summary}</p>

            <ul className="mt-5 space-y-3">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[13.5px] leading-[1.75] text-ink-soft">
                  <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <TagList tags={job.tags} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
