import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { roleHome, useAuth } from './AuthContext'

// Usage: <ProtectedRoute allow={['admin']} />
export default function ProtectedRoute({ allow }) {
  const { user } = useAuth()
  const location = useLocation()

  // Not logged in: go to the login page, and remember where they wanted to go
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  // Logged in with the wrong role: send them to their own dashboard
  if (allow && !allow.includes(user.role)) {
    return <Navigate to={roleHome[user.role]} replace />
  }

  return <Outlet />
}