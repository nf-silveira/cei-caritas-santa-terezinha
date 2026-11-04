import { portalNotifications, portalRoles, portalWorkspaces } from '../data/portal'
import type {
  PortalNotification,
  PortalRole,
  PortalRoleId,
  PortalWorkspace,
} from '../types/portal'

const portalRoleIds: PortalRoleId[] = ['responsavel', 'professor', 'secretaria', 'diretoria']

export function isPortalRoleId(value: unknown): value is PortalRoleId {
  return typeof value === 'string' && (portalRoleIds as string[]).includes(value)
}

export function getPortalRoles(): PortalRole[] {
  return portalRoles
}

export function getPortalRole(roleId: string): PortalRole | undefined {
  return isPortalRoleId(roleId) ? portalRoles.find((role) => role.id === roleId) : undefined
}

export function getPortalRoleHome(roleId: PortalRoleId): string {
  return `/portal/${roleId}`
}

export function getPortalWorkspace(roleId: PortalRoleId): PortalWorkspace {
  const workspace = portalWorkspaces.find((item) => item.roleId === roleId)

  if (!workspace) {
    throw new Error(`Nenhum espaço de trabalho fictício cadastrado para o perfil ${roleId}.`)
  }

  return workspace
}

export function getPortalNotifications(roleId: PortalRoleId): PortalNotification[] {
  return portalNotifications[roleId]
}
