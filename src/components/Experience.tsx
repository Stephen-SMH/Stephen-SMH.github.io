import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHead, TagList } from "./ui";

export function Experience({ experience }: { experience: Dict["experience"] }) {
  return (
    <Section id="experience">
      <SectionHead title={experience.title} />

      <ol>
        {experience.items.map((job, i) => (
          <Reveal
            as="li"
            key={`${job.org}-${job.period}`}
            className={`grid gap-6 py-12 md:grid-cols-[0.34fr_0.66fr] md:gap-12 ${i === 0 ? "" : "border-t border-rule"}`}
          >
            <div className="md:sticky md:top-28 md:self-start">
              <p className="font-mono text-[13px] text-accent">{job.period}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
                {job.org}
              </h3>
              {(job.place || job.kind) && (
                <p className="mt-2 text-[13.5px] leading-snug text-ink-soft">
                  {[job.place, job.kind].filter(Boolean).join(", ")}
                </p>
              )}
            </div>

            <div>
              <h4 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{job.role}</h4>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.75] text-ink">{job.summary}</p>
              <ul className="mt-6 space-y-3.5">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-4 text-[14.5px] leading-[1.75] text-ink-soft">
                    <span aria-hidden="true" className="mt-[0.8em] h-px w-4 shrink-0 bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <TagList tags={job.tags} />
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
