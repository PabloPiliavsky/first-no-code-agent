import { Category } from '../../../config/associations.js'

export default async function updateCategory(req, res) {
  const { id } = req.params
  const { name } = req.body

  if (!name || !name.trim()) {
    return res.status(400).json({ message: 'Category name is required' })
  }

  try {
    const category = await Category.findOne({ where: { id, UserId: req.user.id } })
    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    const existing = await Category.findOne({ where: { name: name.trim(), UserId: req.user.id } })
    if (existing && existing.id !== category.id) {
      return res.status(400).json({ message: 'A category with this name already exists' })
    }

    category.name = name.trim()
    await category.save()

    res.json(category)
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error: error.message })
  }
}
