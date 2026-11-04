import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import type { NavItem } from '../../types/navigation'
import './NavMenu.css'

interface NavMenuProps {
  items: NavItem[]
  ariaLabel?: string
  /** Ação em destaque exibida junto à navegação. */
  cta?: ReactNode
}

function NavMenu({ items, ariaLabel = 'Navegação principal', cta }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return
      setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isOpen])

  return (
    <nav className="ds-nav" aria-label={ariaLabel}>
      <button
        ref={toggleRef}
        type="button"
        className="ds-nav__toggle"
        aria-expanded={isOpen}
        aria-controls="ds-nav-panel"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        <span className="visually-hidden">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
      </button>

      <div ref={panelRef} id="ds-nav-panel" className={`ds-nav__panel${isOpen ? ' ds-nav__panel--open' : ''}`}>
        <ul className="ds-nav__list">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => ['ds-nav__link', isActive ? 'ds-nav__link--active' : ''].join(' ')}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {cta ? <div className="ds-nav__cta">{cta}</div> : null}
      </div>
    </nav>
  )
}

export default NavMenu
