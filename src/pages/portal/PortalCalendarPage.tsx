import { useState } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import Alert from '../../components/common/Alert'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import { usePortalSession } from '../../context/PortalSessionContext'
import { getCalendarEntries } from '../../services/calendarService'
import { getPortalRoleHome } from '../../services/portalService'
import type { CalendarEntryKind } from '../../types/calendar'
import {
  addMonths,
  getEntriesForDay,
  getEntriesForMonth,
  getMonthCells,
  getMonthLabel,
  getTodayIso,
  getWeekdayLabels,
  monthFromIso,
  type YearMonth,
} from '../../utils/calendar'
import { formatDate, formatDateBadge } from '../../utils/formatDate'
import './PortalCalendarPage.css'

const kindMeta: Record<CalendarEntryKind, { label: string; tone: 'primary' | 'warning' | 'neutral' }> = {
  event: { label: 'Evento', tone: 'primary' },
  meeting: { label: 'Reunião', tone: 'warning' },
  'no-class': { label: 'Sem aula', tone: 'neutral' },
}

const entries = getCalendarEntries()

function PortalCalendarPage() {
  const { role: roleParam } = useParams()
  const { session, role, unit } = usePortalSession()
  const [month, setMonth] = useState<YearMonth>(() => monthFromIso(entries[0]?.startDate ?? getTodayIso()))

  if (!session || !role) {
    return <Navigate to="/portal/login" replace />
  }

  if (roleParam !== role.id) {
    return <Navigate to={getPortalRoleHome(role.id)} replace />
  }

  const cells = getMonthCells(month)
  const monthEntries = getEntriesForMonth(entries, month)
  const monthLabel = getMonthLabel(month)
  const today = getTodayIso()

  return (
    <div className="portal-page">
      <header className="portal-page__header">
        <div>
          <p className="portal-page__eyebrow">Calendário · {role.label}</p>
          <h1 className="portal-page__title">Calendário escolar</h1>
          <p className="portal-page__summary">
            Eventos, reuniões e dias sem aula da unidade reunidos em um só lugar.
          </p>
          <p className="portal-page__unit">
            Unidade em uso: <strong>{unit?.name}</strong>
          </p>
        </div>

        <Badge tone="warning">Dados fictícios</Badge>
      </header>

      <Alert variant="info" title="Calendário demonstrativo">
        Datas, horários e locais são ilustrativos e não correspondem ao calendário oficial da instituição.
      </Alert>

      <section className="portal-calendar" aria-labelledby="portal-calendario-mes">
        <div className="portal-calendar__toolbar">
          <Button
            variant="outline"
            onClick={() => setMonth((current) => addMonths(current, -1))}
            iconLeft={<ChevronLeft size={18} />}
          >
            Anterior
          </Button>

          <h2 className="portal-calendar__month" id="portal-calendario-mes" aria-live="polite">
            {monthLabel}
          </h2>

          <Button
            variant="outline"
            onClick={() => setMonth((current) => addMonths(current, 1))}
            iconRight={<ChevronRight size={18} />}
          >
            Próximo
          </Button>
        </div>

        <ul className="portal-calendar__legend" aria-label="Legenda do calendário">
          <li>
            <span className="portal-calendar__dot portal-calendar__dot--event" aria-hidden="true" />
            Evento
          </li>
          <li>
            <span className="portal-calendar__dot portal-calendar__dot--meeting" aria-hidden="true" />
            Reunião
          </li>
          <li>
            <span className="portal-calendar__dot portal-calendar__dot--no-class" aria-hidden="true" />
            Sem aula
          </li>
        </ul>

        <div className="portal-calendar__weekdays" aria-hidden="true">
          {getWeekdayLabels().map((weekday) => (
            <span key={weekday}>{weekday}</span>
          ))}
        </div>

        <ol className="portal-calendar__grid" aria-label={`Dias de ${monthLabel}`}>
          {cells.map((iso, index) => {
            if (!iso) {
              return <li className="portal-calendar__day is-empty" key={`vazio-${index}`} aria-hidden="true" />
            }

            const dayEntries = getEntriesForDay(entries, iso)
            const kinds = [...new Set(dayEntries.map((entry) => entry.kind))]
            const classes = [
              'portal-calendar__day',
              kinds.includes('event') ? 'has-event' : '',
              kinds.includes('meeting') ? 'has-meeting' : '',
              kinds.includes('no-class') ? 'has-no-class' : '',
              iso === today ? 'is-today' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <li className={classes} key={iso} aria-current={iso === today ? 'date' : undefined}>
                <span className="portal-calendar__day-number">{Number(iso.slice(-2))}</span>

                {kinds.length > 0 ? (
                  <span className="portal-calendar__dots" aria-hidden="true">
                    {kinds.map((kind) => (
                      <span className={`portal-calendar__dot portal-calendar__dot--${kind}`} key={kind} />
                    ))}
                  </span>
                ) : null}

                {dayEntries.length > 0 ? (
                  <span className="visually-hidden">{dayEntries.map((entry) => entry.title).join('. ')}</span>
                ) : null}
              </li>
            )
          })}
        </ol>

        <section className="portal-calendar__month-list" aria-labelledby="portal-calendario-lista">
          <h3 id="portal-calendario-lista">Agenda do mês</h3>

          {monthEntries.length > 0 ? (
            <ul className="portal-calendar__entries">
              {monthEntries.map((entry) => {
                const badge = formatDateBadge(entry.startDate)
                const dateLabel = entry.endDate
                  ? `${formatDate(entry.startDate)} a ${formatDate(entry.endDate)}`
                  : formatDate(entry.startDate)
                const meta = kindMeta[entry.kind]

                return (
                  <li className={`portal-calendar__entry is-${entry.kind}`} key={entry.id}>
                    <div className="portal-calendar__entry-date" aria-hidden="true">
                      <span className="portal-calendar__entry-day">{badge.day}</span>
                      <span>{badge.month}</span>
                    </div>

                    <div className="portal-calendar__entry-body">
                      <div className="portal-calendar__entry-head">
                        <p className="portal-calendar__entry-title">{entry.title}</p>
                        <Badge tone={meta.tone}>{meta.label}</Badge>
                      </div>

                      <p className="portal-calendar__entry-date-label">{dateLabel}</p>

                      {entry.time || entry.location ? (
                        <ul className="portal-calendar__entry-meta">
                          {entry.time ? (
                            <li>
                              <Clock size={14} aria-hidden="true" />
                              {entry.time}
                            </li>
                          ) : null}
                          {entry.location ? (
                            <li>
                              <MapPin size={14} aria-hidden="true" />
                              {entry.location}
                            </li>
                          ) : null}
                        </ul>
                      ) : null}

                      <p className="portal-calendar__entry-description">{entry.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="portal-calendar__empty">
              <CalendarDays size={18} aria-hidden="true" />
              Nenhum evento ou dia sem aula neste mês.
            </p>
          )}
        </section>
      </section>
    </div>
  )
}

export default PortalCalendarPage
