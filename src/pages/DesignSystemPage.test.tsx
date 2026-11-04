import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import DesignSystemPage from './DesignSystemPage'
import { expectNoA11yViolations } from '../test/axe'

describe('DesignSystemPage', () => {
  it('não apresenta violações de acessibilidade detectáveis pelo axe', async () => {
    const { container } = render(
      <MemoryRouter>
        <DesignSystemPage />
      </MemoryRouter>,
    )

    await expectNoA11yViolations(container)
  })
})
