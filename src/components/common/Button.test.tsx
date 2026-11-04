import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Button from './Button'

describe('Button', () => {
  it('renderiza um botão com o rótulo e o tipo padrão', () => {
    render(<Button>Confirmar</Button>)

    const button = screen.getByRole('button', { name: 'Confirmar' })
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('ds-btn--primary', 'ds-btn--md')
  })

  it('aplica a variação e o tamanho informados', () => {
    render(
      <Button variant="outline" size="lg">
        Ver detalhes
      </Button>,
    )

    const button = screen.getByRole('button', { name: 'Ver detalhes' })
    expect(button).toHaveClass('ds-btn--outline', 'ds-btn--lg')
  })

  it('vira um link de rota quando recebe a prop to', () => {
    render(
      <MemoryRouter>
        <Button to="/contato">Falar com a secretaria</Button>
      </MemoryRouter>,
    )

    const link = screen.getByRole('link', { name: 'Falar com a secretaria' })
    expect(link).toHaveAttribute('href', '/contato')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('respeita o estado desabilitado', () => {
    render(<Button disabled>Indisponível</Button>)

    expect(screen.getByRole('button', { name: 'Indisponível' })).toBeDisabled()
  })
})
