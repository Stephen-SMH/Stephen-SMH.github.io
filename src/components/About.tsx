import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { MonoLabel, Section, SectionHead } from "./ui";

export function About({ about }: { about: Dict["about"] }) {
  return (
    <Section id="about" bordered={false}>
      <SectionHead n="01" eyebrow={about.eyebrow} title={about.title} />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="text-[15px] leading-[1.85] text-ink">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.principles.map((pr) => (
                <div key={pr.title} className="card p-5">
                  <h3 className="font-mono text-[13px] text-accent">{pr.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{pr.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="card h-full p-6">
            <MonoLabel>{about.collabTitle}</MonoLabel>
            <dl className="mt-5 space-y-5">
              {about.collab.map((c) => (
                <div key={c.label}>
                  <dt className="font-mono text-[12px] text-accent">{c.label}</dt>
                  <dd className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{c.value}</dd>
                </div>
              ))}
            </dl>

            <div className="my-6 h-px bg-rule" />
            <MonoLabel>{about.educationTitle}</MonoLabel>
            <ul className="mt-3 space-y-4">
              {about.education.map((e) => (
                <li key={e.school}>
                  <p className="text-sm text-ink">{e.school}</p>
                  <p className="text-[13px] text-ink-soft">{e.degree}</p>
                  <p className="mt-1 font-mono text-[12px] text-ink-faint">{e.period}</p>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-rule" />
            <MonoLabel>{about.languagesTitle}</MonoLabel>
            <ul className="mt-3 space-y-2">
              {about.languages.map((l) => (
                <li key={l.name} className="text-[13px] text-ink-soft">
                  <span className="text-ink">{l.name}</span> — {l.level}
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-rule" />
            <MonoLabel>{about.awardsTitle}</MonoLabel>
            <ul className="mt-3 space-y-2">
              {about.awards.map((a) => (
                <li key={a} className="text-[13px] text-ink-soft">
                  {a}
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-rule" />
            <MonoLabel>{about.activitiesTitle}</MonoLabel>
            <ul className="mt-3 space-y-3">
              {about.activities.map((a) => (
                <li key={a.title} className="text-[13px] leading-relaxed text-ink-soft">
                  <span className="text-ink">{a.title}</span> — {a.body}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
