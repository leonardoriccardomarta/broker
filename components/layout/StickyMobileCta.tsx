import { Button } from "@/components/ui/Button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-midnight leading-tight">
          Consulenza gratuita
        </p>
        <Button variant="primary" size="default" className="shrink-0 px-5 py-2.5 text-sm">
          Prenota
        </Button>
      </div>
    </div>
  );
}
