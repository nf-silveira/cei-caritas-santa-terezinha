import { BrowserRouter } from 'react-router-dom'
import PortalSessionProvider from '../context/PortalSessionProvider'
import AppRoutes from '../routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <PortalSessionProvider>
        <AppRoutes />
      </PortalSessionProvider>
    </BrowserRouter>
  )
}

export default App
