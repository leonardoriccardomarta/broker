import { ContactActions } from "@/components/ui/ContactActions";
import { Button } from "@/components/ui/Button";
import { BOOKING_HREF } from "@/lib/constants";
import { getContactLinks } from "@/lib/contact";

export function StickyMobileCta() {
  const contact = getContactLinks();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      {contact ? (
        <ContactActions layout="sticky" />
      ) : (
        <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
          <p className="text-xs font-medium leading-tight text-midnight sm:text-sm">
            Consulenza gratuita
          </p>
          <Button
            href={BOOKING_HREF}
            variant="primary"
            size="default"
            className="shrink-0 px-4 py-2 text-xs sm:px-5 sm:text-sm"
          >
            Prenota
          </Button>
        </div>
      )}
    </div>
  );
}
