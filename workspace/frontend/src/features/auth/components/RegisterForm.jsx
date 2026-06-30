import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { UserPlus } from 'lucide-react'
import { VStack } from '../../../shared/ui/VStack'
import { Input } from '../../../shared/ui/Input'
import { Button } from '../../../shared/ui/Button'

export default function RegisterForm({ onToggleMode }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (password !== confirmPassword) return setError('Passwords do not match')

    const result = await register(username, password)
    if (!result.success) setError(result.error)
  }

  return (
    <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
      <VStack className="text-center mb-8" gap="gap-2">
        <h2 className="text-3xl font-bold text-white tracking-tight">Create Account</h2>
        <p className="text-gray-400 text-sm">Join us to start managing your secure notes.</p>
      </VStack>

      <form onSubmit={handleSubmit}>
        <VStack gap="gap-5">
          {error && (
            <div className="p-3 text-sm text-red-200 bg-red-900/40 border border-red-500/50 rounded-lg text-center">
              {error}
            </div>
          )}

          <Input
            label="Username" type="text" required placeholder="Choose a username"
            value={username} onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            label="Password" type="password" required placeholder="••••••••"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm Password" type="password" required placeholder="••••••••"
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit" variant="success" className="w-full mt-2">
            <UserPlus size={18} /> Sign Up
          </Button>
        </VStack>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{' '}
        <button onClick={onToggleMode} className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer">
          Sign in here
        </button>
      </div>
    </div>
  )
}
