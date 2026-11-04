import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PortalSessionProvider from '../../context/PortalSessionProvider'
import { expectNoA11yViolations } from '../../test/axe'
import PortalLoginPage from './PortalLoginPage'

describe('PortalLoginPage', () => {
  it('não apresenta violações de acessibilidade detectáveis pelo axe', async () => {
    window.sessionStorage.clear()

    const { container } = render(
      <MemoryRouter initialEntries={['/portal/login']}>
        <PortalSessionProvider>
          <PortalLoginPage />
        </PortalSessionProvider>
      </MemoryRouter>,
    )

    await expectNoA11yViolations(container)
  })
})
