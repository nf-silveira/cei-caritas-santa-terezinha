import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'md' | 'lg'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Rótulo do botão. */
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  /** Quando informado, o botão vira um link de rota e ignora as props de formulário. */
  to?: string
  type?: 'button' | 'submit' | 'reset'
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  to,
  type = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  const classes = ['ds-btn', `ds-btn--${variant}`, `ds-btn--${size}`, fullWidth ? 'ds-btn--full' : '', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {iconLeft ? (
        <span className="ds-btn__icon" aria-hidden="true">
          {iconLeft}
        </span>
      ) : null}
      <span className="ds-btn__label">{children}</span>
      {iconRight ? (
        <span className="ds-btn__icon" aria-hidden="true">
          {iconRight}
        </span>
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button
