import { useState } from 'react'
import { Modal } from '../../../shared/ui/Modal'
import { useCategories } from '../hooks/useCategories'
import CategoryCreateForm from './CategoryCreateForm'
import CategoryListItem from './CategoryListItem'
import CategoryDeleteModal from './CategoryDeleteModal'

export default function ManageCategoriesModal({ onClose }) {
  const { categories, loading, error, createCategory, updateCategory, deleteCategory } = useCategories()
  const [actionError, setActionError] = useState(null)
  const [deletingCategory, setDeletingCategory] = useState(null)

  const handleCreate = async (name) => {
    setActionError(null)
    const result = await createCategory(name)
    if (!result.success) {
      setActionError(result.error)
      return false
    }
    return true
  }

  const handleSaveEdit = async (id, newName) => {
    setActionError(null)
    const result = await updateCategory(id, newName)
    if (!result.success) {
      setActionError(result.error)
    }
  }

  const confirmDelete = async () => {
    if (!deletingCategory) return
    setActionError(null)
    const result = await deleteCategory(deletingCategory.id)
    if (!result.success) {
      setActionError(result.error)
    }
    setDeletingCategory(null)
  }

  return (
    <>
      <Modal title="Manage Tags" onClose={onClose}>
        <div className="flex flex-col gap-6">
          {error && (
            <div className="p-3 text-sm text-red-200 bg-red-900/40 border border-red-500/50 rounded-lg">
              {error}
            </div>
          )}
          {actionError && (
            <div className="p-3 text-sm text-red-200 bg-red-900/40 border border-red-500/50 rounded-lg">
              {actionError}
            </div>
          )}

          <CategoryCreateForm onCreate={handleCreate} />

          <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <p className="text-gray-400 text-center py-4">Loading tags...</p>
            ) : categories.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No tags created yet.</p>
            ) : (
              categories.map(cat => (
                <CategoryListItem
                  key={cat.id}
                  category={cat}
                  onSaveEdit={handleSaveEdit}
                  onDeleteClick={setDeletingCategory}
                />
              ))
            )}
          </div>
        </div>
      </Modal>

      <CategoryDeleteModal
        category={deletingCategory}
        onConfirm={confirmDelete}
        onCancel={() => setDeletingCategory(null)}
      />
    </>
  )
}
