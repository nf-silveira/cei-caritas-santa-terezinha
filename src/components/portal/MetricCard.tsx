import type { PortalMetric } from '../../types/portal'
import './MetricCard.css'

function MetricCard({ metric }: { metric: PortalMetric }) {
  const tone = metric.tone ?? 'neutral'

  return (
    <article className={`portal-metric portal-metric--${tone}`}>
      <h3 className="portal-metric__label">{metric.label}</h3>
      <p className="portal-metric__value">{metric.value}</p>
      <p className="portal-metric__hint">{metric.hint}</p>
    </article>
  )
}

export default MetricCard
