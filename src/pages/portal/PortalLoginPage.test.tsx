import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import PortalSessionProvider from '../../context/PortalSessionProvider'
import { expectNoA11yViolations } from '../../test/axe'
import PortalLoginPage from './PortalLoginPage'

function renderLoginPage() {
  return render(
    <MemoryRouter initialEntries={['/portal/login']}>
      <PortalSessionProvider>
        <Routes>
          <Route path="/portal/login" element={<PortalLoginPage />} />
          <Route path="/portal/:role" element={<p>Área do perfil aberta</p>} />
        </Routes>
      </PortalSessionProvider>
    </MemoryRouter>,
  )
}

describe('PortalLoginPage', () => {
  it('não apresenta violações de acessibilidade detectáveis pelo axe', async () => {
    window.sessionStorage.clear()

    const { container } = renderLoginPage()

    await expectNoA11yViolations(container)
  })

  it('entra com o perfil escolhido sem exigir e-mail ou senha', async () => {
    window.sessionStorage.clear()

    const user = userEvent.setup()
    renderLoginPage()

    await user.click(screen.getByRole('button', { name: /entrar como responsável/i }))

    expect(await screen.findByText('Área do perfil aberta')).toBeInTheDocument()
  })

  it('abre o perfil selecionado no seletor de demonstração', async () => {
    window.sessionStorage.clear()

    const user = userEvent.setup()
    renderLoginPage()

    await user.selectOptions(screen.getByLabelText('Perfil de demonstração'), 'professor')
    await user.click(screen.getByRole('button', { name: /entrar como professor/i }))

    expect(await screen.findByText('Área do perfil aberta')).toBeInTheDocument()
  })
})
