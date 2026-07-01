import { useState } from 'react'
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react'
import { Modal } from '../../../shared/ui/Modal'
import { HStack } from '../../../shared/ui/HStack'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'
import { useCategories } from '../hooks/useCategories'

export default function ManageCategoriesModal({ onClose }) {
  const { categories, loading, error, createCategory, updateCategory, deleteCategory } = useCategories()
  const [newCategoryName, setNewCategoryName] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [actionError, setActionError] = useState(null)

  const handleCreate = async (e) => {
    e.preventDefault()
    if (!newCategoryName.trim()) return
    setActionError(null)
    const result = await createCategory(newCategoryName)
    if (result.success) {
      setNewCategoryName('')
    } else {
      setActionError(result.error)
    }
  }

  const handleStartEdit = (category) => {
    setEditingId(category.id)
    setEditingName(category.name)
    setActionError(null)
  }

  const handleSaveEdit = async (id) => {
    if (!editingName.trim()) return
    setActionError(null)
    const result = await updateCategory(id, editingName)
    if (result.success) {
      setEditingId(null)
    } else {
      setActionError(result.error)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this category? It will be removed from all notes.')) {
      setActionError(null)
      const result = await deleteCategory(id)
      if (!result.success) {
        setActionError(result.error)
      }
    }
  }

  return (
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

        {/* Create new */}
        <form onSubmit={handleCreate} className="flex gap-2">
          <Input 
            placeholder="New tag name..." 
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <Button type="submit" variant="primary" className="mt-7">
            <Plus size={18} /> Add
          </Button>
        </form>

        {/* List existing */}
        <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
          {loading ? (
            <p className="text-gray-400 text-center py-4">Loading tags...</p>
          ) : categories.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No tags created yet.</p>
          ) : (
            categories.map(cat => (
              <div key={cat.id} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                {editingId === cat.id ? (
                  <div className="flex items-center gap-2 w-full">
                    <input 
                      type="text"
                      className="flex-1 bg-black/40 border border-indigo-500/50 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-indigo-500"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      autoFocus
                    />
                    <HStack gap="gap-1">
                      <Button variant="icon" size="icon" className="hover:text-emerald-400 hover:bg-emerald-500/10" onClick={() => handleSaveEdit(cat.id)}>
                        <Check size={16} />
                      </Button>
                      <Button variant="icon" size="icon" className="hover:text-gray-300" onClick={() => setEditingId(null)}>
                        <X size={16} />
                      </Button>
                    </HStack>
                  </div>
                ) : (
                  <>
                    <span className="font-medium text-indigo-300">{cat.name}</span>
                    <HStack gap="gap-1">
                      <Button variant="icon" size="icon" onClick={() => handleStartEdit(cat)}>
                        <Edit2 size={16} />
                      </Button>
                      <Button variant="icon" size="icon" className="hover:text-red-400 hover:bg-red-500/10" onClick={() => handleDelete(cat.id)}>
                        <Trash2 size={16} />
                      </Button>
                    </HStack>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </Modal>
  )
}
