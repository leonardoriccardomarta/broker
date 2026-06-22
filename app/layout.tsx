import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { SITE } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mediatore Creditizio | Consulenza Gratuita",
  description:
    "Ottieni il miglior finanziamento per le tue esigenze. Mutui, prestiti, cessione del quinto. Consulenza gratuita e senza impegno.",
  keywords: [
    "mediatore creditizio",
    "mutui",
    "prestiti personali",
    "cessione del quinto",
    "consolidamento debiti",
    "consulenza finanziaria",
  ],
  openGraph: {
    title: "Mediatore Creditizio | Consulenza Gratuita",
    description:
      "Ottieni il miglior finanziamento per le tue esigenze. Consulenza gratuita, veloce e senza impegno.",
    type: "website",
    locale: "it_IT",
    siteName: SITE.title,
  },
  robots: {
    index: true,
    follow: true,
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
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
