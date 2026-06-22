import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div>
          <p className="text-lg font-bold text-slate-900">{SITE.name}</p>
          <p className="text-xs text-slate-500">{SITE.title}</p>
        </div>
        <Button variant="accent" className="hidden md:inline-flex">
          Prenota consulenza
        </Button>
      </div>
    </header>
  );
}
