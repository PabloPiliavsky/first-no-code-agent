import { useState } from 'react'
import { Trash2, Edit2, X, Check } from 'lucide-react'
import { HStack } from '../../../shared/ui/HStack'
import { Button } from '../../../shared/ui/Button'

export default function CategoryListItem({ category, onSaveEdit, onDeleteClick }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editingName, setEditingName] = useState(category.name)

  const handleSave = () => {
    if (editingName.trim() && editingName !== category.name) {
      onSaveEdit(category.id, editingName)
    }
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditingName(category.name)
    setIsEditing(false)
  }

  return (
    <div className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
      {isEditing ? (
        <div className="flex items-center gap-2 w-full">
          <input 
            type="text"
            className="flex-1 bg-black/40 border border-indigo-500/50 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-indigo-500"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            autoFocus
          />
          <HStack gap="gap-1">
            <Button variant="icon" size="icon" className="hover:text-emerald-400 hover:bg-emerald-500/10" onClick={handleSave}>
              <Check size={16} />
            </Button>
            <Button variant="icon" size="icon" className="hover:text-gray-300" onClick={handleCancel}>
              <X size={16} />
            </Button>
          </HStack>
        </div>
      ) : (
        <>
          <span className="font-medium text-indigo-300">{category.name}</span>
          <HStack gap="gap-1">
            <Button variant="icon" size="icon" onClick={() => setIsEditing(true)}>
              <Edit2 size={16} />
            </Button>
            <Button variant="icon" size="icon" className="hover:text-red-400 hover:bg-red-500/10" onClick={() => onDeleteClick(category)}>
              <Trash2 size={16} />
            </Button>
          </HStack>
        </>
      )}
    </div>
  )
}
