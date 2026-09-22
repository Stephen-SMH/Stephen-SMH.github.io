import { notFound } from "next/navigation";
import { getDict, locales, type Locale } from "@/content";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Notes } from "@/components/Notes";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  const l = locale as Locale;
  const dict = getDict(l);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {dict.nav.skip}
      </a>
      <Nav locale={l} brand={dict.brand} nav={dict.nav} />
      <main id="main">
        <Hero hero={dict.hero} contact={dict.contact.direct} />
        <About about={dict.about} />
        <Skills skills={dict.skills} />
        <Experience experience={dict.experience} />
        <Projects projects={dict.projects} />
        <Notes notes={dict.notes} />
        <Contact contact={dict.contact} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
