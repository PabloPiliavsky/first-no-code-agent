import createCategoryService from '../services/createCategory.service.js'
import updateCategoryService from '../services/updateCategory.service.js'
import deleteCategoryService from '../services/deleteCategory.service.js'

export function useCategoriesCrud(setCategories) {
  const createCategory = async (name) => {
    try {
      const newCategory = await createCategoryService(name)
      setCategories(prev => [...prev, newCategory].sort((a, b) => a.name.localeCompare(b.name)))
      return { success: true, data: newCategory }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const updateCategory = async (id, name) => {
    try {
      const updatedCategory = await updateCategoryService(id, name)
      setCategories(prev => 
        prev.map(c => c.id === id ? updatedCategory : c)
            .sort((a, b) => a.name.localeCompare(b.name))
      )
      return { success: true, data: updatedCategory }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  const deleteCategory = async (id) => {
    try {
      await deleteCategoryService(id)
      setCategories(prev => prev.filter(c => c.id !== id))
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    }
  }

  return {
    createCategory,
    updateCategory,
    deleteCategory
  }
}
