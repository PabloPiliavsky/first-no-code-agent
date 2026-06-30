import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { LogIn } from 'lucide-react'
import { VStack } from '../../../shared/ui/VStack'
import { Input } from '../../../shared/ui/Input'
import { Button } from '../../../shared/ui/Button'

export default function LoginForm({ onToggleMode }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const result = await login(username, password)
    if (!result.success) setError(result.error)
  }

  return (
    <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
      <VStack className="text-center mb-8" gap="gap-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h2>
        <p className="text-gray-400 text-sm">Sign in to access your secure notes.</p>
      </VStack>

      <form onSubmit={handleSubmit}>
        <VStack gap="gap-6">
          {error && (
            <div className="p-3 text-sm text-red-200 bg-red-900/40 border border-red-500/50 rounded-lg text-center">
              {error}
            </div>
          )}

          <Input
            label="Username" type="text" required placeholder="Enter your username"
            value={username} onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            label="Password" type="password" required placeholder="••••••••"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" variant="primary" className="w-full">
            <LogIn size={18} /> Sign In
          </Button>
        </VStack>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        Don't have an account?{' '}
        <button onClick={onToggleMode} className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer">
          Register here
        </button>
      </div>
    </div>
  )
}
