import Button from '../components/Button'
import Logo from '../components/Logo'
import './WelcomePage.css'

export default function WelcomePage() {
  return (
    <main className="welcome">
      <div className="welcome__logo">
        <Logo />
      </div>

      <div className="welcome__message">
        <h1 className="welcome__title">Your everyday journeys, in one place.</h1>
        <p className="welcome__text">
          Record how you get around and see patterns in your travel time and CO₂e.
        </p>
      </div>

      <div className="welcome__actions">
        <Button href="/register">Create account</Button>
        <Button href="/login" variant="secondary">
          Log in
        </Button>
      </div>
    </main>
  )
}