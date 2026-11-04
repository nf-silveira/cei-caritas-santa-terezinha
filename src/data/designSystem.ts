export interface ColorToken {
  /** Sufixo usado nas classes de amostra da página de demonstração. */
  name: string
  variable: string
  value: string
  usage: string
}

export const colorTokens: ColorToken[] = [
  { name: 'primary', variable: '--color-primary', value: '#145DA8', usage: 'Navegação, links e botões principais' },
  { name: 'primary-dark', variable: '--color-primary-dark', value: '#0B315B', usage: 'Títulos fortes e cabeçalho' },
  { name: 'secondary', variable: '--color-secondary', value: '#1B7A4B', usage: 'Ações positivas e conteúdo educativo' },
  { name: 'accent', variable: '--color-accent', value: '#F4C542', usage: 'Destaques pontuais, sempre com texto escuro' },
  { name: 'background', variable: '--color-background', value: '#F5F8FC', usage: 'Fundo geral das páginas' },
  { name: 'surface', variable: '--color-surface', value: '#FFFFFF', usage: 'Cartões, painéis e superfícies' },
  { name: 'text', variable: '--color-text', value: '#182B3D', usage: 'Texto principal' },
  { name: 'muted', variable: '--color-muted', value: '#607184', usage: 'Texto auxiliar e legendas' },
  { name: 'border', variable: '--color-border', value: '#DCE5EF', usage: 'Divisores e bordas' },
  { name: 'danger', variable: '--color-danger', value: '#B42318', usage: 'Erros e ações destrutivas' },
]

export interface TypeSample {
  className: string
  label: string
  example: string
  description: string
}

export const typeSamples: TypeSample[] = [
  {
    className: 'ds-demo__type--h1',
    label: 'Título 1',
    example: 'Educar e cuidar',
    description: 'h1 · clamp de 30px a 44px',
  },
  {
    className: 'ds-demo__type--h2',
    label: 'Título 2',
    example: 'Nossa proposta pedagógica',
    description: 'h2 · clamp de 24px a 32px',
  },
  {
    className: 'ds-demo__type--h3',
    label: 'Subtítulo',
    example: 'Berçário e mini-grupos',
    description: 'h3 · clamp de 20px a 24px',
  },
  {
    className: 'ds-demo__type--body',
    label: 'Texto',
    example: 'Ambiente acolhedor, seguro e estimulante para o desenvolvimento integral.',
    description: 'corpo · 16px com entrelinha 1.6',
  },
  {
    className: 'ds-demo__type--small',
    label: 'Legenda',
    example: 'Informação auxiliar e metadados.',
    description: 'legenda · 14px',
  },
]
