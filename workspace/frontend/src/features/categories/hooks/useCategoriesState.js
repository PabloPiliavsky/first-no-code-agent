import { useState, useCallback, useEffect } from 'react'
import getCategoriesService from '../services/getCategories.service.js'

export function useCategoriesState() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getCategoriesService()
      setCategories(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return {
    categories,
    setCategories,
    loading,
    error,
    fetchCategories
  }
}
