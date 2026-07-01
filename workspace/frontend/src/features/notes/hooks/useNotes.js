import { useNotesState } from './useNotesState.js'
import { useNotesCrud } from './useNotesCrud.js'

export function useNotes() {
  const { notes, setNotes, loading, error, fetchNotes } = useNotesState()
  const { createNote, updateNote, deleteNote, archiveNote } = useNotesCrud(setNotes)

  return {
    notes,
    loading,
    error,
    createNote,
    updateNote,
    deleteNote,
    archiveNote,
    refreshNotes: fetchNotes
  }
}
