const MONTHS_LONG = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

const MONTHS_SHORT = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

interface DateParts {
  day: string
  monthIndex: number
  year: string
}

function parseIsoDate(iso: string): DateParts {
  const [year, month, day] = iso.split('-')
  return { day, monthIndex: Number(month) - 1, year }
}

/** Formata uma data ISO (aaaa-mm-dd) como "12 de novembro de 2026". */
export function formatDate(iso: string): string {
  const { day, monthIndex, year } = parseIsoDate(iso)
  return `${day} de ${MONTHS_LONG[monthIndex]} de ${year}`
}

/** Separa a data em dia e mês abreviado, para blocos de destaque. */
export function formatDateBadge(iso: string): { day: string; month: string } {
  const { day, monthIndex } = parseIsoDate(iso)
  return { day, month: MONTHS_SHORT[monthIndex] }
}
