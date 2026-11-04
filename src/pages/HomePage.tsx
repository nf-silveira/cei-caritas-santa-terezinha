import { Clock, LogIn, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import SectionHeader from '../components/common/SectionHeader'
import IdentityGrid from '../components/institutional/IdentityGrid'
import InstitutionPrinciples from '../components/institutional/InstitutionPrinciples'
import NewsCard from '../components/institutional/NewsCard'
import { siteImages } from '../data/siteImages'
import { getInstitution } from '../services/institutionService'
import { getLatestNews } from '../services/newsService'
import './HomePage.css'

function HomePage() {
  const institution = getInstitution()
  const news = getLatestNews(3)

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
              Berçário e Mini-Grupos I e II
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

      <section aria-labelledby="home-noticias">
        <SectionHeader
          id="home-noticias"
          eyebrow="Notícias e comunicados"
          title="O que acontece na creche"
          description="Projetos e novidades da rotina escolar."
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

      <section className="home-cta" aria-labelledby="home-matriculas">
        <div className="home-cta__text">
          <h2 id="home-matriculas">Informações sobre matrículas</h2>
          <p>
            As matrículas são feitas na própria unidade, com visita agendada e conversa com a coordenação pedagógica.
          </p>
        </div>
        <div className="home-cta__actions">
          <Button size="lg" to="/contato">
            Falar sobre matrículas
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
