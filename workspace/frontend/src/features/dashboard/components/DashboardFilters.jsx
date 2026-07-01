import { Plus, Tags } from 'lucide-react'

export default function DashboardFilters({ 
  showArchived, 
  setShowArchived, 
  activeNotesCount, 
  archivedNotesCount, 
  onNewNote,
  onManageTags
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
        <button 
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer ${!showArchived ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          onClick={() => setShowArchived(false)}
        >
          Active Notes ({activeNotesCount})
        </button>
        <button 
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer ${showArchived ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          onClick={() => setShowArchived(true)}
        >
          Archived ({archivedNotesCount})
        </button>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={onManageTags}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 rounded-xl font-medium transition-all border border-white/10 active:scale-95 cursor-pointer"
        >
          <Tags size={18} /> Manage Tags
        </button>

        <button 
          onClick={onNewNote}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95 cursor-pointer"
        >
          <Plus size={18} /> New Note
        </button>
      </div>
    </div>
  )
}
