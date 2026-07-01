import { useState, useCallback, useEffect } from 'react'
import getNotesService from '../services/getNotes.service.js'

export function useNotesState() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getNotesService()
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

  return {
    notes,
    setNotes,
    loading,
    error,
    fetchNotes
  }
}
