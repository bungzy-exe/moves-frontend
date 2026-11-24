import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { logIn } from '../api/auth'
import BackButton from '../components/BackButton'
import Banner from '../components/Banner'
import Button from '../components/Button'
import TextField from '../components/TextField'
import './LoginPage.css'

type FieldErrors = { email?: string; password?: string }
type Problem = 'wrong-credentials' | 'unreachable' | null

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// LI-03: only empty or malformed fields are checked before sending.
function validate(email: string, password: string): FieldErrors {
  const errors: FieldErrors = {}
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = 'Enter your email.'
  if (password.length < 8) errors.password = 'At least 8 characters.'
  return errors
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [problem, setProblem] = useState<Problem>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return // LI-05: taps are ignored while logging in.

    const newErrors = validate(email, password)
    setErrors(newErrors)
    setProblem(null)
    if (newErrors.email || newErrors.password) return

    setSubmitting(true)
    const result = await logIn(email.trim(), password)
    setSubmitting(false)

    if (result === 'ok') {
      navigate('/today', { replace: true })
    } else {
      // LI-04 or LI-06. The typed values stay in the fields.
      setProblem(result)
    }
  }

  return (
    <div className="login">
      <header className="login__bar">
        <BackButton disabled={submitting} />
      </header>

      <form className="login__content" onSubmit={handleSubmit} noValidate>
        <div className="login__form">
          <h1 className="login__title">Log in</h1>

          {problem === 'wrong-credentials' && (
            <Banner
              title="Couldn’t log in"
              body="The email or password isn’t right. Check both and try again."
            />
          )}
          {problem === 'unreachable' && (
            <Banner title="Couldn’t log in" body="Check your connection and try again." />
          )}

          <div className="login__fields">
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              error={errors.email}
              readOnly={submitting}
              value={email}
              onChange={(value) => {
                setEmail(value)
                setErrors({ ...errors, email: undefined })
              }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
              canReveal
              error={errors.password}
              readOnly={submitting}
              value={password}
              onChange={(value) => {
                setPassword(value)
                setErrors({ ...errors, password: undefined })
              }}
            />
          </div>
        </div>

        <div className="login__actions">
          <Button type="submit">{submitting ? 'Logging in…' : 'Log in'}</Button>
          <p className="login__switch">
            New to Moves?
            {submitting ? (
              <span className="login__switch-link login__switch-link--disabled">Create account</span>
            ) : (
              <Link className="login__switch-link" to="/register">
                Create account
              </Link>
            )}
          </p>
        </div>
      </form>
    </div>
  )
}