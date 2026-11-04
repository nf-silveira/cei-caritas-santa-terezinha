export interface Institution {
  name: string
  tagline: string
  address: string
  /** Consulta usada para gerar o mapa do Google na página de contato. */
  mapQuery: string
  phone: string
  email: string
  hours: string
  mission: string
  vision: string
  values: string[]
  summary: string
}
