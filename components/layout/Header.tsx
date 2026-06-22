"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { BOOKING_HREF, NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/95 py-3 shadow-soft backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <SectionContainer className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/icon.svg"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <div>
            <p className="text-base font-semibold text-midnight sm:text-lg">
              {SITE.name}
            </p>
            <p className="text-xs text-black/50">{SITE.title}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={BOOKING_HREF} variant="primary" className="hidden lg:inline-flex">
          Prenota consulenza
        </Button>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-6 bg-midnight" />
          <span className="block h-0.5 w-6 bg-midnight" />
          <span className="block h-0.5 w-6 bg-midnight" />
        </button>
      </SectionContainer>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-midnight"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              href={BOOKING_HREF}
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Prenota consulenza
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
