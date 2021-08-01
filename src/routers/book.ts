import express from 'express'
import passport from 'passport'

import {
  createBook,
  findById,
  findAll,
  updateBook,
  deleteBook,
} from '../controllers/book'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:bookId', findById)
router.put(
  '/:bookId',
  passport.authenticate('jwt', { session: false }),
  updateBook
)
router.delete('/:bookId', deleteBook)
router.post('/', passport.authenticate('jwt', { session: false }), createBook)

export default router
