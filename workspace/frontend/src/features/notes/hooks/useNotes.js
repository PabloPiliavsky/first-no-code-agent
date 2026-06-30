import { useState, useEffect, useCallback } from 'react'
import { noteService } from '../services/noteService'

export function useNotes() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true)
      const data = await noteService.getNotes()
      setNotes(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  const createNote = async (title, content) => {
    try {
      const newNote = await noteService.createNote(title, content)
      setNotes(prev => [newNote, ...prev])
      return { success: true, data: newNote }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateNote = async (id, data) => {
    try {
      const updatedNote = await noteService.updateNote(id, data)
      setNotes(prev => prev.map(n => n.id === id ? updatedNote : n))
      return { success: true, data: updatedNote }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteNote = async (id) => {
    try {
      await noteService.deleteNote(id)
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
