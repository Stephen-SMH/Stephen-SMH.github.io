import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Bezel, Section, SectionHead, TagList, bentoSpan, bentoTone } from "./ui";

export function Skills({ skills }: { skills: Dict["skills"] }) {
  const n = skills.groups.length;
  return (
    <Section id="skills">
      <SectionHead title={skills.title} />
      <div className="grid gap-4 md:grid-cols-12">
        {skills.groups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 2) * 80} className={bentoSpan(i, n)}>
            <Bezel lift className="h-full" coreClassName={`flex h-full flex-col p-7 sm:p-8 ${bentoTone(i)}`}>
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{g.title}</h3>
              <p className="mt-3 max-w-[52ch] text-[14.5px] leading-relaxed text-ink-soft">{g.desc}</p>
              <TagList tags={g.tags} className="mt-auto pt-7" />
            </Bezel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
