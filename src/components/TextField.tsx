import './TextField.css'

type TextFieldProps = {
  id: string
  label: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  helper?: string
  autoComplete?: string
  value: string
  onChange: (value: string) => void
}

export default function TextField({
  id,
  label,
  type = 'text',
  placeholder,
  helper,
  autoComplete,
  value,
  onChange,
}: TextFieldProps) {
  const helperId = helper ? `${id}-helper` : undefined

  return (
    <div className="text-field">
      <label className="text-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="text-field__input"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-describedby={helperId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {helper && (
        <p className="text-field__helper" id={helperId}>
          {helper}
        </p>
      )}
    </div>
  )
}