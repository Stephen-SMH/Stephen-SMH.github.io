import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { PlaceholderPill, Section, SectionHead, TagList } from "./ui";

export function Notes({ notes }: { notes: Dict["notes"] }) {
  return (
    <Section id="blog">
      <SectionHead n="05" eyebrow={notes.eyebrow} title={notes.title} />

      <div className="grid gap-4 md:grid-cols-3">
        {notes.items.map((n, i) => (
          <Reveal key={n.title} delay={i * 70} className="relative">
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 font-mono text-[11px] text-ink-faint">
                  <time dateTime={n.iso}>{n.date}</time>
                  <span className="h-1 w-1 rounded-full bg-rule" aria-hidden="true" />
                  <span>{n.read}</span>
                </div>
                {n.placeholder && <PlaceholderPill label={notes.placeholderLabel} />}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">{n.title}</h3>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-soft">{n.desc}</p>
              <TagList tags={n.tags} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
