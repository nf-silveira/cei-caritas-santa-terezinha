import { BookOpen, Clock, HeartHandshake, Users } from 'lucide-react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import SectionHeader from '../components/common/SectionHeader'
import IdentityGrid from '../components/institutional/IdentityGrid'
import InstitutionPrinciples from '../components/institutional/InstitutionPrinciples'
import { getInstitution } from '../services/institutionService'
import '../styles/site-pages.css'

const pedagogicalReferences = [
  'Currículo da Cidade — Educação Infantil',
  'Base Nacional Comum Curricular (BNCC)',
  'Lei de Diretrizes e Bases da Educação Nacional (LDB)',
  'Estatuto da Criança e do Adolescente (ECA)',
]

function AboutPage() {
  const institution = getInstitution()

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Institucional"
        title="Sobre a instituição"
        description={institution.summary}
      />

      <section className="site-section" aria-labelledby="sobre-historia">
        <SectionHeader
          id="sobre-historia"
          eyebrow="Nossa história"
          title="Uma creche construída com a comunidade"
          description="Conteúdo demonstrativo, elaborado para apresentar a estrutura de uma página institucional."
        />
        <div className="site-grid site-grid--two">
          <div className="site-prose">
            <p>
              O CEI Cáritas Santa Terezinha atua no cuidado e na educação de bebês e crianças de 0 a 4 anos, em
              período integral. A proposta nasce do encontro entre a rede Cáritas, a rede pública de ensino e as
              famílias atendidas.
            </p>
            <p>
              A equipe é formada por professoras, auxiliares, coordenação pedagógica e equipe de apoio, com formação
              continuada ao longo do ano. O planejamento é coletivo e acompanha o desenvolvimento de cada turma.
            </p>
            <p>
              <strong>Aviso:</strong> este é um projeto demonstrativo. Textos institucionais e indicadores são
              ilustrativos; os canais de contato são os oficiais da unidade.
            </p>
          </div>

          <Card title="A instituição em números" subtitle="Indicadores ilustrativos">
            <ul className="site-facts">
              <li>
                <Users size={18} aria-hidden="true" />
                <span>
                  <strong>0 a 4 anos</strong>
                  Berçário e mini-grupos
                </span>
              </li>
              <li>
                <Clock size={18} aria-hidden="true" />
                <span>
                  <strong>Período integral</strong>
                  {institution.hours}
                </span>
              </li>
              <li>
                <BookOpen size={18} aria-hidden="true" />
                <span>
                  <strong>Projeto pedagógico</strong>
                  Planejamento por projetos e bimestres
                </span>
              </li>
              <li>
                <HeartHandshake size={18} aria-hidden="true" />
                <span>
                  <strong>Parceria com famílias</strong>
                  Reuniões e relatórios de desenvolvimento
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="site-section" aria-labelledby="sobre-principios">
        <SectionHeader
          id="sobre-principios"
          eyebrow="Princípios"
          title="Missão, visão e valores"
          description="As diretrizes que orientam o trabalho cotidiano da equipe."
        />
        <InstitutionPrinciples />
      </section>

      <section className="site-section" aria-labelledby="sobre-pedagogia">
        <SectionHeader
          id="sobre-pedagogia"
          eyebrow="Proposta pedagógica"
          title="Educar e cuidar como ações indissociáveis"
          description="O planejamento respeita o tempo de cada criança e valoriza a experiência, o brincar e a convivência."
        />
        <div className="site-grid site-grid--two">
          <div className="site-prose">
            <p>
              As práticas pedagógicas são organizadas em projetos que partem das experiências das crianças, com
              registros, rodas de conversa e produções coletivas. O cuidado com o corpo, a alimentação e o descanso faz
              parte do currículo.
            </p>
            <p>
              A documentação da aprendizagem apoia as reuniões com as famílias e a formação continuada da equipe,
              garantindo coerência entre o planejado e o vivido em cada turma.
            </p>
            <Button variant="outline" to="/contato">
              Conversar com a coordenação
            </Button>
          </div>

          <Card title="Referências do projeto pedagógico">
            <ul className="principles__list">
              {pedagogicalReferences.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="site-section" aria-labelledby="sobre-simbolos">
        <SectionHeader
          id="sobre-simbolos"
          eyebrow="Identidade"
          title="Nossos símbolos"
          description="Imagens ilustrativas usadas para demonstrar a aplicação da identidade visual."
        />
        <IdentityGrid />
      </section>
    </div>
  )
}

export default AboutPage
