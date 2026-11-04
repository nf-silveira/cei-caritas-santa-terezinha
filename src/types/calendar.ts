export type CalendarEntryKind = 'event' | 'meeting' | 'no-class'

export type CalendarEntryVisibility = 'public' | 'internal'

/**
 * Registro do calendário escolar demonstrativo.
 * `endDate` é usado para períodos contínuos, como recessos.
 */
export interface SchoolCalendarEntry {
  id: string
  title: string
  startDate: string
  endDate?: string
  kind: CalendarEntryKind
  visibility: CalendarEntryVisibility
  time?: string
  location?: string
  audience?: string
  description: string
}
