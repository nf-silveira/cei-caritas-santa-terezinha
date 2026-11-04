import { schoolCalendarData } from '../data/schoolCalendar'
import type { SchoolCalendarEntry } from '../types/calendar'

export function getCalendarEntries(): SchoolCalendarEntry[] {
  return [...schoolCalendarData].sort((a, b) => a.startDate.localeCompare(b.startDate))
}
