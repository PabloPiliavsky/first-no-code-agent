import { Note, Category } from '../../../config/associations.js'
import handleCategories from '../utils/handleCategories.js'

export default async function updateNote(req, res) {
  const { id } = req.params
  const { title, content, archived, categories } = req.body

  try {
    const note = await Note.findOne({ where: { id, UserId: req.user.id } })
    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    if (title !== undefined) note.title = title
    if (content !== undefined) note.content = content
    if (archived !== undefined) note.archived = archived

    await note.save()
    
    await handleCategories(note, categories, req.user.id)
    
    const noteWithCategories = await Note.findOne({
      where: { id: note.id },
      include: [{ model: Category, attributes: ['id', 'name'], through: { attributes: [] } }]
    })
    
    res.json(noteWithCategories)
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message })
  }
}
