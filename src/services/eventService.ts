import { getCalendarEntries } from './calendarService'
import type { EventItem } from '../types/event'

/** Somente eventos abertos à comunidade aparecem no site público. */
export function getEvents(): EventItem[] {
  return getCalendarEntries()
    .filter((entry) => entry.kind === 'event' && entry.visibility === 'public')
    .map((entry) => ({
      id: entry.id,
      title: entry.title,
      date: entry.startDate,
      time: entry.time ?? 'Horário a confirmar',
      location: entry.location ?? 'CEI Cáritas Santa Terezinha',
      description: entry.description,
      audience: entry.audience ?? 'Comunidade escolar',
    }))
}
