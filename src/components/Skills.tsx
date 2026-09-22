import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Section, SectionHead, TagList } from "./ui";

export function Skills({ skills }: { skills: Dict["skills"] }) {
  return (
    <Section id="skills">
      <SectionHead n="02" eyebrow={skills.eyebrow} title={skills.title} />
      <div className="grid gap-4 md:grid-cols-2">
        {skills.groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 70}>
            <div className="card card-hover h-full p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold text-ink">{g.title}</h3>
                <span className="font-mono text-[11px] text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{g.desc}</p>
              <TagList tags={g.tags} className="mt-4" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
