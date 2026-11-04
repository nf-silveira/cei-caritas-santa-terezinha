import { LogOut, Menu } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '../common/Avatar'
import Badge from '../common/Badge'
import { usePortalSession } from '../../context/PortalSessionContext'
import { siteImages } from '../../data/siteImages'
import NotificationsPanel from './NotificationsPanel'
import UnitSelector from './UnitSelector'
import './PortalHeader.css'

interface PortalHeaderProps {
  navOpen: boolean
  onToggleNav: () => void
}

function PortalHeader({ navOpen, onToggleNav }: PortalHeaderProps) {
  const { session, role, logout } = usePortalSession()
  const navigate = useNavigate()

  if (!session || !role) {
    return null
  }

  const firstName = role.demoUserName.split(' ')[0]

  const handleLogout = () => {
    logout()
    navigate('/portal/login', { replace: true })
  }

  return (
    <header className="portal-header">
      <div className="portal-header__inner">
        <button
          type="button"
          className="portal-header__menu"
          aria-expanded={navOpen}
          aria-controls="portal-menu"
          onClick={onToggleNav}
        >
          <Menu size={20} aria-hidden="true" />
          <span className="visually-hidden">{navOpen ? 'Fechar menu do portal' : 'Abrir menu do portal'}</span>
        </button>

        <Link to={`/portal/${role.id}`} className="portal-header__brand">
          <img
            src={siteImages.logo.src}
            alt=""
            aria-hidden="true"
            className="portal-header__logo"
            width={900}
            height={600}
          />
          <span className="portal-header__brand-text">
            <span className="portal-header__brand-name">CEI Cáritas Santa Terezinha</span>
            <span className="portal-header__brand-label">Portal demonstrativo</span>
          </span>
        </Link>

        <div className="portal-header__unit">
          <UnitSelector />
        </div>

        <div className="portal-header__actions">
          <Badge tone="warning" className="portal-header__badge">
            Demonstração
          </Badge>

          <NotificationsPanel roleId={session.roleId} />

          <div className="portal-header__user">
            <Avatar name={role.demoUserName} size="sm" />
            <span className="portal-header__user-text">
              <span className="portal-header__user-name">{firstName}</span>
              <span className="portal-header__user-role">{role.label}</span>
            </span>
          </div>

          <button type="button" className="portal-header__logout" onClick={handleLogout}>
            <LogOut size={18} aria-hidden="true" />
            <span className="portal-header__logout-label">Sair</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default PortalHeader
