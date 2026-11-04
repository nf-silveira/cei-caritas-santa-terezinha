import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  BookOpen,
  Building2,
  ClipboardList,
  FileText,
  Inbox,
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  NotebookPen,
  Users,
  Wallet,
  CalendarDays,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import type { PortalRole } from '../../types/portal'
import './PortalNav.css'

const moduleIcons: Record<string, LucideIcon> = {
  comunicados: Megaphone,
  presencas: CalendarDays,
  mensalidades: Wallet,
  autorizacoes: FileText,
  turmas: Users,
  chamada: ClipboardList,
  planejamento: BookOpen,
  registros: NotebookPen,
  matriculas: ClipboardList,
  documentos: FileText,
  atendimentos: MessageSquare,
  cadastros: Users,
  indicadores: BarChart3,
  unidades: Building2,
  equipe: Users,
}

interface PortalNavProps {
  role: PortalRole
  /** Fecha a navegação compacta depois de escolher uma área. */
  onNavigate?: () => void
}

function PortalNav({ role, onNavigate }: PortalNavProps) {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    ['portal-nav__link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')

  return (
    <nav className="portal-nav" aria-label={`Áreas do perfil ${role.label}`}>
      <p className="portal-nav__title">Área do perfil</p>

      <ul className="portal-nav__list">
        <li>
          <NavLink to={`/portal/${role.id}`} end className={linkClasses} onClick={onNavigate}>
            <span className="portal-nav__icon" aria-hidden="true">
              <LayoutDashboard size={18} />
            </span>
            Visão geral
          </NavLink>
        </li>

        {role.modules.map((module) => {
          const Icon = moduleIcons[module.id] ?? Inbox

          return (
            <li key={module.id}>
              <NavLink
                to={`/portal/${role.id}/${module.id}`}
                className={linkClasses}
                onClick={onNavigate}
              >
                <span className="portal-nav__icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                {module.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default PortalNav
