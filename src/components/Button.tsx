import type { ReactNode } from 'react'
import { Link } from 'react-router'
import './Button.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'neutral'

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
      <Link className={className} to={href}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}