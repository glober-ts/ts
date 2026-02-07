import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${playfair.variable} ${notoSansJp.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <style>{`
          :root {
            --font-serif: ${playfair.style.fontFamily};
            --font-sans: ${notoSansJp.style.fontFamily};
            --color-base: ${siteConfig.theme.base};
            --color-text: ${siteConfig.theme.text};
            --color-accent: ${siteConfig.theme.accent};
            --color-muted: ${siteConfig.theme.muted};
            --color-border: ${siteConfig.theme.border};
          }
        `}</style>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
