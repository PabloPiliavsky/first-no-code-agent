import { Note } from '../../../config/associations.js'

export default async function deleteNote(req, res) {
  const { id } = req.params

  try {
    const note = await Note.findOne({ where: { id, UserId: req.user.id } })
    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    await note.destroy()
    res.json({ message: 'Note removed' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message })
  }
}
