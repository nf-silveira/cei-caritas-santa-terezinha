import Alert from '../components/common/Alert'
import PageHeader from '../components/common/PageHeader'
import EventCard from '../components/institutional/EventCard'
import { getEvents } from '../services/eventService'
import '../styles/site-pages.css'

function EventsPage() {
  const events = getEvents()

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Agenda"
        title="Eventos abertos à comunidade"
        description="Festas e mostras organizadas pela unidade ao longo do período letivo."
      />

      <Alert variant="info" title="Agenda pública ilustrativa">
        Datas, horários e locais são fictícios. Reuniões internas, conselhos e dias sem aula ficam no calendário do
        portal.
      </Alert>

      <section className="site-section" aria-label="Lista de eventos">
        <div className="site-grid site-grid--two">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default EventsPage
