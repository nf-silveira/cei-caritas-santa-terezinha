import { Link, Outlet } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import Button from '../components/common/Button'
import NavMenu from '../components/navigation/NavMenu'
import { identityItems } from '../data/identity'
import { publicNavItems, secondaryNavItems } from '../data/navigation'
import { siteImages } from '../data/siteImages'
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
          <Link to="/" className="site-header__brand" aria-label={`${institution.name} — página inicial`}>
            <img
              src={siteImages.logo.src}
              alt=""
              className="site-header__logo"
              width={900}
              height={600}
              aria-hidden="true"
            />
          </Link>

          <NavMenu
            items={publicNavItems}
            cta={
              <Button to="/portal" iconLeft={<LogIn size={18} />}>
                Portal
              </Button>
            }
          />
        </div>
      </header>

      <main id="conteudo" className="page-main page-container">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="page-container site-footer__grid">
          <div className="site-footer__brand">
            <p className="site-footer__about">{institution.summary}</p>
            <p className="site-footer__demo">
              Projeto demonstrativo, sem vínculo oficial. Todos os dados, endereços e contatos são fictícios.
            </p>

            <ul className="site-footer__symbols">
              {identityItems.map((item) => (
                <li key={item.title}>
                  <img src={item.image.src} alt={item.image.alt} width={96} height={96} loading="lazy" />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          <nav className="site-footer__column" aria-labelledby="footer-navegacao">
            <h2 className="site-footer__title" id="footer-navegacao">
              Navegação
            </h2>
            <ul className="site-footer__list">
              {publicNavItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              {secondaryNavItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__title" id="footer-contato">
              Contato
            </h2>
            <address className="site-footer__address">
              <span>{institution.address}</span>
              <span>Telefone: {institution.phone}</span>
              <span>E-mail: {institution.email}</span>
            </address>
          </div>

          <div className="site-footer__column">
            <h2 className="site-footer__title">Atendimento</h2>
            <p className="site-footer__text">{institution.hours}</p>
            <p className="site-footer__text">Atendimento em período integral para bebês e crianças de 0 a 4 anos.</p>
          </div>
        </div>

        <div className="page-container site-footer__bottom">
          <p>© {new Date().getFullYear()} CEI Cáritas Santa Terezinha · Protótipo demonstrativo</p>
          <p className="site-footer__credit">
            Desenvolvido por{' '}
            <a href="https://github.com/nf-silveira" target="_blank" rel="noopener noreferrer">
              nf-silveira
              <span className="visually-hidden"> no GitHub (abre em nova aba)</span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
