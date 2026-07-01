import { useCategoriesState } from './useCategoriesState.js'
import { useCategoriesCrud } from './useCategoriesCrud.js'

export function useCategories() {
  const { categories, setCategories, loading, error, fetchCategories } = useCategoriesState()
  const { createCategory, updateCategory, deleteCategory } = useCategoriesCrud(setCategories)

  return {
    categories,
    loading,
    error,
    createCategory,
    updateCategory,
    deleteCategory,
    refreshCategories: fetchCategories
  }
}
