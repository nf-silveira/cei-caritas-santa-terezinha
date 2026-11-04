import { Navigate, Route, Routes } from 'react-router-dom'
import { usePortalSession } from '../context/PortalSessionContext'
import MainLayout from '../layout/MainLayout'
import PortalLayout from '../layout/PortalLayout'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import EventsPage from '../pages/EventsPage'
import FaqPage from '../pages/FaqPage'
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage'
import NotFoundPage from '../pages/NotFoundPage'
import WorkWithUsPage from '../pages/WorkWithUsPage'
import PortalCalendarPage from '../pages/portal/PortalCalendarPage'
import PortalDesignSystemPage from '../pages/portal/PortalDesignSystemPage'
import PortalLoginPage from '../pages/portal/PortalLoginPage'
import PortalModulePage from '../pages/portal/PortalModulePage'
import RoleDashboardPage from '../pages/portal/RoleDashboardPage'

/** Entrada do portal: leva ao painel do perfil ativo ou à tela de acesso. */
function PortalEntry() {
  const { session } = usePortalSession()

  return <Navigate to={session ? `/portal/${session.roleId}` : '/portal/login'} replace />
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/duvidas" element={<FaqPage />} />
        <Route path="/trabalhe-conosco" element={<WorkWithUsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="/portal/login" element={<PortalLoginPage />} />

      <Route path="/portal" element={<PortalLayout />}>
        <Route index element={<PortalEntry />} />
        <Route path=":role" element={<RoleDashboardPage />} />
        <Route path=":role/calendario" element={<PortalCalendarPage />} />
        <Route path=":role/design-system" element={<PortalDesignSystemPage />} />
        <Route path=":role/:module" element={<PortalModulePage />} />
        <Route path="*" element={<PortalEntry />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
