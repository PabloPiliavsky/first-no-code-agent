import express from 'express'
import { protect } from '../../../shared/middleware/authMiddleware.js'
import getCategories from '../controllers/getCategories.js'
import createCategory from '../controllers/createCategory.js'
import updateCategory from '../controllers/updateCategory.js'
import deleteCategory from '../controllers/deleteCategory.js'

const router = express.Router()

router.use(protect)

router.route('/')
  .get(getCategories)
  .post(createCategory)

router.route('/:id')
  .put(updateCategory)
  .delete(deleteCategory)

export default router
