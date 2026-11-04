import Card from '../common/Card'
import { identityItems } from '../../data/identity'
import './IdentityGrid.css'

/** Símbolos da instituição, exibidos na home e na página Sobre. */
function IdentityGrid() {
  return (
    <div className="identity-grid">
      {identityItems.map((item) => (
        <Card key={item.title} className="identity-card" title={item.title}>
          <img
            className="identity-card__image"
            src={item.image.src}
            alt={item.image.alt}
            loading="lazy"
            width={200}
            height={200}
          />
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default IdentityGrid
