import Card from '../common/Card'
import { getInstitution } from '../../services/institutionService'
import './InstitutionPrinciples.css'

/** Missão, visão e valores da instituição, reutilizados na home e na página Sobre. */
function InstitutionPrinciples() {
  const institution = getInstitution()

  return (
    <div className="principles">
      <div className="principles__grid">
        <Card title="Missão">
          <p>{institution.mission}</p>
        </Card>
        <Card title="Visão">
          <p>{institution.vision}</p>
        </Card>
      </div>

      <Card title="Valores" className="principles__values">
        <ul className="principles__list">
          {institution.values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default InstitutionPrinciples
