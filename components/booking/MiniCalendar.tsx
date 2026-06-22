"use client";

import { useMemo, useState } from "react";
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
  subMonths,
} from "date-fns";
import { parseDateKey } from "@/lib/booking/parse-date";
import { it } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

type MiniCalendarProps = {
  selectedDate: string;
  onSelect: (date: string) => void;
  workingDays: number[];
  daysAhead: number;
};

function buildBookableSet(workingDays: number[], daysAhead: number): Set<string> {
  const set = new Set<string>();
  const today = startOfDay(new Date());

  for (let i = 0; i < daysAhead; i++) {
    const date = addDays(today, i);
    if (!workingDays.includes(getDay(date))) continue;
    set.add(format(date, "yyyy-MM-dd"));
  }

  return set;
}

export function MiniCalendar({
  selectedDate,
  onSelect,
  workingDays,
  daysAhead,
}: MiniCalendarProps) {
  const bookable = useMemo(
    () => buildBookableSet(workingDays, daysAhead),
    [workingDays, daysAhead],
  );

  const [viewMonth, setViewMonth] = useState(() =>
    startOfMonth(selectedDate ? parseDateKey(selectedDate) : new Date()),
  );

  const today = startOfDay(new Date());
  const selected = selectedDate ? parseDateKey(selectedDate) : null;

  const monthStart = startOfMonth(viewMonth);
  const monthEnd = endOfMonth(viewMonth);
  const gridStart = addDays(monthStart, -(getDay(monthStart) + 6) % 7);
  const gridEnd = addDays(monthEnd, (7 - getDay(monthEnd)) % 7);
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  const canGoPrev = isSameMonth(viewMonth, today) || viewMonth > today;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4">
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewMonth((m) => subMonths(m, 1))}
          disabled={!canGoPrev}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-midnight transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Mese precedente"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="text-sm font-semibold capitalize text-midnight">
          {format(viewMonth, "MMMM yyyy", { locale: it })}
        </p>
        <button
          type="button"
          onClick={() => setViewMonth((m) => addMonths(m, 1))}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-midnight transition hover:bg-white"
          aria-label="Mese successivo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="py-1 text-[11px] font-semibold uppercase tracking-wide text-black/40"
          >
            {day}
          </div>
        ))}

        {days.map((day) => {
          const key = format(day, "yyyy-MM-dd");
          const inMonth = isSameMonth(day, viewMonth);
          const available = bookable.has(key);
          const isSelected = selected ? isSameDay(day, selected) : false;
          const isToday = isSameDay(day, today);

          return (
            <button
              key={key}
              type="button"
              disabled={!available}
              onClick={() => onSelect(key)}
              className={[
                "relative mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition",
                !inMonth && "text-black/20",
                inMonth && !available && "cursor-not-allowed text-black/25",
                inMonth &&
                  available &&
                  !isSelected &&
                  "text-midnight hover:bg-primary/10",
                isSelected && "bg-primary text-white shadow-md shadow-primary/25",
                isToday && !isSelected && available && "ring-2 ring-primary/30 ring-offset-1",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {format(day, "d")}
            </button>
          );
        })}
      </div>
    </div>
  );
}
