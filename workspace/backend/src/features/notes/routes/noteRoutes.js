import express from 'express'
import { protect } from '../../../shared/middleware/authMiddleware.js'
import getNotes from '../controllers/getNotes.js'
import createNote from '../controllers/createNote.js'
import updateNote from '../controllers/updateNote.js'
import deleteNote from '../controllers/deleteNote.js'

const router = express.Router()

router.use(protect)

router.route('/')
  .get(getNotes)
  .post(createNote)

router.route('/:id')
  .put(updateNote)
  .delete(deleteNote)

export default router
