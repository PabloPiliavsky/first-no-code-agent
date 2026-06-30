import { useState } from 'react'
import { LogOut, Plus, Search } from 'lucide-react'
import { useNotes } from '../../notes/hooks/useNotes'
import NoteCard from '../../notes/components/NoteCard'
import NoteForm from '../../notes/components/NoteForm'

export default function Dashboard({ user, logout }) {
  const { notes, loading, error, createNote, updateNote, deleteNote, archiveNote } = useNotes()
  const [showArchived, setShowArchived] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  
  const activeNotes = notes.filter(n => !n.archived)
  const archivedNotes = notes.filter(n => n.archived)
  const displayedNotes = showArchived ? archivedNotes : activeNotes

  const handleCreateOrUpdate = async (id, data) => {
    if (id) {
      return await updateNote(id, data)
    } else {
      return await createNote(data.title, data.content)
    }
  }

  const openEdit = (note) => {
    setEditingNote(note)
    setIsFormOpen(true)
  }

  const closeForm = () => {
    setEditingNote(null)
    setIsFormOpen(false)
  }

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
              className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <button 
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer ${!showArchived ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              onClick={() => setShowArchived(false)}
            >
              Active Notes ({activeNotes.length})
            </button>
            <button 
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer ${showArchived ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              onClick={() => setShowArchived(true)}
            >
              Archived ({archivedNotes.length})
            </button>
          </div>

          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95 cursor-pointer"
          >
            <Plus size={18} /> New Note
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center text-gray-400 py-20">Loading notes...</div>
        ) : error ? (
          <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-200 text-center">
            {error}
          </div>
        ) : displayedNotes.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl border-dashed">
            <p className="text-gray-400">
              {showArchived ? "You don't have any archived notes." : "You don't have any active notes."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedNotes.map(note => (
              <NoteCard 
                key={note.id} 
                note={note} 
                onEdit={openEdit}
                onArchive={archiveNote}
                onDelete={deleteNote}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isFormOpen && (
        <NoteForm 
          initialData={editingNote} 
          onSubmit={handleCreateOrUpdate} 
          onClose={closeForm} 
        />
      )}
    </div>
  )
}
