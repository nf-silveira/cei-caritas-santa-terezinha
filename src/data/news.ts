import type { NewsPost } from '../types/news'

// Notícias fictícias, criadas apenas para demonstração do layout.
export const newsData: NewsPost[] = [
  {
    id: 'reuniao-bimestral',
    title: 'Reunião de responsáveis do bimestre',
    category: 'Comunicado',
    date: '2026-11-12',
    summary: 'Encontro para acompanhar o desenvolvimento das crianças e conversar sobre os projetos do período.',
    body: 'As reuniões acontecem por turma, com apresentação das atividades e dos relatórios de desenvolvimento. Cada família recebe o horário da sua turma com antecedência.',
  },
  {
    id: 'semana-do-livro',
    title: 'Semana do livro e da contação de histórias',
    category: 'Projeto',
    date: '2026-11-05',
    summary: 'Atividades de leitura, rodas de histórias e troca de livros entre as turmas ao longo da semana.',
    body: 'A programação inclui contação de histórias no pátio, visitas à biblioteca da unidade e uma mostra dos livros produzidos pelas crianças.',
  },
  {
    id: 'alimentacao-saudavel',
    title: 'Cardápio e educação alimentar',
    category: 'Projeto',
    date: '2026-10-28',
    summary: 'Novo ciclo de atividades sensoriais para apresentar novos alimentos às crianças.',
    body: 'As atividades acontecem junto das refeições, respeitando o tempo de cada criança e valorizando o prazer de comer.',
  },
  {
    id: 'formacao-equipe',
    title: 'Formação continuada da equipe educacional',
    category: 'Institucional',
    date: '2026-10-20',
    summary: 'Encontro de estudos sobre práticas pedagógicas e documentação da aprendizagem.',
    body: 'A formação faz parte do calendário anual da unidade e reúne professoras, auxiliares e coordenação pedagógica.',
  },
]
