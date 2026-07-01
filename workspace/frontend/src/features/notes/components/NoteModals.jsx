import { Modal } from '../../../shared/ui/Modal'
import { HStack } from '../../../shared/ui/HStack'
import { Button } from '../../../shared/ui/Button'

export default function NoteModals({ 
  note, 
  showDeleteConfirm, 
  setShowDeleteConfirm, 
  showArchiveConfirm, 
  setShowArchiveConfirm, 
  handleConfirmDelete, 
  handleConfirmArchive 
}) {
  return (
    <>
      {showDeleteConfirm && (
        <Modal title="Confirm Deletion" onClose={() => setShowDeleteConfirm(false)}>
          <div className="text-gray-300 mb-6">
            Are you sure you want to delete the note <span className="text-white font-semibold">"{note.title}"</span>? This action cannot be undone.
          </div>
          <HStack className="justify-end gap-3">
            <Button variant="ghost" onClick={() => setShowDeleteConfirm(false)}>Cancel</Button>
            <button 
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-95 cursor-pointer"
              onClick={handleConfirmDelete}
            >
              Delete
            </button>
          </HStack>
        </Modal>
      )}

      {showArchiveConfirm && (
        <Modal title={note.archived ? "Confirm Unarchive" : "Confirm Archive"} onClose={() => setShowArchiveConfirm(false)}>
          <div className="text-gray-300 mb-6">
            Are you sure you want to {note.archived ? "unarchive" : "archive"} the note <span className="text-white font-semibold">"{note.title}"</span>?
          </div>
          <HStack className="justify-end gap-3">
            <Button variant="ghost" onClick={() => setShowArchiveConfirm(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleConfirmArchive}>Confirm</Button>
          </HStack>
        </Modal>
      )}
    </>
  )
}
