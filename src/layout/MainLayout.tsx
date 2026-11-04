import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <header className="border-bottom">
        <nav className="container d-flex gap-3 py-3">
          <Link to="/">Início</Link>
          <Link to="/portal">Portal</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default MainLayout
