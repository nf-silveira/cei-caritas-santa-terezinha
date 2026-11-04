import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import DesignSystemPage from '../pages/DesignSystemPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import PortalPage from '../pages/PortalPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
