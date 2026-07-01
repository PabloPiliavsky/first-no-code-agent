import NoteCard from '../../notes/components/NoteCard'

export default function DashboardGrid({ 
  loading, 
  error, 
  displayedNotes, 
  showArchived, 
  openEdit, 
  archiveNote, 
  deleteNote 
}) {
  if (loading) {
    return <div className="text-center text-gray-400 py-20">Loading notes...</div>
  }
  
  if (error) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-xl text-red-200 text-center">
        {error}
      </div>
    )
  }

  if (displayedNotes.length === 0) {
    return (
      <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl border-dashed">
        <p className="text-gray-400">
          {showArchived ? "You don't have any archived notes." : "You don't have any active notes."}
        </p>
      </div>
    )
  }

  return (
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
  )
}
