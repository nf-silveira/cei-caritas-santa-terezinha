import { institutionData } from '../data/institution'
import type { Institution } from '../types/institution'

// Camada de serviço: hoje devolve dados simulados. Futuramente pode
// ser substituída por chamadas a uma API real sem alterar as páginas.
export function getInstitution(): Institution {
  return institutionData
}
