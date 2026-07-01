import { useState, useEffect } from 'react'
import { Save } from 'lucide-react'
import { VStack } from '../../../shared/ui/VStack'
import { HStack } from '../../../shared/ui/HStack'
import { Input } from '../../../shared/ui/Input'
import { Button } from '../../../shared/ui/Button'
import { Modal } from '../../../shared/ui/Modal'

export default function NoteForm({ initialData = null, onSubmit, onClose }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categories, setCategories] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title)
      setContent(initialData.content)
      if (initialData.Categories) {
        setCategories(initialData.Categories.map(c => c.name).join(', '))
      }
    }
  }, [initialData])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return setError('Title is required')
    
    const result = await onSubmit(
      initialData ? initialData.id : null, 
      { title, content, categories }
    )
    
    if (!result.success) {
      setError(result.error)
    } else {
      onClose()
    }
  }

  return (
    <Modal title={initialData ? 'Edit Note' : 'Create Note'} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <VStack gap="gap-4">
          {error && (
            <div className="p-3 text-sm text-red-200 bg-red-900/40 border border-red-500/50 rounded-lg">
              {error}
            </div>
          )}
          
          <Input 
            label="Title" 
            placeholder="Enter note title..." 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
            <textarea 
              rows={6}
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white transition-all placeholder-gray-500 resize-none"
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <Input 
            label="Tags (comma separated)" 
            placeholder="e.g. Work, Urgent, Ideas" 
            value={categories} 
            onChange={(e) => setCategories(e.target.value)}
          />
          
          <HStack className="justify-end mt-4" gap="gap-3">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              <Save size={18} /> {initialData ? 'Save Changes' : 'Create'}
            </Button>
          </HStack>
        </VStack>
      </form>
    </Modal>
  )
}
