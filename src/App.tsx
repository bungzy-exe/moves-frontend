import { Route, Routes } from 'react-router'
import CreateAccountPage from './pages/CreateAccountPage'
import LoginPage from './pages/LoginPage'
import WelcomePage from './pages/WelcomePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/register" element={<CreateAccountPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}