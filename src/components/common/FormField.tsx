import type { InputHTMLAttributes } from 'react'
import { AlertCircle } from 'lucide-react'
import './FormField.css'

interface FormFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string
  label: string
  /** Texto de apoio exibido abaixo do campo. */
  hint?: string
  /** Mensagem de erro exibida abaixo do campo. */
  error?: string
}

function FormField({ id, label, hint, error, required = false, className = '', ...rest }: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')}>
      <label className="ds-field__label" htmlFor={id}>
        {label}
        {required ? (
          <span className="ds-field__required" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>

      <input
        id={id}
        className="ds-field__input"
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />

      {hint ? (
        <p className="ds-field__hint" id={hintId}>
          {hint}
        </p>
      ) : null}

      {error ? (
        <p className="ds-field__error" id={errorId}>
          <AlertCircle size={16} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default FormField
