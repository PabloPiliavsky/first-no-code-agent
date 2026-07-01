import { Modal } from '../../../shared/ui/Modal'
import { HStack } from '../../../shared/ui/HStack'
import { Button } from '../../../shared/ui/Button'

export default function CategoryDeleteModal({ category, onConfirm, onCancel }) {
  if (!category) return null;

  return (
    <Modal title="Confirm Deletion" onClose={onCancel}>
      <div className="text-gray-300 mb-6">
        Are you sure you want to delete the tag <span className="text-white font-semibold">"{category.name}"</span>? It will be removed from all notes. This action cannot be undone.
      </div>
      <HStack className="justify-end gap-3">
        <Button variant="ghost" onClick={onCancel}>Cancel</Button>
        <button 
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-95 cursor-pointer"
          onClick={onConfirm}
        >
          Delete
        </button>
      </HStack>
    </Modal>
  )
}
