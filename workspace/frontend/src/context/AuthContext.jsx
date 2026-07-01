import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (username, password) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Login failed')

      setUser(data)
      // SECURITY NOTE: We are currently using localStorage for session persistence.
      // If this app handles super critical data in the future, we would migrate 
      // this Token to an HTTP-Only Cookie to mitigate XSS risks.
      localStorage.setItem('user', JSON.stringify(data))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const register = async (username, password) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message || 'Registration failed')

      setUser(data)
      // SECURITY NOTE: We are currently using localStorage for session persistence.
      // If this app handles super critical data in the future, we would migrate 
      // this Token to an HTTP-Only Cookie to mitigate XSS risks.
      localStorage.setItem('user', JSON.stringify(data))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
