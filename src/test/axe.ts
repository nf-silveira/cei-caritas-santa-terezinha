import * as axe from 'axe-core'
import { expect } from 'vitest'

/**
 * Executa a verificação do axe-core no container informado e falha o teste
 * listando as violações encontradas.
 *
 * A regra de contraste é desativada porque o jsdom não calcula cores e
 * tamanhos como um navegador real; o contraste é validado visualmente nos tokens.
 */
export async function expectNoA11yViolations(container: HTMLElement): Promise<void> {
  const results = await axe.run(container, {
    rules: {
      'color-contrast': { enabled: false },
    },
  })

  const violations = results.violations.map(
    (violation) => `${violation.id}: ${violation.help} (${violation.nodes.length} ocorrência(s))`,
  )

  expect(violations, `Violações de acessibilidade:\n${violations.join('\n')}`).toEqual([])
}
