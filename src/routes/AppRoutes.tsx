import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import DesignSystemPage from '../pages/DesignSystemPage'
import EventsPage from '../pages/EventsPage'
import HomePage from '../pages/HomePage'
import NewsPage from '../pages/NewsPage'
import NotFoundPage from '../pages/NotFoundPage'
import PortalPage from '../pages/PortalPage'
import UnitsPage from '../pages/UnitsPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/unidades" element={<UnitsPage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
