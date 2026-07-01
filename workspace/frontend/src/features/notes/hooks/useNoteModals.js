import { useState } from 'react'

export function useNoteModals(note, onArchive, onDelete) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false)

  const handleConfirmDelete = () => {
    onDelete(note.id)
    setShowDeleteConfirm(false)
  }

  const handleConfirmArchive = () => {
    onArchive(note.id, !note.archived)
    setShowArchiveConfirm(false)
  }

  return {
    showDeleteConfirm,
    setShowDeleteConfirm,
    showArchiveConfirm,
    setShowArchiveConfirm,
    handleConfirmDelete,
    handleConfirmArchive
  }
}
