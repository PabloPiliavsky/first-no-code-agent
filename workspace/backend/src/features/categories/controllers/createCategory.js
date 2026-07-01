import { Category } from '../../../config/associations.js'

export default async function createCategory(req, res) {
  const { name } = req.body

  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Category name is required' })
  }

  try {
    const [category, created] = await Category.findOrCreate({
      where: { name: name.trim(), UserId: req.user.id }
    })
    
    if (!created) {
      return res.status(400).json({ message: 'Category already exists' })
    }

    res.status(201).json(category)
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error: error.message })
  }
}
