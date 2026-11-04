import { getInitials } from '../../utils/initials'
import './Avatar.css'

export type AvatarSize = 'sm' | 'md' | 'lg'
export type AvatarTone = 'primary' | 'secondary' | 'accent'

interface AvatarProps {
  /** Nome completo usado para iniciais e leitura por leitores de tela. */
  name: string
  initials?: string
  src?: string
  size?: AvatarSize
  tone?: AvatarTone
  className?: string
}

function Avatar({ name, initials, src, size = 'md', tone = 'primary', className = '' }: AvatarProps) {
  const classes = ['ds-avatar', `ds-avatar--${size}`, `ds-avatar--${tone}`, className].filter(Boolean).join(' ')

  return (
    <span className={classes} role="img" aria-label={name} title={name}>
      {src ? <img src={src} alt="" loading="lazy" /> : <span aria-hidden="true">{initials ?? getInitials(name)}</span>}
    </span>
  )
}

export default Avatar
