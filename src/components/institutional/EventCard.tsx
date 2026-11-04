import { Clock, MapPin, Users } from 'lucide-react'
import Badge from '../common/Badge'
import Card from '../common/Card'
import type { EventItem } from '../../types/event'
import { formatDate, formatDateBadge } from '../../utils/formatDate'
import './EventCard.css'

interface EventCardProps {
  event: EventItem
}

function EventCard({ event }: EventCardProps) {
  const badge = formatDateBadge(event.date)

  return (
    <Card className="event-card">
      <div className="event-card__content">
        <div className="event-card__date" aria-hidden="true">
          <span className="event-card__day">{badge.day}</span>
          <span className="event-card__month">{badge.month}</span>
        </div>

        <div className="event-card__info">
          <h3 className="event-card__title">{event.title}</h3>
          <time className="visually-hidden" dateTime={event.date}>
            {formatDate(event.date)}
          </time>
          <ul className="event-card__meta">
            <li>
              <Clock size={16} aria-hidden="true" />
              {event.time}
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              {event.location}
            </li>
            <li>
              <Users size={16} aria-hidden="true" />
              {event.audience}
            </li>
          </ul>
          <p className="event-card__description">{event.description}</p>
          <Badge tone="positive">Aberto à comunidade escolar</Badge>
        </div>
      </div>
    </Card>
  )
}

export default EventCard
