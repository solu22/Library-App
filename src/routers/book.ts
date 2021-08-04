import express from 'express'
import passport from 'passport'
import { JWT_AUTH } from '../middlewares/authMiddleWare'

import {
  createBook,
  findById,
  findAll,
  updateBook,
  deleteBook,
} from '../controllers/book'

const router = express.Router()

router.get('/', findAll)
router.get('/:bookId', findById)
router.put(
  '/:bookId',
  passport.authenticate('jwt', { session: false }),
  updateBook
)
router.delete('/:bookId', JWT_AUTH, deleteBook)
// router.post('/', passport.authenticate('jwt', { session: false }), createBook)

router.post('/', createBook)

export default router
