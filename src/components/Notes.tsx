import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { Bezel, PlaceholderPill, Section, SectionHead, TagList, bentoSpan, bentoTone } from "./ui";

export function Notes({ notes }: { notes: Dict["notes"] }) {
  const n = notes.items.length;
  return (
    <Section id="blog">
      <SectionHead title={notes.title} />

      <div className="grid gap-4 md:grid-cols-12">
        {notes.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className={bentoSpan(i, n)}>
            <Bezel lift className="h-full" coreClassName={`flex h-full flex-col p-7 sm:p-9 ${bentoTone(i)}`}>
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[12px] text-ink-faint">
                  <time dateTime={item.iso}>{item.date}</time> / {item.read}
                </p>
                {item.placeholder && <PlaceholderPill label={notes.placeholderLabel} />}
              </div>
              <h3 className="mt-6 max-w-[28ch] font-display text-2xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{item.desc}</p>
              <TagList tags={item.tags} />
            </Bezel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
