import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { Analytics } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Consulente Creditizio Mutui | Bergamo e Milano",
  description:
    "Consulente creditizio per mutui in Lombardia, provincia di Bergamo e Milano. Confronto tra istituti convenzionati. Prima consulenza gratuita.",
  keywords: [
    "mutui Bergamo",
    "mutui Milano",
    "consulente creditizio",
    "mutuo prima casa",
    "surroga mutuo",
    "Lombardia",
    "prestiti personali",
    "cessione del quinto",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Consulente Creditizio Mutui | Bergamo e Milano",
    description:
      "Trova il mutuo più adatto al tuo profilo in Lombardia. Consulenza gratuita in provincia di Bergamo e Milano.",
    type: "website",
    locale: "it_IT",
    siteName: SITE.title,
    url: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo/brand-icon.svg",
    apple: "/images/logo/brand-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Analytics />
        <JsonLd />
        <Header />
        <main className="pb-32 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
