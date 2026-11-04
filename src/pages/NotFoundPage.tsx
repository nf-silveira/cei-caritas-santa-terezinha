import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="container py-5">
      <h1 className="h2">Página não encontrada</h1>
      <Link to="/">Voltar ao início</Link>
    </main>
  )
}

export default NotFoundPage
