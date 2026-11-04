import { Link } from 'react-router-dom'
import EmptyState from '../components/common/EmptyState'
import { SearchX } from 'lucide-react'

function NotFoundPage() {
  return (
    <EmptyState
      icon={<SearchX size={22} />}
      title="Página não encontrada"
      description="O endereço acessado não existe neste protótipo."
      action={<Link to="/">Voltar ao início</Link>}
    />
  )
}

export default NotFoundPage
