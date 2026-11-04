import type { ReactNode } from 'react'
import './Card.css'

interface CardProps {
  children?: ReactNode
  title?: string
  subtitle?: string
  /** Ações exibidas no topo do card. */
  actions?: ReactNode
  footer?: ReactNode
  /** Faixa de destaque no topo, para conteúdo prioritário. */
  accent?: boolean
  className?: string
}

function Card({ children, title, subtitle, actions, footer, accent = false, className = '' }: CardProps) {
  const classes = ['ds-card', accent ? 'ds-card--accent' : '', className].filter(Boolean).join(' ')
  const hasHeader = Boolean(title || subtitle || actions)

  return (
    <article className={classes}>
      {hasHeader ? (
        <header className="ds-card__header">
          <div className="ds-card__heading">
            {title ? <h3 className="ds-card__title">{title}</h3> : null}
            {subtitle ? <p className="ds-card__subtitle">{subtitle}</p> : null}
          </div>
          {actions ? <div className="ds-card__actions">{actions}</div> : null}
        </header>
      ) : null}

      {children ? <div className="ds-card__body">{children}</div> : null}

      {footer ? <footer className="ds-card__footer">{footer}</footer> : null}
    </article>
  )
}

export default Card
