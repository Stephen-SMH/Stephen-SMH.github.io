import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Inter,
  JetBrains_Mono,
  Noto_Sans_Myanmar,
  Noto_Sans_Thai,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "../globals.css";
import { getDict, localeMeta, locales, type Locale } from "@/content";
import { themeScript } from "@/lib/theme-script";
import { RevealObserver } from "@/components/RevealObserver";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
// Glyph fallbacks for the Thai / Burmese locales; not preloaded for English.
const thai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-noto-thai",
  display: "swap",
  preload: false,
});
const myanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500", "600", "800"],
  variable: "--font-noto-myanmar",
  display: "swap",
  preload: false,
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDict(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const fonts = [inter, jetbrains, jakarta, thai, myanmar].map((f) => f.variable).join(" ");

  return (
    // data-theme / class="js" are set by the inline script before hydration.
    <html lang={localeMeta[locale].htmlLang} className={fonts} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
