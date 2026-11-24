

export type LogInResult = 'ok' | 'wrong-credentials' | 'unreachable'

export async function logIn(email: string, password: string): Promise<LogInResult> {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) return 'ok'
    // 401 = the backend checked and the email or password is wrong.
    if (response.status === 401) return 'wrong-credentials'
    // Anything else (backend down, route missing, server error).
    return 'unreachable'
  } catch {
    // No network at all.
    return 'unreachable'
  }
}