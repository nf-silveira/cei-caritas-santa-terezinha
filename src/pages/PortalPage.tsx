import Button from '../components/common/Button'
import Card from '../components/common/Card'

function PortalPage() {
  return (
    <div>
      <h1>Portal demonstrativo</h1>
      <p>Área em construção. O portal privado será estruturado em uma etapa futura.</p>
      <Card title="Acesso restrito" subtitle="Demonstração">
        <p>Nesta etapa não há autenticação real: o acesso serve apenas para validar a navegação.</p>
        <Button to="/" variant="ghost">
          Voltar ao início
        </Button>
      </Card>
    </div>
  )
}

export default PortalPage
