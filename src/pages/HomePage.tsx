import { Clock, LogIn, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import SectionHeader from '../components/common/SectionHeader'
import EventCard from '../components/institutional/EventCard'
import IdentityGrid from '../components/institutional/IdentityGrid'
import InstitutionPrinciples from '../components/institutional/InstitutionPrinciples'
import NewsCard from '../components/institutional/NewsCard'
import UnitCard from '../components/institutional/UnitCard'
import { siteImages } from '../data/siteImages'
import { getUpcomingEvents } from '../services/eventService'
import { getInstitution } from '../services/institutionService'
import { getLatestNews } from '../services/newsService'
import { getUnits } from '../services/unitService'
import './HomePage.css'

function HomePage() {
  const institution = getInstitution()
  const units = getUnits()
  const news = getLatestNews(3)
  const events = getUpcomingEvents(2)

  return (
    <div className="home">
      <section className="home-hero" aria-labelledby="home-titulo">
        <div className="home-hero__text">
          <p className="home-hero__eyebrow">Educação infantil · 0 a 4 anos</p>
          <h1 id="home-titulo">Acolher, cuidar e educar desde os primeiros meses</h1>
          <p className="home-hero__lead">
            {institution.summary} {institution.tagline}
          </p>

          <div className="home-hero__actions">
            <Button size="lg" to="/sobre">
              Conhecer a instituição
            </Button>
            <Button size="lg" variant="outline" to="/portal" iconLeft={<LogIn size={18} />}>
              Acesso ao portal
            </Button>
          </div>

          <ul className="home-hero__facts">
            <li>
              <Clock size={18} aria-hidden="true" />
              Período integral
            </li>
            <li>
              <Sparkles size={18} aria-hidden="true" />
              Berçário e mini-grupos
            </li>
          </ul>
        </div>

        <div className="home-hero__art">
          <img
            src={siteImages.logo.src}
            alt={siteImages.logo.alt}
            className="home-hero__logo"
            width={900}
            height={600}
          />
          <p className="home-hero__caption">Identidade visual ilustrativa do projeto</p>
        </div>
      </section>

      <section aria-labelledby="home-apresentacao">
        <SectionHeader
          id="home-apresentacao"
          eyebrow="Quem somos"
          title="Uma creche que educa com afeto e intencionalidade"
          description={institution.summary}
          actions={
            <Button variant="ghost" to="/sobre">
              Nossa história
            </Button>
          }
        />
        <div className="home-grid home-grid--three">
          <Card title="Cuidado cotidiano">
            <p>
              Rotinas de higiene, alimentação e descanso organizadas com atenção ao tempo e às necessidades de cada
              criança.
            </p>
          </Card>
          <Card title="Proposta pedagógica">
            <p>
              Planejamento baseado no currículo da cidade e na BNCC, com projetos desenvolvidos por professores e
              coordenação.
            </p>
          </Card>
          <Card title="Parceria com as famílias">
            <p>
              Reuniões bimestrais, relatórios de desenvolvimento e canais abertos para acompanhar a vida escolar.
            </p>
          </Card>
        </div>
      </section>

      <section aria-labelledby="home-missao">
        <SectionHeader
          id="home-missao"
          eyebrow="Missão, visão e valores"
          title="Nossos princípios"
          description="Diretrizes que orientam o trabalho de toda a equipe e a relação com as famílias."
        />
        <InstitutionPrinciples />
      </section>

      <section aria-labelledby="home-identidade">
        <SectionHeader
          id="home-identidade"
          eyebrow="Identidade"
          title="Símbolos que contam nossa história"
          description="Imagens ilustrativas usadas apenas para demonstrar a aplicação da identidade visual."
        />
        <IdentityGrid />
      </section>

      <section aria-labelledby="home-unidades">
        <SectionHeader
          id="home-unidades"
          eyebrow="Unidades"
          title="Três unidades, o mesmo cuidado"
          description="Unidades demonstrativas, com endereços e contatos fictícios."
          actions={
            <Button variant="ghost" to="/unidades">
              Todas as unidades
            </Button>
          }
        />
        <div className="home-grid home-grid--three">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </section>

      <section aria-labelledby="home-noticias">
        <SectionHeader
          id="home-noticias"
          eyebrow="Notícias e comunicados"
          title="O que acontece na creche"
          description="Conteúdos demonstrativos, criados para ilustrar a área de notícias."
          actions={
            <Button variant="ghost" to="/noticias">
              Todas as notícias
            </Button>
          }
        />
        <div className="home-grid home-grid--three">
          {news.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section aria-labelledby="home-eventos">
        <SectionHeader
          id="home-eventos"
          eyebrow="Próximos eventos"
          title="Agenda da comunidade escolar"
          description="Datas ilustrativas para demonstração do calendário."
          actions={
            <Button variant="ghost" to="/eventos">
              Ver agenda
            </Button>
          }
        />
        <div className="home-grid home-grid--two">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="home-cta" aria-labelledby="home-matriculas">
        <div className="home-cta__text">
          <h2 id="home-matriculas">Informações sobre matrículas</h2>
          <p>
            As matrículas são organizadas por unidade, com visita agendada e conversa com a coordenação pedagógica. Os
            contatos desta página são fictícios.
          </p>
        </div>
        <div className="home-cta__actions">
          <Button size="lg" to="/contato">
            Falar sobre matrículas
          </Button>
          <Button size="lg" variant="outline" to="/unidades">
            Ver unidades
          </Button>
        </div>
      </section>

      <section aria-labelledby="home-contato">
        <SectionHeader
          id="home-contato"
          eyebrow="Contato"
          title="Fale com a secretaria"
          description={institution.hours}
        />
        <div className="home-contact">
          <ul className="home-contact__list">
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>{institution.address}</span>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>{institution.phone}</span>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <span>{institution.email}</span>
            </li>
            <li>
              <Clock size={18} aria-hidden="true" />
              <span>{institution.hours}</span>
            </li>
          </ul>
          <Card title="Atendimento e visitas" subtitle="Demonstração">
            <p>
              Para conhecer a unidade, agende uma visita pelo formulário de contato. O envio é simulado e nenhuma
              mensagem é encaminhada.
            </p>
            <Button variant="outline" to="/contato">
              Abrir formulário de contato
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HomePage
