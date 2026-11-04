import { Navigate, useParams } from 'react-router-dom'
import { usePortalSession } from '../../context/PortalSessionContext'
import DesignSystemPage from '../DesignSystemPage'
import { getPortalRoleHome } from '../../services/portalService'

/** O Design System é uma área interna, restrita ao perfil de diretoria. */
function PortalDesignSystemPage() {
  const { role: roleParam } = useParams()
  const { session, role } = usePortalSession()

  if (!session || !role) {
    return <Navigate to="/portal/login" replace />
  }

  if (roleParam !== role.id || role.id !== 'diretoria') {
    return <Navigate to={getPortalRoleHome(role.id)} replace />
  }

  return <DesignSystemPage />
}

export default PortalDesignSystemPage
