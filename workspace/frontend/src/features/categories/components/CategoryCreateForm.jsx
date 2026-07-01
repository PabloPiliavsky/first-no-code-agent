import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Input } from '../../../shared/ui/Input'
import { Button } from '../../../shared/ui/Button'

export default function CategoryCreateForm({ onCreate }) {
  const [newCategoryName, setNewCategoryName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newCategoryName.trim()) return
    const success = await onCreate(newCategoryName)
    if (success) {
      setNewCategoryName('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-start">
      <Input 
        placeholder="New tag name..." 
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
      />
      <Button type="submit" variant="primary">
        <Plus size={18} /> Add
      </Button>
    </form>
  )
}
