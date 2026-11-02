import Link from "next/link";
import Image from "next/image";
import { PRIVACY_PATH, SITE } from "@/lib/constants";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white pb-28 md:pb-8">
      <SectionContainer className="py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/images/logo/brand-icon.svg"
              alt="Euroansa"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
            />
            <div>
              <p className="text-base font-bold text-white tracking-tight">Euroansa</p>
              <p className="text-[11px] uppercase tracking-wider text-sky-400 font-semibold">Ufficio di Inzago</p>
            </div>
          </Link>

          <div className="text-xs text-slate-400">
            <p>
              <strong className="text-slate-200">Filippo Carriero</strong> &amp; <strong className="text-slate-200">Marco Gorla</strong>
            </p>
            <p className="text-[11px] text-slate-500">Mediatori Creditizi · Inzago (MI)</p>
          </div>
        </div>

        {/* Mandatory OAM Disclaimer */}
        <div className="mt-6 text-xs text-slate-400 leading-relaxed space-y-2">
          <p className="font-medium text-slate-300">
            {SITE.legalLine}
          </p>
          <p className="text-[11px] text-slate-500 max-w-4xl">
            Filippo Carriero e Marco Gorla svolgono l&apos;attività di mediazione creditizia per conto di Euroansa S.p.A., società iscritta all&apos;elenco OAM al n. M191 e soggetta alla vigilanza dell&apos;Organismo degli Agenti e Mediatori. Messaggio pubblicitario con finalità promozionale. Prima della conclusione del contratto, prendere visione delle Informazioni Generali sul Credito Immobiliare e dei Fogli Informativi disponibili presso gli istituti eroganti.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-800/80 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Euroansa — Ufficio di Inzago. Tutti i diritti riservati.</p>
            <Link
              href={PRIVACY_PATH}
              className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors"
            >
              Informativa Privacy
            </Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
