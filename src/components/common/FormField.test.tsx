import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import FormField from './FormField'
import FormTextarea from './FormTextarea'

describe('FormField', () => {
  it('associa o rótulo ao campo e exige o preenchimento quando necessário', () => {
    render(<FormField id="nome" label="Nome completo" required />)

    const input = screen.getByLabelText(/Nome completo/)
    expect(input).toBeRequired()
    expect(input).toHaveAttribute('id', 'nome')
  })

  it('conecta dica e erro ao campo por aria-describedby', () => {
    render(
      <FormField
        id="telefone"
        label="Telefone"
        hint="Informe o DDD."
        error="Informe um telefone com DDD."
        defaultValue="0000"
      />,
    )

    const input = screen.getByLabelText('Telefone')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription(/Informe o DDD\. Informe um telefone com DDD\./)
  })

  it('não marca o campo como inválido sem erro', () => {
    render(<FormField id="email" label="E-mail" type="email" />)

    expect(screen.getByLabelText('E-mail')).not.toHaveAttribute('aria-invalid')
  })
})

describe('FormTextarea', () => {
  it('renderiza uma área de texto acessível com rótulo e erro', () => {
    render(<FormTextarea id="mensagem" label="Mensagem" error="Escreva sua mensagem." required />)

    const textarea = screen.getByLabelText(/Mensagem/)
    expect(textarea.tagName).toBe('TEXTAREA')
    expect(textarea).toBeRequired()
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAccessibleDescription('Escreva sua mensagem.')
  })
})
