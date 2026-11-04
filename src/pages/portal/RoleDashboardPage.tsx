import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Alert from '../../components/common/Alert'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import Card from '../../components/common/Card'
import MetricCard from '../../components/portal/MetricCard'
import { usePortalSession } from '../../context/PortalSessionContext'
import { getPortalRoleHome, getPortalWorkspace } from '../../services/portalService'
import type { PortalTone } from '../../types/portal'
import './PortalPages.css'

const toneLabels: Record<PortalTone, string> = {
  neutral: 'Informativo',
  positive: 'Tudo certo',
  warning: 'Atenção',
  danger: 'Pendência',
}

function RoleDashboardPage() {
  const { role: roleParam } = useParams()
  const { session, role, unit } = usePortalSession()

  if (!session || !role) {
    return <Navigate to="/portal/login" replace />
  }

  // A navegação é apenas demonstrativa: cada perfil vê somente o próprio painel.
  if (roleParam !== role.id) {
    return <Navigate to={getPortalRoleHome(role.id)} replace />
  }

  const workspace = getPortalWorkspace(role.id)
  const firstModule = role.modules[0]

  return (
    <div className="portal-page">
      <header className="portal-page__header">
        <div>
          <p className="portal-page__eyebrow">Visão geral · {role.label}</p>
          <h1 className="portal-page__title">{workspace.headline}</h1>
          <p className="portal-page__summary">{workspace.summary}</p>
          <p className="portal-page__unit">
            Unidade em uso: <strong>{unit?.name}</strong>
            {unit ? ` · ${unit.segment}` : null}
          </p>
        </div>

        <Badge tone="warning">Dados fictícios</Badge>
      </header>

      <Alert variant="warning" title="Ambiente demonstrativo">
        Este portal não possui autenticação, banco de dados ou integração real. Os números, nomes e avisos
        abaixo são apenas ilustrativos.
      </Alert>

      <section aria-labelledby="portal-indicadores">
        <h2 className="visually-hidden" id="portal-indicadores">
          Indicadores do perfil
        </h2>

        <div className="portal-page__metrics">
          {workspace.metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <div className="portal-page__columns">
        <Card
          title="Agenda demonstrativa"
          subtitle={unit ? `Compromissos de ${unit.name}` : undefined}
          footer={<Link to={`/portal/${role.id}/calendario`}>Abrir calendário completo</Link>}
        >
          <ul className="portal-agenda">
            {workspace.agenda.map((item) => (
              <li key={item.id}>
                <span className="portal-agenda__date">{item.date}</span>
                <div>
                  <p className="portal-agenda__title">{item.title}</p>
                  <p className="portal-agenda__detail">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card
          title="Mural de avisos"
          subtitle="Comunicados simulados da unidade"
          footer={
            firstModule ? (
              <Link to={`/portal/${role.id}/${firstModule.id}`}>Abrir {firstModule.label.toLowerCase()}</Link>
            ) : undefined
          }
        >
          <ul className="portal-notices">
            {workspace.notices.map((notice) => (
              <li key={notice.id}>
                <div className="portal-notices__head">
                  <p className="portal-notices__title">{notice.title}</p>
                  {notice.tone ? <Badge tone={notice.tone}>{toneLabels[notice.tone]}</Badge> : null}
                </div>
                <p className="portal-notices__body">{notice.body}</p>
                <p className="portal-notices__time">{notice.time}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <section aria-labelledby="portal-acoes">
        <h2 className="portal-page__section-title" id="portal-acoes">
          Ações rápidas
        </h2>

        <div className="portal-page__actions">
          {workspace.quickActions.map((action) => (
            <Button
              key={action.id}
              to={`/portal/${role.id}/${action.moduleId}`}
              variant="outline"
              iconRight={<ArrowRight size={18} />}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </section>

      <p className="portal-page__note">
        Os módulos internos serão preenchidos nas próximas etapas. Nesta fase o portal entrega a estrutura
        visual, a navegação e o contexto de unidade.
      </p>
    </div>
  )
}

export default RoleDashboardPage
