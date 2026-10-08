import { ArrowDown, DownloadSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import type { Dict } from "@/content";
import { Reveal } from "./Reveal";
import { ArrowIsland, Bezel } from "./ui";

export function Hero({ hero, contact }: { hero: Dict["hero"]; contact: Dict["contact"]["direct"] }) {
  const t = hero.terminal;
  const words = hero.name.split(" ");
  const social =
    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] text-ink-soft transition-colors duration-500 hover:text-ink";

  return (
    <>
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-24">
        {/* Ambient depth: masked grid and two slow orbs. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-backdrop absolute inset-0 opacity-60" />
          <div className="absolute -top-48 left-[8%] h-[40rem] w-[40rem] animate-drift rounded-full bg-accent/15 blur-[140px]" />
          <div className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[130px]" />
        </div>

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <Reveal>
                <span className="eyebrow !normal-case !tracking-normal text-accent-soft-ink">
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                  </span>
                  {hero.available}
                </span>
              </Reveal>

              <h1 className="mt-8 font-display text-[clamp(3.25rem,10.5vw,8.75rem)] font-semibold leading-[0.92] tracking-tighter text-ink">
                {words.map((w, i) => (
                  <span key={`${w}-${i}`}>
                    <span className="word-mask">
                      <span style={{ animationDelay: `${120 + i * 110}ms` }}>{w}</span>
                    </span>{" "}
                  </span>
                ))}
              </h1>

              <Reveal delay={420}>
                <p className="mt-8 font-mono text-sm text-accent sm:text-[15px]">
                  {hero.role}
                  <span className="text-ink-faint"> · </span>
                  <span className="text-ink-soft">{hero.focus}</span>
                </p>
                <p className="mt-5 max-w-[34ch] text-xl leading-snug tracking-tight text-ink sm:text-2xl">
                  {hero.statement}
                </p>
              </Reveal>

              <Reveal delay={560}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a href="#projects" className="btn btn-primary">
                    {hero.viewWork}
                    <span className="btn-icon" aria-hidden="true">
                      <ArrowDown size={16} weight="light" />
                    </span>
                  </a>
                  <a href="/cv.pdf" download className="btn btn-ghost">
                    {hero.downloadCv}
                    <span className="btn-icon" aria-hidden="true">
                      <DownloadSimple size={16} weight="light" />
                    </span>
                  </a>
                  <div className="flex items-center sm:ml-2">
                    <a href={contact.githubUrl} target="_blank" rel="noreferrer noopener" className={social}>
                      <GithubLogo size={18} weight="light" aria-hidden="true" />
                      {contact.githubLabel}
                    </a>
                    <a href={contact.linkedinUrl} target="_blank" rel="noreferrer noopener" className={social}>
                      <LinkedinLogo size={18} weight="light" aria-hidden="true" />
                      {contact.linkedinLabel}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <Bezel className="lg:rotate-[1.6deg] lg:hover:rotate-0" coreClassName="core-accent">
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[12px] text-ink-faint">{t.file}</p>
                  <div className="mt-6 space-y-2 font-mono text-[13px]">
                    <p className="text-ink-faint">
                      <span className="text-accent">$</span> {t.whoamiCmd}
                    </p>
                    <p className="text-ink">{t.whoami}</p>
                  </div>
                  <p className="mt-7 font-mono text-[13px] text-ink-faint">
                    <span className="text-accent">$</span> {t.statsCmd}
                  </p>
                  <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-7">
                    {t.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="font-display text-5xl font-semibold tracking-tighter text-ink">{s.value}</dt>
                        <dd className="mt-1.5 text-[12.5px] leading-snug text-ink-soft">{s.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-8 font-mono text-[13px] text-ink-faint">
                    <span className="text-accent">$</span> {t.availabilityCmd}
                  </p>
                  <p className="mt-2 font-mono text-[13px] text-ink-soft">
                    {t.availability}
                    <span
                      className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 animate-blink bg-accent/80"
                      aria-hidden="true"
                    />
                  </p>
                </div>
              </Bezel>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The one marquee on the page: the stack, drifting under the hero. */}
      <div
        className="marquee relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
        aria-label={hero.tags.join(", ")}
      >
        <div className="marquee-track flex w-max" aria-hidden="true">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 gap-3 pr-3">
              {hero.tags.map((tag) => (
                <li
                  key={`${k}-${tag}`}
                  className="rounded-full px-5 py-2.5 font-mono text-[13px] text-ink-soft ring-1 ring-inset ring-rule"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
