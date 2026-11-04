import type { SchoolCalendarEntry } from '../types/calendar'

export interface YearMonth {
  year: number
  /** Mês no formato do JavaScript: 0 = janeiro. */
  month: number
}

const MONTHS_LONG = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

const WEEKDAY_SHORT = ['seg', 'ter', 'qua', 'qui', 'sex', 'sáb', 'dom']

function pad(value: number): string {
  return String(value).padStart(2, '0')
}

function isoFromParts(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`
}

function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
}

export function monthFromIso(iso: string): YearMonth {
  const [year, month] = iso.split('-').map(Number)
  return { year, month: month - 1 }
}

export function addMonths({ year, month }: YearMonth, delta: number): YearMonth {
  const date = new Date(Date.UTC(year, month + delta, 1))
  return { year: date.getUTCFullYear(), month: date.getUTCMonth() }
}

export function getMonthLabel({ year, month }: YearMonth): string {
  const label = `${MONTHS_LONG[month]} de ${year}`
  return label.charAt(0).toUpperCase() + label.slice(1)
}

export function getTodayIso(): string {
  return new Date().toISOString().slice(0, 10)
}

/** Dias do mês em células de segunda a domingo; `null` preenche as bordas. */
export function getMonthCells({ year, month }: YearMonth): Array<string | null> {
  const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay()
  const leading = (firstWeekday + 6) % 7
  const total = daysInMonth(year, month)
  const cells: Array<string | null> = Array.from({ length: leading }, () => null)

  for (let day = 1; day <= total; day += 1) {
    cells.push(isoFromParts(year, month, day))
  }

  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

export function getWeekdayLabels(): string[] {
  return WEEKDAY_SHORT
}

export function getMonthRange({ year, month }: YearMonth): { first: string; last: string } {
  return {
    first: isoFromParts(year, month, 1),
    last: isoFromParts(year, month, daysInMonth(year, month)),
  }
}

export function getEntriesForMonth(entries: SchoolCalendarEntry[], period: YearMonth): SchoolCalendarEntry[] {
  const { first, last } = getMonthRange(period)

  return entries.filter((entry) => {
    const end = entry.endDate ?? entry.startDate
    return entry.startDate <= last && end >= first
  })
}

export function getEntriesForDay(entries: SchoolCalendarEntry[], iso: string): SchoolCalendarEntry[] {
  return entries.filter((entry) => entry.startDate <= iso && iso <= (entry.endDate ?? entry.startDate))
}

export function expandEntryDates(entry: SchoolCalendarEntry): string[] {
  const dates: string[] = []
  const end = entry.endDate ?? entry.startDate

  for (
    let cursor = new Date(`${entry.startDate}T00:00:00Z`);
    cursor.toISOString().slice(0, 10) <= end;
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  ) {
    dates.push(cursor.toISOString().slice(0, 10))
  }

  return dates
}
