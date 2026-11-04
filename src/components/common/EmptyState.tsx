import type { ReactNode } from 'react'
import './EmptyState.css'

interface EmptyStateProps {
  title: string
  description?: string
  icon?: ReactNode
  /** Ação principal sugerida, como um botão ou link. */
  action?: ReactNode
  className?: string
}

function EmptyState({ title, description, icon, action, className = '' }: EmptyStateProps) {
  return (
    <div className={['ds-empty', className].filter(Boolean).join(' ')}>
      {icon ? (
        <span className="ds-empty__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <h3 className="ds-empty__title">{title}</h3>
      {description ? <p className="ds-empty__description">{description}</p> : null}
      {action ? <div className="ds-empty__action">{action}</div> : null}
    </div>
  )
}

export default EmptyState
