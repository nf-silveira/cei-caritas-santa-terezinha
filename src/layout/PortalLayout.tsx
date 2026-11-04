import { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import Badge from '../components/common/Badge'
import PortalHeader from '../components/portal/PortalHeader'
import PortalNav from '../components/portal/PortalNav'
import { usePortalSession } from '../context/PortalSessionContext'
import { siteImages } from '../data/siteImages'
import './PortalLayout.css'

function PortalLayout() {
  const { session, role, unit } = usePortalSession()
  const location = useLocation()
  // O menu guarda o caminho em que foi aberto, então fecha sozinho ao navegar.
  const [navState, setNavState] = useState({ open: false, path: location.pathname })
  const navOpen = navState.open && navState.path === location.pathname

  useEffect(() => {
    if (!navOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setNavState({ open: false, path: location.pathname })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navOpen, location.pathname])

  if (!session || !role) {
    return <Navigate to="/portal/login" replace />
  }

  return (
    <div className="portal-shell">
      <a className="skip-link" href="#portal-conteudo">
        Ir para o conteúdo do portal
      </a>

      <PortalHeader navOpen={navOpen} onToggleNav={() => setNavState({ open: !navOpen, path: location.pathname })} />

      <div className="portal-shell__body">
        <aside className="portal-shell__sidebar">
          <Link to="/" className="portal-shell__brand">
            <img
              src={siteImages.logo.src}
              alt=""
              aria-hidden="true"
              className="portal-shell__logo"
              width={900}
              height={600}
            />
            <span className="portal-shell__brand-text">
              <span className="portal-shell__brand-name">CEI Cáritas Santa Terezinha</span>
              <span className="portal-shell__brand-label">Portal demonstrativo</span>
            </span>
          </Link>

          <PortalNav role={role} />

          <div className="portal-shell__aside-footer">
            <p className="portal-shell__unit">{unit?.name}</p>
            <Badge tone="warning">Ambiente demonstrativo</Badge>
            <Link to="/" className="portal-shell__site-link">
              Voltar ao site público
            </Link>
          </div>
        </aside>

        <div className="portal-shell__drawer" id="portal-menu" hidden={!navOpen}>
          <PortalNav role={role} onNavigate={() => setNavState({ open: false, path: location.pathname })} />
        </div>

        <main id="portal-conteudo" className="portal-shell__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default PortalLayout
