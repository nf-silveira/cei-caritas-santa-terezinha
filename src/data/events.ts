import type { EventItem } from '../types/event'

// Eventos fictícios, com datas e locais ilustrativos.
export const eventsData: EventItem[] = [
  {
    id: 'reuniao-bimestral',
    title: 'Reunião de responsáveis',
    date: '2026-11-12',
    time: '18h30 às 20h',
    location: 'Unidade Centro — sala multiuso',
    description: 'Apresentação dos relatórios de desenvolvimento e conversa sobre os projetos do bimestre.',
    audience: 'Famílias das turmas de Mini-Grupo I e II',
  },
  {
    id: 'festa-da-familia',
    title: 'Festa da família',
    date: '2026-11-22',
    time: '9h às 13h',
    location: 'Pátio da Unidade Jardim',
    description: 'Manhã de brincadeiras, oficinas e piquenique coletivo entre crianças, famílias e equipe.',
    audience: 'Aberto às famílias das três unidades',
  },
  {
    id: 'mostra-de-arte',
    title: 'Mostra de arte das crianças',
    date: '2026-12-05',
    time: '10h às 16h',
    location: 'Ateliê da Unidade Vila Nova',
    description: 'Exposição de produções realizadas nos ateliês, com visitas guiadas pelas crianças.',
    audience: 'Famílias e comunidade escolar',
  },
]
