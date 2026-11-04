import { eventsData } from '../data/events'
import type { EventItem } from '../types/event'

export function getEvents(): EventItem[] {
  return [...eventsData].sort((a, b) => a.date.localeCompare(b.date))
}

export function getUpcomingEvents(limit: number): EventItem[] {
  return getEvents().slice(0, limit)
}
