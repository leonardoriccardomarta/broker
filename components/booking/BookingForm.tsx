"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { addDays, format, parseISO } from "date-fns";
import { it } from "date-fns/locale";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  Phone,
  User,
} from "lucide-react";
import { MiniCalendar } from "@/components/booking/MiniCalendar";
import { Button } from "@/components/ui/Button";
import { clientBookingConfig as defaults } from "@/lib/booking/client-config";

type Slot = {
  start: string;
  end: string;
  label: string;
};

type Step = "datetime" | "details" | "success";

type BookingUiConfig = {
  slotDurationMinutes: number;
  daysAhead: number;
  workingDays: number[];
};

function buildDateOptions(config: BookingUiConfig): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = [];
  const today = new Date();

  for (let i = 0; i < config.daysAhead; i++) {
    const date = addDays(today, i);
    const day = date.getDay();
    if (!config.workingDays.includes(day)) continue;

    const value = format(date, "yyyy-MM-dd");
    options.push({
      value,
      label: format(date, "EEE d MMM", { locale: it }),
    });
  }

  return options;
}

export function BookingForm() {
  const [uiConfig, setUiConfig] = useState<BookingUiConfig>(defaults);
  const dateOptions = useMemo(() => buildDateOptions(uiConfig), [uiConfig]);
  const [step, setStep] = useState<Step>("datetime");
  const [date, setDate] = useState<string | null>(null);
  const selectedDate = date ?? dateOptions[0]?.value ?? "";
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const selectedDateLabel = selectedDate
    ? format(parseISO(selectedDate), "EEEE d MMMM", { locale: it })
    : "";

  const loadSlots = useCallback(async (nextDate: string) => {
    if (!nextDate) return;

    setLoadingSlots(true);
    setError(null);
    setSelectedSlot(null);

    try {
      const res = await fetch(`/api/slots?date=${nextDate}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Errore nel caricamento");
      }

      setSlots(data.slots ?? []);
    } catch (err) {
      setSlots([]);
      setError(
        err instanceof Error ? err.message : "Impossibile caricare le fasce.",
      );
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    fetch("/api/booking-config")
      .then((res) => res.json())
      .then((data: BookingUiConfig) => setUiConfig(data))
      .catch(() => setUiConfig(defaults));
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch slots for selected day
    void loadSlots(selectedDate);
  }, [selectedDate, loadSlots]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          start: selectedSlot.start,
          name,
          email,
          phone,
          note,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Prenotazione non riuscita");
      }

      setStep("success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Prenotazione non riuscita.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "success" && selectedSlot) {
    const when = format(parseISO(selectedSlot.start), "EEEE d MMMM 'alle' HH:mm", {
      locale: it,
    });

    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-feature md:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-light text-accent">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-midnight">
          Prenotazione confermata
        </h3>
        <p className="mt-3 text-black/65">
          Appuntamento fissato per{" "}
          <span className="font-medium text-midnight">{when}</span>.
        </p>
        <p className="mt-2 text-sm text-black/50">
          Ti contatterò all&apos;orario scelto. A presto!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-feature md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Calendar className="h-5 w-5" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-midnight">Prenota consulenza gratuita</p>
          <p className="text-sm text-black/55">
            Scegli giorno e orario ({uiConfig.slotDurationMinutes} min)
          </p>
        </div>
      </div>

      {step === "datetime" && (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium text-midnight">Scegli il giorno</p>
              <MiniCalendar
                selectedDate={selectedDate}
                onSelect={setDate}
                workingDays={uiConfig.workingDays}
                daysAhead={uiConfig.daysAhead}
              />
            </div>

            <div>
              <p className="mb-1 text-sm font-medium text-midnight">Orari disponibili</p>
              {selectedDateLabel && (
                <p className="mb-3 text-sm capitalize text-black/50">
                  {selectedDateLabel}
                </p>
              )}

              {loadingSlots ? (
                <div className="flex min-h-[220px] items-center justify-center gap-2 rounded-2xl bg-slate-50 text-black/50">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Caricamento orari...
                </div>
              ) : slots.length === 0 ? (
                <div className="flex min-h-[220px] items-center justify-center rounded-2xl bg-slate-50 px-4 text-center text-sm text-black/55">
                  Nessun orario disponibile per questo giorno.
                </div>
              ) : (
                <div className="grid max-h-[280px] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3">
                  {slots.map((slot) => {
                    const active = selectedSlot?.start === slot.start;
                    return (
                      <button
                        key={slot.start}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`flex items-center justify-center gap-1.5 rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                          active
                            ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                            : "border-slate-200 bg-white text-midnight hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        <Clock className={`h-3.5 w-3.5 ${active ? "text-white" : "text-primary"}`} />
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <Button
            type="button"
            variant="primary"
            className="w-full"
            disabled={!selectedSlot}
            onClick={() => setStep("details")}
          >
            Continua
          </Button>
        </div>
      )}

      {step === "details" && selectedSlot && (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <p className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-black/65">
            {format(parseISO(selectedSlot.start), "EEEE d MMMM 'alle' HH:mm", {
              locale: it,
            })}
          </p>

          <div>
            <label
              htmlFor="name"
              className="mb-1.5 flex items-center gap-2 text-sm font-medium text-midnight"
            >
              <User className="h-4 w-4" />
              Nome e cognome
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Mario Rossi"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-midnight">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="mario@email.it"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 flex items-center gap-2 text-sm font-medium text-midnight"
            >
              <Phone className="h-4 w-4" />
              Telefono
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="333 1234567"
            />
          </div>

          <div>
            <label htmlFor="note" className="mb-1.5 block text-sm font-medium text-midnight">
              Di cosa hai bisogno? (opzionale)
            </label>
            <textarea
              id="note"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Es. mutuo prima casa, prestito personale, consolidamento..."
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => setStep("datetime")}
            >
              Indietro
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="w-full flex-1"
              disabled={submitting}
            >
              {submitting ? (
                <span className="inline-flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Prenotazione...
                </span>
              ) : (
                "Conferma prenotazione"
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
