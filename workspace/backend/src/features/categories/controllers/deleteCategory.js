import { Category } from '../../../config/associations.js'

export default async function deleteCategory(req, res) {
  const { id } = req.params

  try {
    const category = await Category.findOne({ where: { id, UserId: req.user.id } })
    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    await category.destroy()
    res.json({ message: 'Category removed' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error: error.message })
  }
}
