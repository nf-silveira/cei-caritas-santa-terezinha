import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getPortalRole, isPortalRoleId } from '../services/portalService'
import { getUnits } from '../services/unitService'
import type { PortalRoleId, PortalSession } from '../types/portal'
import { PortalSessionContext, type PortalSessionContextValue } from './PortalSessionContext'

/** Guarda apenas a escolha do perfil e da unidade; nada sensível é armazenado. */
const STORAGE_KEY = 'cei-portal-demonstracao'

function readStoredSession(unitIds: string[]): PortalSession | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return null
    }

    const parsed = JSON.parse(raw) as Partial<PortalSession>

    if (!isPortalRoleId(parsed.roleId)) {
      return null
    }

    const unitId = typeof parsed.unitId === 'string' && unitIds.includes(parsed.unitId) ? parsed.unitId : unitIds[0]

    return unitId ? { roleId: parsed.roleId, unitId } : null
  } catch {
    return null
  }
}

function storeSession(session: PortalSession | null): void {
  try {
    if (session) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session))
    } else {
      window.sessionStorage.removeItem(STORAGE_KEY)
    }
  } catch {
    // Sem persistência disponível, a demonstração continua funcionando em memória.
  }
}

interface PortalSessionProviderProps {
  children: ReactNode
}

function PortalSessionProvider({ children }: PortalSessionProviderProps) {
  const units = useMemo(() => getUnits(), [])
  const unitIds = useMemo(() => units.map((unit) => unit.id), [units])
  const [session, setSession] = useState<PortalSession | null>(() => readStoredSession(unitIds))

  useEffect(() => {
    storeSession(session)
  }, [session])

  const login = useCallback(
    (roleId: PortalRoleId) => {
      setSession({ roleId, unitId: unitIds[0] })
    },
    [unitIds],
  )

  const logout = useCallback(() => {
    setSession(null)
  }, [])

  const selectUnit = useCallback((unitId: string) => {
    setSession((current) =>
      current && unitId !== current.unitId ? { ...current, unitId } : current,
    )
  }, [])

  const value = useMemo<PortalSessionContextValue>(() => {
    const role = session ? (getPortalRole(session.roleId) ?? null) : null
    const unit = session ? (units.find((item) => item.id === session.unitId) ?? units[0] ?? null) : null

    return { session, role, unit, units, login, logout, selectUnit }
  }, [session, units, login, logout, selectUnit])

  return <PortalSessionContext.Provider value={value}>{children}</PortalSessionContext.Provider>
}

export default PortalSessionProvider
