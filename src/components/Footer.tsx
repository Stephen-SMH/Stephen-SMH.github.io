import type { Dict } from "@/content";

const GAMES_URL = "https://stephen-smh.github.io/game-portfolio/";

export function Footer({ dict }: { dict: Dict }) {
  const { footer, brand, nav, contact } = dict;
  const link = "transition-colors duration-500 hover:text-accent";

  return (
    <footer className="pb-12 pt-8">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="h-px bg-rule" />
        <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#main" className="font-display text-3xl font-semibold tracking-tighter text-ink sm:text-4xl">
              {brand.name}
            </a>
            <p className="mt-3 max-w-md text-[13px] text-ink-faint">
              {footer.built} © {new Date().getFullYear()} {brand.name}. {footer.rights}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
            <a href="#about" className={link}>
              {nav.about}
            </a>
            <a href="#projects" className={link}>
              {nav.projects}
            </a>
            <a href="#blog" className={link}>
              {nav.notes}
            </a>
            <a href={contact.direct.githubUrl} target="_blank" rel="noreferrer noopener" className={link}>
              {footer.github}
            </a>
            <a href={GAMES_URL} target="_blank" rel="noreferrer noopener" className={link}>
              {footer.games}
            </a>
            <a href={contact.direct.linkedinUrl} target="_blank" rel="noreferrer noopener" className={link}>
              {footer.linkedin}
            </a>
            <a href={`mailto:${contact.direct.email}`} className={link}>
              {footer.email}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
