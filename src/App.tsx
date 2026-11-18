import { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Checking backend…')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setMessage(`Backend: ${data.status}, database: ${data.database}`))
      .catch(() => setMessage('Backend not reachable'))
  }, [])

  return (
    <main>
      <h1>Moves</h1>
      <p>{message}</p>
    </main>
  )
}