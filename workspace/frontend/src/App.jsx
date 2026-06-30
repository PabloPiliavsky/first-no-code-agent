import { useAuth } from './context/AuthContext'
import AuthPage from './features/auth/components/AuthPage'
import Dashboard from './features/dashboard/components/Dashboard'

function App() {
  const { user, logout } = useAuth()

  if (!user) {
    return <AuthPage />
  }

  return <Dashboard user={user} logout={logout} />
}

export default App
