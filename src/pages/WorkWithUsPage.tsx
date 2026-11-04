import { BookOpen, HeartHandshake, Users } from 'lucide-react'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import SectionHeader from '../components/common/SectionHeader'
import { getInstitution } from '../services/institutionService'
import '../styles/site-pages.css'

const steps = [
  {
    title: 'Organize seu currículo',
    description: 'Inclua sua formação, experiências com educação infantil e dados para contato.',
  },
  {
    title: 'Envie por e-mail',
    description: 'Use o assunto "Trabalhe conosco" e anexe o currículo em PDF.',
  },
  {
    title: 'Aguarde o retorno',
    description: 'A secretaria encaminha os currículos à coordenação e entra em contato quando houver uma vaga compatível.',
  },
]

const values = [
  {
    icon: HeartHandshake,
    title: 'Cuidado e acolhimento',
    description: 'Interesse genuíno pelo bem-estar das crianças e pela parceria com as famílias.',
  },
  {
    icon: BookOpen,
    title: 'Formação continuada',
    description: 'Disposição para estudar, planejar em coletivo e revisar as práticas pedagógicas.',
  },
  {
    icon: Users,
    title: 'Trabalho em equipe',
    description: 'Colaboração com professoras, auxiliares, coordenação e equipe de apoio.',
  },
]

function WorkWithUsPage() {
  const institution = getInstitution()

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Oportunidades"
        title="Trabalhe conosco"
        description="A unidade recebe currículos de profissionais interessados em educação infantil. As candidaturas são encaminhadas à coordenação e ficam disponíveis para consulta quando há vagas."
      />

      <section className="site-grid site-grid--two" aria-labelledby="trabalhe-envio">
        <div className="site-section">
          <SectionHeader
            id="trabalhe-envio"
            eyebrow="Como participar"
            title="Envie seu currículo"
            description="Não há processo seletivo aberto divulgado neste protótipo. O envio segue o fluxo abaixo."
          />

          <ol className="site-steps">
            {steps.map((step) => (
              <li key={step.title}>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Card title="Contato para candidaturas" subtitle="Canal oficial da unidade">
          <p>
            Envie o currículo para{' '}
            <a href={`mailto:${institution.email}`}>{institution.email}</a> com o assunto{' '}
            <strong>Trabalhe conosco</strong>.
          </p>
          <p>
            Telefone: {institution.phone}
            <br />
            Endereço: {institution.address}
          </p>
          <Button variant="outline" to="/contato">
            Falar com a secretaria
          </Button>
        </Card>
      </section>

      <section className="site-section" aria-labelledby="trabalhe-valores">
        <SectionHeader
          id="trabalhe-valores"
          eyebrow="Perfil profissional"
          title="O que valorizamos"
          description="Competências e atitudes que orientam o trabalho cotidiano da equipe."
        />

        <div className="site-grid site-grid--three">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <Card key={value.title} title={value.title} actions={<Icon size={20} aria-hidden="true" />}>
                <p>{value.description}</p>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="site-section" aria-labelledby="trabalhe-aviso">
        <Card title="Sobre esta página" subtitle="Projeto demonstrativo">
          <p>
            Esta página é ilustrativa e não representa um processo seletivo em andamento. O endereço de e-mail e o
            telefone exibidos são os canais oficiais da unidade.
          </p>
        </Card>
      </section>
    </div>
  )
}

export default WorkWithUsPage
