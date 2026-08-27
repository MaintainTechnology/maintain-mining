import type { Metadata, Viewport } from "next";
import { Albert_Sans, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SmoothScroll } from "@/components/SmoothScroll";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maintain Mining",
    template: "%s · Maintain Mining",
  },
  description:
    "Predictive maintenance and asset intelligence for mining operations: the fleet, the plant and the pit.",
  openGraph: {
    siteName: "Maintain Mining",
    type: "website",
    locale: "en_AU",
  },
};

export const viewport: Viewport = {
  themeColor: "#131416",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albert.variable} ${inter.variable}`}>
      <head>
        {/* Scroll-entrance components render their hidden state server-side, so
            with JavaScript off that state would never be animated away. This
            forces every one of them visible. The hero uses CSS animation instead
            and needs no rescue. */}
        <noscript>
          <style>{`[data-reveal],[data-word]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <SmoothScroll />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
