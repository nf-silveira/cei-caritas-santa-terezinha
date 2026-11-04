import { Inbox } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import Alert from '../../components/common/Alert'
import Button from '../../components/common/Button'
import EmptyState from '../../components/common/EmptyState'
import { usePortalSession } from '../../context/PortalSessionContext'
import { getPortalRoleHome } from '../../services/portalService'
import './PortalPages.css'

function PortalModulePage() {
  const { role: roleParam, module: moduleParam } = useParams()
  const { session, role } = usePortalSession()

  if (!session || !role) {
    return <Navigate to="/portal/login" replace />
  }

  if (roleParam !== role.id) {
    return <Navigate to={getPortalRoleHome(role.id)} replace />
  }

  const activeModule = role.modules.find((item) => item.id === moduleParam)

  if (!activeModule) {
    return <Navigate to={getPortalRoleHome(role.id)} replace />
  }

  return (
    <div className="portal-page">
      <header className="portal-page__header">
        <div>
          <p className="portal-page__eyebrow">Módulo · {role.label}</p>
          <h1 className="portal-page__title">{activeModule.label}</h1>
          <p className="portal-page__summary">{activeModule.description}</p>
        </div>
      </header>

      <EmptyState
        icon={<Inbox size={28} />}
        title="Módulo em construção"
        description="Esta etapa entrega a estrutura visual e a navegação do portal. As telas funcionais deste módulo chegam na próxima etapa, sempre com dados simulados."
        action={
          <Button to={getPortalRoleHome(role.id)} variant="secondary">
            Voltar à visão geral
          </Button>
        }
      />

      <Alert variant="info" title="Somente demonstração">
        Nenhuma informação real de crianças, responsáveis ou colaboradores é usada neste módulo.
      </Alert>
    </div>
  )
}

export default PortalModulePage
