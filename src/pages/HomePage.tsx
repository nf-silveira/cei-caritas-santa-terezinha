import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { getInstitution } from '../services/institutionService'

function HomePage() {
  const institution = getInstitution()

  return (
    <div className="home-intro">
      <h1>{institution.name}</h1>
      <p className="lead">{institution.tagline}</p>
      <Card title="Etapa atual" subtitle="Estrutura e design system">
        <p>
          A base do projeto está organizada e a identidade visual já pode ser consultada. As páginas institucionais
          completas serão construídas nas próximas etapas.
        </p>
        <Button to="/design-system" variant="outline">
          Ver design system
        </Button>
      </Card>
      <p>
        <Link to="/portal">Acessar o portal demonstrativo</Link>
      </p>
    </div>
  )
}

export default HomePage
