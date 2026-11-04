import type { ReactNode } from 'react'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import './Alert.css'

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

interface AlertProps {
  children: ReactNode
  title?: string
  variant?: AlertVariant
  className?: string
}

const alertIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger: XCircle,
} as const

function Alert({ children, title, variant = 'info', className = '' }: AlertProps) {
  const Icon = alertIcons[variant]
  const classes = ['ds-alert', `ds-alert--${variant}`, className].filter(Boolean).join(' ')
  const role = variant === 'danger' || variant === 'warning' ? 'alert' : 'status'

  return (
    <div className={classes} role={role}>
      <span className="ds-alert__icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <div className="ds-alert__content">
        {title ? <p className="ds-alert__title">{title}</p> : null}
        <div className="ds-alert__text">{children}</div>
      </div>
    </div>
  )
}

export default Alert
