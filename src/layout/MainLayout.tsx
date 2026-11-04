import { Link, Outlet } from 'react-router-dom'
import NavMenu from '../components/navigation/NavMenu'
import { publicNavItems } from '../data/navigation'
import { getInstitution } from '../services/institutionService'
import './MainLayout.css'

function MainLayout() {
  const institution = getInstitution()

  return (
    <div className="page">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="page-container site-header__inner">
          <Link to="/" className="site-header__brand">
            <span className="site-header__brand-mark" aria-hidden="true">
              CEI
            </span>
            <span className="site-header__brand-text">
              <span className="site-header__brand-name">{institution.name}</span>
              <span className="site-header__brand-tagline">Protótipo demonstrativo</span>
            </span>
          </Link>

          <NavMenu items={publicNavItems} />
        </div>
      </header>

      <main id="conteudo" className="page-main page-container">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="page-container site-footer__inner">
          <p className="site-footer__note">Projeto demonstrativo, sem vínculo oficial. Todos os dados são fictícios.</p>
          <p className="site-footer__contact">
            {institution.address} · {institution.email}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
