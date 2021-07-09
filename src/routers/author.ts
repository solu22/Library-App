import express from 'express'

import {
  createAuthor,
  findAuthorById,
  deleteAuthor,
  findAll,
  updateAuthor,
} from '../controllers/authors'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix
router.get('/', findAll)
router.get('/:authorrId', findAuthorById)
router.put('/:authorId', updateAuthor)
router.delete('/:authorId', deleteAuthor)
router.post('/', createAuthor)

export default router
