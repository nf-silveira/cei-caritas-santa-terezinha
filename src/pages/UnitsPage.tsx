import Alert from '../components/common/Alert'
import PageHeader from '../components/common/PageHeader'
import SectionHeader from '../components/common/SectionHeader'
import UnitCard from '../components/institutional/UnitCard'
import { getUnits } from '../services/unitService'
import '../styles/site-pages.css'

const enrollmentSteps = [
  {
    title: 'Consulta de vagas',
    description: 'A família entra em contato com a unidade de interesse e verifica a disponibilidade por faixa etária.',
  },
  {
    title: 'Visita à unidade',
    description: 'A visita é agendada com a coordenação, que apresenta os espaços e a rotina da turma.',
  },
  {
    title: 'Documentação',
    description: 'Com a vaga confirmada, a secretaria orienta sobre os documentos necessários para a matrícula.',
  },
]

function UnitsPage() {
  const units = getUnits()

  return (
    <div className="site-page">
      <PageHeader
        eyebrow="Unidades"
        title="Nossas unidades"
        description="Cada unidade organiza turmas por faixa etária, com equipe própria e rotina adaptada às necessidades das crianças."
      />

      <Alert variant="info" title="Dados demonstrativos">
        Endereços, telefones e destaques são fictícios e existem apenas para ilustrar o layout.
      </Alert>

      <section className="site-section" aria-labelledby="unidades-lista">
        <SectionHeader id="unidades-lista" eyebrow="Conheça" title="Estrutura por unidade" />
        <div className="site-grid site-grid--three">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} />
          ))}
        </div>
      </section>

      <section className="site-section" aria-labelledby="unidades-matricula">
        <SectionHeader
          id="unidades-matricula"
          eyebrow="Matrículas"
          title="Como funciona o processo"
          description="As etapas abaixo são ilustrativas e servem para demonstrar a organização do conteúdo."
        />
        <ol className="site-steps">
          {enrollmentSteps.map((step) => (
            <li key={step.title}>
              <div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default UnitsPage
