import { Note, Category } from '../../../config/associations.js'
import handleCategories from '../utils/handleCategories.js'

export default async function createNote(req, res) {
  const { title, content, categories } = req.body
  try {
    const note = await Note.create({
      title,
      content,
      UserId: req.user.id
    })
    
    await handleCategories(note, categories, req.user.id)
    
    const noteWithCategories = await Note.findOne({
      where: { id: note.id },
      include: [{ model: Category, attributes: ['id', 'name'], through: { attributes: [] } }]
    })
    
    res.status(201).json(noteWithCategories)
  } catch (error) {
    console.error("CREATE NOTE ERROR:", error);
    res.status(500).json({ message: 'Error creating note', error: error.message })
  }
}
