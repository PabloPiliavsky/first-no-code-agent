import { Archive, ArchiveRestore, Trash2, Edit3 } from 'lucide-react'
import { HStack } from '../../../shared/ui/HStack'
import { Button } from '../../../shared/ui/Button'
import CategoryChips from './CategoryChips'
import NoteModals from './NoteModals'
import { useNoteModals } from '../hooks/useNoteModals'

export default function NoteCard({ note, onEdit, onArchive, onDelete }) {
  const modals = useNoteModals(note, onArchive, onDelete)

  return (
    <>
      <div className="group relative p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-indigo-500/30 transition-all flex flex-col justify-between min-h-[160px]">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">{note.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-4 whitespace-pre-wrap mb-4">{note.content}</p>
          
          <CategoryChips categories={note.Categories} />
        </div>

        <HStack className="mt-4 pt-4 border-t border-white/10 justify-between">
          <HStack gap="gap-2">
            <Button 
              onClick={() => onEdit(note)}
              variant="icon"
              size="icon"
              title="Edit Note"
            >
              <Edit3 size={18} />
            </Button>
            
            <Button 
              onClick={() => modals.setShowArchiveConfirm(true)}
              variant="icon"
              size="icon"
              className="hover:text-amber-400 hover:bg-amber-500/10"
              title={note.archived ? "Unarchive Note" : "Archive Note"}
            >
              {note.archived ? <ArchiveRestore size={18} /> : <Archive size={18} />}
            </Button>
          </HStack>

          <Button 
            onClick={() => modals.setShowDeleteConfirm(true)}
            variant="icon"
            size="icon"
            className="hover:text-red-400 hover:bg-red-500/10"
            title="Delete Note"
          >
            <Trash2 size={18} />
          </Button>
        </HStack>
      </div>

      <NoteModals note={note} {...modals} />
    </>
  )
}
