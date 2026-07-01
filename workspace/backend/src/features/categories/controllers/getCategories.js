import { Category } from '../../../config/associations.js'

export default async function getCategories(req, res) {
  try {
    const categories = await Category.findAll({ 
      where: { UserId: req.user.id },
      order: [['name', 'ASC']]
    })
    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error: error.message })
  }
}
