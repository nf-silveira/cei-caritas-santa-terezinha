import type { ReactNode } from 'react'
import './SectionHeader.css'

export type SectionHeaderLevel = 2 | 3

interface SectionHeaderProps {
  title: string
  /** Rótulo curto acima do título. */
  eyebrow?: string
  description?: string
  actions?: ReactNode
  level?: SectionHeaderLevel
  id?: string
}

function SectionHeader({ title, eyebrow, description, actions, level = 2, id }: SectionHeaderProps) {
  const Heading = (level === 3 ? 'h3' : 'h2') as 'h2' | 'h3'

  return (
    <div className="ds-section-header">
      <div className="ds-section-header__text">
        {eyebrow ? <p className="ds-section-header__eyebrow">{eyebrow}</p> : null}
        <Heading className="ds-section-header__title" id={id}>
          {title}
        </Heading>
        {description ? <p className="ds-section-header__description">{description}</p> : null}
      </div>
      {actions ? <div className="ds-section-header__actions">{actions}</div> : null}
    </div>
  )
}

export default SectionHeader
