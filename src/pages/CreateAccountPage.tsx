import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import TextField from '../components/TextField'
import './CreateAccountPage.css'

export default function CreateAccountPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    
    event.preventDefault()
   
  }

  return (
    <div className="create-account">
      <header className="create-account__bar">
        <BackButton />
      </header>

      <form className="create-account__content" onSubmit={handleSubmit} noValidate>
        <div className="create-account__form">
          <h1 className="create-account__title">Create account</h1>

          <div className="create-account__fields">
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              value={email}
              onChange={setEmail}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="Choose a password"
              helper="At least 8 characters."
              autoComplete="new-password"
              value={password}
              onChange={setPassword}
            />
            <p className="create-account__note">
              Moves saves your email, journeys and the places you choose. It doesn’t automatically
              track your location.
            </p>
          </div>
        </div>

        <div className="create-account__actions">
          <Button type="submit">Create account</Button>
          <p className="create-account__switch">
            Already have an account?
            <Link className="create-account__switch-link" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}