import type { ReactNode } from 'react'
import './Badge.css'

export type BadgeTone = 'primary' | 'positive' | 'warning' | 'danger' | 'neutral'

interface BadgeProps {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}

function Badge({ children, tone = 'neutral', className = '' }: BadgeProps) {
  const classes = ['ds-badge', `ds-badge--${tone}`, className].filter(Boolean).join(' ')

  return <span className={classes}>{children}</span>
}

export default Badge
