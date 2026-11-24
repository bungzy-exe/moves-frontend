import { useState } from 'react'
import eyeIcon from '../assets/icon-eye.svg'
import eyeOffIcon from '../assets/icon-eye-off.svg'
import './TextField.css'

type TextFieldProps = {
  id: string
  label: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  helper?: string
 
  error?: string
  autoComplete?: string
  
  canReveal?: boolean
  readOnly?: boolean
  value: string
  onChange: (value: string) => void
}

export default function TextField({
  id,
  label,
  type = 'text',
  placeholder,
  helper,
  error,
  autoComplete,
  canReveal = false,
  readOnly = false,
  value,
  onChange,
}: TextFieldProps) {
  const [revealed, setRevealed] = useState(false)

  const message = error ?? helper
  const messageId = message ? `${id}-message` : undefined
  const inputType = type === 'password' && revealed ? 'text' : type

  return (
    <div className={error ? 'text-field text-field--error' : 'text-field'}>
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>

      <div className="text-field__control">
        <input
          className="text-field__input"
          id={id}
          name={id}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={messageId}
          readOnly={readOnly}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />

        {canReveal && (
          <button
            type="button"
            className="text-field__reveal"
            aria-label={revealed ? 'Hide password' : 'Show password'}
            aria-pressed={revealed}
            onClick={() => setRevealed(!revealed)}
          >
            <img src={revealed ? eyeOffIcon : eyeIcon} alt="" width={20} height={20} />
          </button>
        )}
      </div>

      {message && (
        <p className="text-field__message" id={messageId}>
          {message}
        </p>
      )}
    </div>
  )
}