import type { NavItem } from '../types/navigation'

export const publicNavItems: NavItem[] = [
  { label: 'Início', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Notícias', to: '/noticias' },
  { label: 'Eventos', to: '/eventos' },
  { label: 'Dúvidas', to: '/duvidas' },
  { label: 'Trabalhe conosco', to: '/trabalhe-conosco' },
  { label: 'Contato', to: '/contato' },
]

export const secondaryNavItems: NavItem[] = [{ label: 'Portal', to: '/portal' }]
