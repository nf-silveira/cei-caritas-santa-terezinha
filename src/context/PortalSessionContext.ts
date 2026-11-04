import { createContext, useContext } from 'react'
import type { PortalRole, PortalRoleId, PortalSession } from '../types/portal'
import type { Unit } from '../types/unit'

export interface PortalSessionContextValue {
  /** Sessão demonstrativa ativa. Não há autenticação real. */
  session: PortalSession | null
  role: PortalRole | null
  unit: Unit | null
  units: Unit[]
  login: (roleId: PortalRoleId) => void
  logout: () => void
  selectUnit: (unitId: string) => void
}

export const PortalSessionContext = createContext<PortalSessionContextValue | null>(null)

export function usePortalSession(): PortalSessionContextValue {
  const value = useContext(PortalSessionContext)

  if (!value) {
    throw new Error('usePortalSession deve ser usado dentro de PortalSessionProvider.')
  }

  return value
}
