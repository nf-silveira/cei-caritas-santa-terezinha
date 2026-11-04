import type { ReactNode } from 'react'
import './StatusIndicator.css'

export type StatusTone = 'positive' | 'warning' | 'danger' | 'neutral' | 'info'

interface StatusIndicatorProps {
  children: ReactNode
  tone?: StatusTone
  className?: string
}

function StatusIndicator({ children, tone = 'neutral', className = '' }: StatusIndicatorProps) {
  const classes = ['ds-status', `ds-status--${tone}`, className].filter(Boolean).join(' ')

  return (
    <span className={classes}>
      <span className="ds-status__dot" aria-hidden="true" />
      {children}
    </span>
  )
}

export default StatusIndicator
