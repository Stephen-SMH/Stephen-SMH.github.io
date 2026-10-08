import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Bezel, MonoLabel, Section, SectionHead } from "./ui";

export function About({ about }: { about: Dict["about"] }) {
  const spans = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"];
  const tones = ["core-accent", "", "", "core-grid"];

  return (
    <Section id="about">
      <SectionHead eyebrow={about.eyebrow} title={about.title} />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="max-w-[60ch] text-lg leading-[1.75] text-ink sm:text-xl sm:leading-[1.7]">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-6">
            {about.principles.map((pr, i) => (
              <Reveal key={pr.title} delay={(i % 2) * 80} className={spans[i % spans.length]}>
                <Bezel lift className="h-full" coreClassName={`p-6 ${tones[i % tones.length]}`}>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{pr.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{pr.body}</p>
                </Bezel>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <Bezel className="lg:sticky lg:top-24" coreClassName="p-7 sm:p-9">
            <MonoLabel>{about.collabTitle}</MonoLabel>
            <dl className="mt-5 space-y-5">
              {about.collab.map((c) => (
                <div key={c.label}>
                  <dt className="text-[13px] font-medium text-accent">{c.label}</dt>
                  <dd className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{c.value}</dd>
                </div>
              ))}
            </dl>

            <div className="my-8 h-px bg-rule" />
            <MonoLabel>{about.educationTitle}</MonoLabel>
            <ul className="mt-4 space-y-4">
              {about.education.map((e) => (
                <li key={e.school}>
                  <p className="text-[15px] text-ink">{e.school}</p>
                  <p className="text-[14px] text-ink-soft">{e.degree}</p>
                  <p className="mt-1 font-mono text-[12px] text-ink-faint">{e.period}</p>
                </li>
              ))}
            </ul>

            <div className="my-8 h-px bg-rule" />
            <MonoLabel>{about.languagesTitle}</MonoLabel>
            <ul className="mt-4 space-y-2">
              {about.languages.map((l) => (
                <li key={l.name} className="text-[14px] text-ink-soft">
                  <span className="text-ink">{l.name}</span> - {l.level}
                </li>
              ))}
            </ul>

            <div className="my-8 h-px bg-rule" />
            <MonoLabel>{about.awardsTitle}</MonoLabel>
            <ul className="mt-4 space-y-2">
              {about.awards.map((a) => (
                <li key={a} className="text-[14px] text-ink-soft">
                  {a}
                </li>
              ))}
            </ul>

            <div className="my-8 h-px bg-rule" />
            <MonoLabel>{about.activitiesTitle}</MonoLabel>
            <ul className="mt-4 space-y-3">
              {about.activities.map((a) => (
                <li key={a.title} className="text-[14px] leading-relaxed text-ink-soft">
                  <span className="text-ink">{a.title}</span> - {a.body}
                </li>
              ))}
            </ul>
          </Bezel>
        </Reveal>
      </div>
    </Section>
  );
}
