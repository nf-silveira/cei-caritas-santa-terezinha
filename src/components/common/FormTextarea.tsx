import type { TextareaHTMLAttributes } from 'react'
import { AlertCircle } from 'lucide-react'
import './FormField.css'

interface FormTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  id: string
  label: string
  hint?: string
  error?: string
}

function FormTextarea({ id, label, hint, error, required = false, rows = 5, className = '', ...rest }: FormTextareaProps) {
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

      <textarea
        id={id}
        className="ds-field__input ds-field__input--textarea"
        rows={rows}
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

export default FormTextarea
