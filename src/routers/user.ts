import express from 'express'
import passport from 'passport'

import {
  createUser,
  findUserById,
  deleteUser,
  findAll,
  updateUser,
  borrowBook,
  //loginUser,
  //localAuth,
  googleAuth,
} from '../controllers/user'

const router = express.Router()

// Every path we define here will get /api/v1/movies prefix

// // router.post('/login',passport.authenticate('local',{
// //   failureRedirect: '/Userprofile'}),localAuth)
//router.post('/googlelogin',passport.authenticate('google-id-token', {session:false}), googleAuth)

router.post(
  '/login',
  passport.authenticate('google-id-token', { session: false }),
  googleAuth
)
router.post('/register', createUser)
router.get('/', findAll)
router.get('/:userId', findUserById)
router.put('/:userId/borrow', borrowBook)
router.put('/:userId', updateUser)
//router.post('/login', googleAuth)
//router.delete('/:userId', passport.authenticate('jwt',{session:false}) ,deleteUser)

//router.post('/login', passport.authenticate('google-id-token', {session:false}), googleAuth)

export default router
