import { useState } from 'react'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { roleHome, useAuth } from '../Auth/AuthContext'
import { users } from '../Lib/mockData'
import { site } from '../Components/Data/Site'
import Button from '../Components/Ui/Button'

// Demo only: remove these helpers when real logins exist
const demoAccounts = users.map(({ role, email, password }) => ({ role, email, password }))

export default function Login() {
  const { user, login } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Already logged in: go to the page they wanted, or their own dashboard
  if (user) {
    const from = location.state?.from?.pathname
    return <Navigate to={from || roleHome[user.role]} replace />
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const inputStyles =
    'mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-royal focus:ring-2 focus:ring-royal/30'

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <Link to="/" className="flex items-center gap-3">
          <img src={site.logo} alt="" className="h-10 w-10" />
          <span className="font-display text-lg font-semibold text-navy">
            {site.name}
          </span>
        </Link>

        <h1 className="mt-8 font-display text-2xl font-semibold text-navy">
          Portal login
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Sign in to see your dashboard.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-navy">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-navy">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyles}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-600">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>

        {/* Demo helper: click a role to fill the form */}
        <div className="mt-8 rounded-2xl bg-blue-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-royal">
            Demo accounts (testing only)
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {demoAccounts.map((account) => (
              <button
                key={account.role}
                type="button"
                onClick={() => {
                  setEmail(account.email)
                  setPassword(account.password)
                }}
                className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold capitalize text-navy shadow-sm transition hover:bg-royal hover:text-white"
              >
                {account.role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}