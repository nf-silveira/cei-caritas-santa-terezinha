import logo from '../assets/logo-cei.png'
import caritasMark from '../assets/Site santa terezinha 1.jpeg'
import santaTeresinha from '../assets/site santa terezinha 2.jpeg'
import brasao from '../assets/site santa terezinha 3.jpeg'

/**
 * Referências de imagem centralizadas para facilitar a substituição dos arquivos.
 * Mantenha os textos alternativos coerentes com a imagem usada.
 */
export const siteImages = {
  logo: {
    src: logo,
    alt: 'Logotipo do CEI Cáritas Santa Terezinha, com crianças, livro e Santa Teresinha',
  },
  caritas: {
    src: caritasMark,
    alt: 'Símbolo da Cáritas, com cruz e broto',
  },
  santaTeresinha: {
    src: santaTeresinha,
    alt: 'Ilustração de Santa Teresinha com rosas e crucifixo',
  },
  brasao: {
    src: brasao,
    alt: 'Brasão institucional com coroa, escudo e o lema Non ducor duco',
  },
} as const
