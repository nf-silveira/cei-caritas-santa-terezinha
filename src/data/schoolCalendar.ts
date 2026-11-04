import type { SchoolCalendarEntry } from '../types/calendar'

/*
 * Calendário escolar demonstrativo da unidade.
 * Datas, horários e locais são ilustrativos; apenas o endereço e os canais de contato são reais.
 * Eventos com visibility "internal" aparecem somente no portal.
 */
export const schoolCalendarData: SchoolCalendarEntry[] = [
  {
    id: 'feriado-finados',
    title: 'Feriado de Finados',
    startDate: '2026-11-02',
    kind: 'no-class',
    visibility: 'internal',
    description: 'Não haverá aula. A unidade permanece fechada.',
  },
  {
    id: 'reuniao-responsaveis',
    title: 'Reunião de responsáveis',
    startDate: '2026-11-12',
    kind: 'meeting',
    visibility: 'internal',
    time: '18h30 às 20h',
    location: 'Sala multiuso',
    audience: 'Famílias do Berçário ao Mini-Grupo II',
    description: 'Apresentação dos relatórios de desenvolvimento e conversa sobre os projetos do bimestre.',
  },
  {
    id: 'proclamacao-republica',
    title: 'Feriado da Proclamação da República',
    startDate: '2026-11-15',
    kind: 'no-class',
    visibility: 'internal',
    description: 'Não haverá aula. A unidade permanece fechada.',
  },
  {
    id: 'consciencia-negra',
    title: 'Dia da Consciência Negra',
    startDate: '2026-11-20',
    kind: 'no-class',
    visibility: 'internal',
    description: 'Não haverá aula. A unidade permanece fechada.',
  },
  {
    id: 'festa-da-familia',
    title: 'Festa da família',
    startDate: '2026-11-22',
    kind: 'event',
    visibility: 'public',
    time: '9h às 13h',
    location: 'Pátio da unidade',
    audience: 'Famílias e comunidade escolar',
    description: 'Manhã de brincadeiras, oficinas e piquenique coletivo entre crianças, famílias e equipe.',
  },
  {
    id: 'conselho-de-classe',
    title: 'Conselho de classe',
    startDate: '2026-11-25',
    kind: 'no-class',
    visibility: 'internal',
    description: 'Fechamento do bimestre com a equipe pedagógica. Não haverá aula para as crianças.',
  },
  {
    id: 'mostra-de-arte',
    title: 'Mostra de arte das crianças',
    startDate: '2026-12-05',
    kind: 'event',
    visibility: 'public',
    time: '10h às 16h',
    location: 'Ateliê e pátio da unidade',
    audience: 'Famílias e comunidade escolar',
    description: 'Exposição das produções realizadas nos ateliês, com visitas guiadas pelas crianças.',
  },
  {
    id: 'ultimo-dia-letivo',
    title: 'Encerramento do ano letivo',
    startDate: '2026-12-18',
    kind: 'event',
    visibility: 'internal',
    time: 'Durante o período de aula',
    location: 'Unidade',
    audience: 'Crianças e equipe',
    description: 'Último dia de atividades pedagógicas do ano, com registro coletivo das turmas.',
  },
  {
    id: 'recesso-fim-de-ano',
    title: 'Recesso de fim de ano',
    startDate: '2026-12-21',
    endDate: '2027-01-04',
    kind: 'no-class',
    visibility: 'internal',
    description: 'Recesso escolar. As atividades retornam em 5 de janeiro de 2027.',
  },
]
