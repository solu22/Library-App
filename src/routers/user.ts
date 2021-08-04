import express from 'express'
import passport from 'passport'
import { JWT_AUTH } from '../middlewares/authMiddleWare'
import { checkRole } from '../middlewares/checkRole'

import {
  createUser,
  findUserById,
  deleteUser,
  findAll,
  updateUser,
  borrowBook,
  googleAuth,
  localLogin,
} from '../controllers/user'

const router = express.Router()

router.post(
  '/login',
  passport.authenticate('google-id-token', { session: false }),
  googleAuth
)
router.post('/register', JWT_AUTH, checkRole, createUser)
router.get('/', findAll)
router.get('/:userId', findUserById)
router.put('/:userId/borrow', borrowBook)
router.put('/:userId', JWT_AUTH, checkRole, updateUser)
router.post('/localLogin', JWT_AUTH, localLogin)
router.delete('/:userId', JWT_AUTH, checkRole, deleteUser)

export default router
