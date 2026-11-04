import type { NavItem } from '../types/navigation'

export const publicNavItems: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Unidades', to: '/unidades' },
  { label: 'Notícias', to: '/noticias' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Contato', to: '/contato' },
]

export const secondaryNavItems: NavItem[] = [
  { label: 'Design System', to: '/design-system' },
  { label: 'Portal', to: '/portal' },
]
