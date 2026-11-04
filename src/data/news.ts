import type { NewsPost } from '../types/news'

// Notícias públicas e genéricas, criadas apenas para demonstração do layout.
// Assuntos internos (reuniões, documentos e avisos às famílias) ficam no portal.
export const newsData: NewsPost[] = [
  {
    id: 'semana-do-livro',
    title: 'Semana do livro movimenta as turmas',
    category: 'Projeto',
    date: '2026-11-03',
    summary: 'Rodas de histórias, troca de livros e produções coletivas marcaram a semana na unidade.',
    body: 'As crianças participaram de contações de histórias no pátio e conheceram novos livros do acervo da unidade. As produções feitas pelas turmas ficaram expostas nos corredores.',
  },
  {
    id: 'horta-e-natureza',
    title: 'Crianças descobrem a horta da unidade',
    category: 'Projeto',
    date: '2026-10-27',
    summary: 'Plantio, observação de insetos e cuidado diário com as hortaliças fazem parte da rotina.',
    body: 'O projeto aproxima as crianças do ciclo das plantas e do cuidado com o ambiente. Cada turma tem um canteiro para observar e regar ao longo da semana.',
  },
  {
    id: 'mostra-de-arte',
    title: 'Mostra de arte reúne produções das turmas',
    category: 'Cultura',
    date: '2026-10-19',
    summary: 'Pinturas, colagens e objetos construídos nos ateliês compõem uma exposição aberta às famílias.',
    body: 'As produções partem de materiais diversos e do interesse das crianças. A exposição é organizada coletivamente e ocupa o pátio e o ateliê da unidade.',
  },
  {
    id: 'alimentacao-saudavel',
    title: 'Alimentação saudável faz parte da rotina',
    category: 'Cuidado',
    date: '2026-10-08',
    summary: 'Atividades sensoriais apresentam novos alimentos e valorizam o tempo de cada criança à mesa.',
    body: 'O trabalho acontece junto das refeições, com respeito ao ritmo de cada criança e à participação das famílias na construção do cardápio.',
  },
]
