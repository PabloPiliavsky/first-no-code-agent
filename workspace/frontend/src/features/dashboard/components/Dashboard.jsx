import { useState } from 'react'
import { useNotes } from '../../notes/hooks/useNotes'
import NoteForm from '../../notes/components/NoteForm'
import DashboardHeader from './DashboardHeader'
import DashboardFilters from './DashboardFilters'
import DashboardCategoryFilter from './DashboardCategoryFilter'
import DashboardGrid from './DashboardGrid'
import ManageCategoriesModal from '../../categories/components/ManageCategoriesModal'

export default function Dashboard({ user, logout }) {
  const { notes, loading, error, createNote, updateNote, deleteNote, archiveNote, refreshNotes } = useNotes()
  const [showArchived, setShowArchived] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isManageTagsOpen, setIsManageTagsOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  const activeNotes = notes.filter(n => !n.archived)
  const archivedNotes = notes.filter(n => n.archived)
  const baseNotes = showArchived ? archivedNotes : activeNotes
  
  const displayedNotes = selectedCategory 
    ? baseNotes.filter(n => n.Categories?.some(c => c.name === selectedCategory))
    : baseNotes

  const allCategories = Array.from(new Set(baseNotes.flatMap(n => n.Categories?.map(c => c.name) || [])))

  const handleCreateOrUpdate = async (id, data) => {
    if (id) {
      return await updateNote(id, data)
    } else {
      return await createNote(data.title, data.content, data.categories)
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
      <DashboardHeader user={user} logout={logout} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <DashboardFilters 
          showArchived={showArchived}
          setShowArchived={setShowArchived}
          activeNotesCount={activeNotes.length}
          archivedNotesCount={archivedNotes.length}
          onNewNote={() => setIsFormOpen(true)}
          onManageTags={() => setIsManageTagsOpen(true)}
        />

        <DashboardCategoryFilter 
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <DashboardGrid 
          loading={loading}
          error={error}
          displayedNotes={displayedNotes}
          showArchived={showArchived}
          openEdit={openEdit}
          archiveNote={archiveNote}
          deleteNote={deleteNote}
        />
      </main>

      {isFormOpen && (
        <NoteForm 
          initialData={editingNote} 
          onSubmit={handleCreateOrUpdate} 
          onClose={closeForm} 
        />
      )}

      {isManageTagsOpen && (
        <ManageCategoriesModal onClose={() => {
          setIsManageTagsOpen(false)
          refreshNotes() // Refresh notes to pick up any category name changes or deletions
        }} />
      )}
    </div>
  )
}
