import type { Dict } from "@/content";

export function Footer({ dict }: { dict: Dict }) {
  const { footer, brand, nav, contact } = dict;
  const link = "transition hover:text-accent";

  return (
    <footer className="border-t border-rule py-12">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-5 sm:px-7 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#main" className="font-mono text-sm text-ink">
            <span className="text-accent">~</span> {brand.name}
          </a>
          <p className="mt-2 max-w-md text-[12.5px] text-ink-faint">
            {footer.built} © {new Date().getFullYear()} {brand.name}. {footer.rights}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] text-ink-soft">
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
          <a href={contact.direct.linkedinUrl} target="_blank" rel="noreferrer noopener" className={link}>
            {footer.linkedin}
          </a>
          <a href={`mailto:${contact.direct.email}`} className={link}>
            {footer.email}
          </a>
        </nav>
      </div>
    </footer>
  );
}
