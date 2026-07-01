import { Note, Category } from '../../../config/associations.js'

export default async function getNotes(req, res) {
  try {
    const notes = await Note.findAll({ 
      where: { UserId: req.user.id },
      include: [{ model: Category, attributes: ['id', 'name'], through: { attributes: [] } }]
    })
    res.json(notes)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message })
  }
}
