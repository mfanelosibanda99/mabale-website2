import { createContext, useContext, useState } from 'react'
import { login as apiLogin } from '../Lib/api'

// Where each role lands after logging in
export const roleHome = {
  admin: '/portal/admin',
  teacher: '/portal/teacher',
  parent: '/portal/parent',
}

const AuthContext = createContext(null)
const STORAGE_KEY = 'mabale-demo-user'

export function AuthProvider({ children }) {
  // Keep the demo user when the page is refreshed
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
    } catch {
      return null
    }
  })

  async function login(email, password) {
    const loggedIn = await apiLogin(email, password)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(loggedIn))
    setUser(loggedIn)
    return loggedIn
  }

  function logout() {
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}