/** Perfis de demonstração do portal. Nenhum deles representa acesso real. */
export type PortalRoleId = 'responsavel' | 'professor' | 'secretaria' | 'diretoria'

export type PortalTone = 'neutral' | 'positive' | 'warning' | 'danger'

export interface PortalModule {
  id: string
  label: string
  /** Explica o que o módulo fará quando for implementado. */
  description: string
}

export interface PortalRole {
  id: PortalRoleId
  label: string
  /** Resumo curto usado na tela de acesso. */
  description: string
  demoUserName: string
  demoUserEmail: string
  /** Contexto fictício do perfil, como turma ou vínculo. */
  demoUserContext: string
  modules: PortalModule[]
}

export interface PortalSession {
  roleId: PortalRoleId
  unitId: string
}

export interface PortalMetric {
  id: string
  label: string
  value: string
  hint: string
  tone?: PortalTone
}

export interface PortalAgendaItem {
  id: string
  date: string
  title: string
  detail: string
}

export interface PortalNotice {
  id: string
  title: string
  body: string
  time: string
  tone?: PortalTone
}

export interface PortalQuickAction {
  id: string
  label: string
  moduleId: string
}

export interface PortalWorkspace {
  roleId: PortalRoleId
  headline: string
  summary: string
  metrics: PortalMetric[]
  agenda: PortalAgendaItem[]
  notices: PortalNotice[]
  quickActions: PortalQuickAction[]
}

export interface PortalNotification {
  id: string
  title: string
  description: string
  time: string
}
