import { Button } from "@/components/ui/Button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-700 leading-tight">
          Prenota consulenza gratuita
        </p>
        <Button variant="accent" size="default" className="shrink-0 text-sm px-4 py-2.5">
          Prenota
        </Button>
      </div>
    </div>
  );
}
