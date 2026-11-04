import { Check, Clock, MapPin, Phone } from 'lucide-react'
import Badge from '../common/Badge'
import Button from '../common/Button'
import Card from '../common/Card'
import type { Unit } from '../../types/unit'
import './UnitCard.css'

interface UnitCardProps {
  unit: Unit
  /** Exibe o botão de contato sobre matrículas. */
  showContactAction?: boolean
}

function UnitCard({ unit, showContactAction = true }: UnitCardProps) {
  return (
    <Card
      className="unit-card"
      title={unit.name}
      subtitle={unit.segment}
      actions={<Badge tone="positive">{unit.ageRange}</Badge>}
      footer={
        showContactAction ? (
          <Button variant="outline" to="/contato">
            Falar sobre matrículas
          </Button>
        ) : undefined
      }
    >
      <ul className="unit-card__meta">
        <li>
          <Clock size={16} aria-hidden="true" />
          {unit.schedule}
        </li>
        <li>
          <MapPin size={16} aria-hidden="true" />
          {unit.address}
        </li>
        <li>
          <Phone size={16} aria-hidden="true" />
          {unit.phone}
        </li>
      </ul>

      <ul className="unit-card__highlights">
        {unit.highlights.map((highlight) => (
          <li key={highlight}>
            <Check size={16} aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UnitCard
