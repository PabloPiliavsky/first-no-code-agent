import Note from '../models/Note.js'

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { UserId: req.user.id } })
    res.json(notes)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message })
  }
}

export const createNote = async (req, res) => {
  const { title, content } = req.body
  try {
    const note = await Note.create({
      title,
      content,
      UserId: req.user.id
    })
    res.status(201).json(note)
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error: error.message })
  }
}

export const updateNote = async (req, res) => {
  const { id } = req.params
  const { title, content, archived } = req.body

  try {
    const note = await Note.findOne({ where: { id, UserId: req.user.id } })
    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    if (title !== undefined) note.title = title
    if (content !== undefined) note.content = content
    if (archived !== undefined) note.archived = archived

    await note.save()
    res.json(note)
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message })
  }
}

export const deleteNote = async (req, res) => {
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
