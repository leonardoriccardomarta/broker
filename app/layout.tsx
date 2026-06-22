import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="it" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <footer className="border-t border-slate-200 bg-white py-8">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} {SITE.name} — {SITE.title}
            </p>
            <p className="mt-1">{SITE.tagline}</p>
          </div>
        </footer>
        <StickyMobileCta />
      </body>
    </html>
  );
}
