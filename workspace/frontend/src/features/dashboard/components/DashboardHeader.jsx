import { LogOut } from 'lucide-react'

export default function DashboardHeader({ user, logout }) {
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">
          Secure<span className="text-indigo-500">Notes</span>
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Welcome, {user.username}</span>
          <button 
            onClick={logout}
            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
