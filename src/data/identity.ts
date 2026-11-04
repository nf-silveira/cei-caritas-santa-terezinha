import { siteImages } from './siteImages'

export interface IdentityItem {
  image: { src: string; alt: string }
  title: string
  description: string
}

/** Símbolos e referências da instituição, usados na home e na página Sobre. */
export const identityItems: IdentityItem[] = [
  {
    image: siteImages.caritas,
    title: 'Rede Cáritas',
    description: 'A instituição caminha junto da rede Cáritas, com foco em assistência social e educação.',
  },
  {
    image: siteImages.santaTeresinha,
    title: 'Santa Teresinha',
    description: 'Padroeira que inspira o cuidado com as pequenas coisas e o amor pela infância.',
  },
  {
    image: siteImages.brasao,
    title: 'Brasão institucional',
    description: 'Símbolo histórico da instituição, com o lema “Non ducor duco”.',
  },
]
