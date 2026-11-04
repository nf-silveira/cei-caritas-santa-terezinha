import { useState } from 'react'
import { Bell } from 'lucide-react'
import { getPortalNotifications } from '../../services/portalService'
import type { PortalRoleId } from '../../types/portal'
import './NotificationsPanel.css'

const panelId = 'portal-notificacoes'

function NotificationsPanel({ roleId }: { roleId: PortalRoleId }) {
  const [open, setOpen] = useState(false)
  const notifications = getPortalNotifications(roleId)

  return (
    <div
      className="portal-notifications"
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false)
        }
      }}
    >
      <button
        type="button"
        className="portal-notifications__button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <Bell size={20} aria-hidden="true" />
        <span className="visually-hidden">Notificações demonstrativas</span>
        <span className="portal-notifications__count" aria-hidden="true">
          {notifications.length}
        </span>
      </button>

      {open ? (
        <div className="portal-notifications__panel" id={panelId} role="region" aria-label="Notificações demonstrativas">
          <p className="portal-notifications__title">Notificações</p>

          <ul className="portal-notifications__list">
            {notifications.map((notification) => (
              <li key={notification.id}>
                <p className="portal-notifications__item-title">{notification.title}</p>
                <p className="portal-notifications__item-text">{notification.description}</p>
                <p className="portal-notifications__time">{notification.time}</p>
              </li>
            ))}
          </ul>

          <p className="portal-notifications__note">
            Avisos simulados. Nenhuma notificação real é enviada pelo portal.
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default NotificationsPanel
