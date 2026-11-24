import type { ReactNode } from 'react'
import './Button.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'neutral'
  // With href, the button is a link to another screen.
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) {
  const className = `button button--${variant}`

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}