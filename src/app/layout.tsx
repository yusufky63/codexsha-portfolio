import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DustField } from "@/components/dust/dust-field";
import { GrainHud } from "@/components/dust/grain-hud";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { DUST_STORAGE_KEY, site, socialLinks, THEME_STORAGE_KEY } from "@/lib/site";
import "./globals.css";

const body = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--ff-body",
  display: "swap"
});

const mono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--ff-mono",
  display: "swap"
});

// Runs before first paint so a stored theme or dust choice never flashes the other state.
const THEME_SCRIPT = `(function(){try{var r=document.documentElement,t=localStorage.getItem('${THEME_STORAGE_KEY}'),d=localStorage.getItem('${DUST_STORAGE_KEY}');if(t==='dark'||t==='light')r.setAttribute('data-theme',t);if(d==='on'||d==='off')r.setAttribute('data-dust',d);}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.role}`,
    template: `%s - ${site.name}`
  },
  description: site.description,
  alternates: { canonical: "/" },
  applicationName: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: `${site.name} - ${site.role}`,
    description: site.description,
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    site: site.xHandle,
    creator: site.xHandle
  }
};

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", name: site.name, url: site.url, description: site.description },
    {
      "@type": "Person",
      name: site.owner,
      alternateName: site.name,
      url: site.url,
      sameAs: socialLinks.map((link) => link.href)
    }
  ]
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e10" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${body.variable} ${mono.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: JSON_LD }} type="application/ld+json" />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <GrainHud />
        <DustField />
      </body>
    </html>
  );
}
