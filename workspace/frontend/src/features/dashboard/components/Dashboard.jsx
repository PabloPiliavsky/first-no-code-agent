import { LogOut } from 'lucide-react'

const Dashboard = ({ user, logout }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            Secure<span className="text-indigo-500">Notes</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Welcome, {user.username}</span>
            <button 
              onClick={logout}
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">Dashboard (Work in progress)</h2>
          <p className="text-gray-400">Your notes will appear here soon.</p>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
