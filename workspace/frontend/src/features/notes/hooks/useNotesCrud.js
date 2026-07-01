import createNoteService from '../services/createNote.service.js'
import updateNoteService from '../services/updateNote.service.js'
import deleteNoteService from '../services/deleteNote.service.js'

export function useNotesCrud(setNotes) {
  const createNote = async (title, content, categories) => {
    try {
      const newNote = await createNoteService(title, content, categories)
      setNotes(prev => [newNote, ...prev])
      return { success: true, data: newNote }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateNote = async (id, data) => {
    try {
      const updatedNote = await updateNoteService(id, data)
      setNotes(prev => prev.map(n => n.id === id ? updatedNote : n))
      return { success: true, data: updatedNote }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteNote = async (id) => {
    try {
      await deleteNoteService(id)
      setNotes(prev => prev.filter(n => n.id !== id))
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const archiveNote = async (id, archived) => {
    return updateNote(id, { archived })
  }

  return {
    createNote,
    updateNote,
    deleteNote,
    archiveNote
  }
}
