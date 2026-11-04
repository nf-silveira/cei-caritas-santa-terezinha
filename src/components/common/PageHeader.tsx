import type { ReactNode } from 'react'
import './PageHeader.css'

interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
  actions?: ReactNode
}

/** Cabeçalho de abertura das páginas internas. */
function PageHeader({ title, description, eyebrow, actions }: PageHeaderProps) {
  return (
    <header className="ds-page-header">
      {eyebrow ? <p className="ds-page-header__eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      {description ? <p className="ds-page-header__description">{description}</p> : null}
      {actions ? <div className="ds-page-header__actions">{actions}</div> : null}
    </header>
  )
}

export default PageHeader
