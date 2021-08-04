import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user'
import User from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '../helpers/apiError'

//Create User/Post Method//Register
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, email, password, cpassword, isAdmin } =
      req.body
    const checkUser = await User.findOne({ email })

    if (checkUser) {
      res.status(400)
      throw new Error('User Already Exists')
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        const user = new User({
          firstName,
          lastName,
          email,
          password: hash,
          cpassword,
          isAdmin,
        })

        const createdUser = await UserService.create(user)
        const token = jwt.sign({ email: createdUser.email }, JWT_SECRET, {
          expiresIn: '1h',
        })

        if (createdUser) {
          res.status(201).json({
            token: token,
            email: email,
            _id: createdUser._id,
            firstName: createdUser.firstName,
            lastName: createdUser.lastName,
            isAdmin: createdUser.isAdmin,
            successMesage: 'successfully registered',
          })
        } else {
          res.status(400)
          throw new Error('Error Occured')
        }
      })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error,', error))
    }
  }
}

//local login

export const localLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'please filled the data' })
    }
    const checkUser = await User.findOne({ email })

    if (checkUser) {
      bcrypt.compare(password, checkUser.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: 'Auth failed',
          })
        }
        if (result) {
          const token = jwt.sign(
            {
              email: checkUser.email,
            },
            JWT_SECRET,

            {
              expiresIn: '1h',
            }
          )
          return res.status(200).json({
            message: 'Auth successful',
            token: token,
            email: email,
            _id: checkUser._id,
            firstName: checkUser.firstName,
            lastName: checkUser.lastName,
            isAdmin: checkUser.isAdmin,
          })
        }

        res.status(401).json({
          message: 'Auth failed',
        })
      })
    } else {
      return res.status(400).json({ error: 'Invalid Email or Password' })
    }
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

//Get all users
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allUser = await UserService.findAll()
    res.json(allUser)
  } catch (error) {
    next(new NotFoundError('User Not Found', error as Error))
  }
}

//Get user by Id
export const findUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params['userId']
    const user = await UserService.findById(userId)
    res.json(user)
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

//Update user

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const userId = req.params.userId
    const updatedUser = await UserService.update(userId, update)
    res.json(updatedUser)
  } catch (error) {
    next(new NotFoundError('User not found', error))
  }
}

//Delete user

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserService.deleteUser(req.params.userId)
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Movie not found', error))
  }
}

//borrow book
export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.body.bookId as string
    const userId = req.params['userId']
    const updatedUser = await UserService.addBook(bookId, userId)
    res.json(updatedUser)
  } catch (error) {
    next(new InternalServerError('Internal Server Error', error))
  }
}
// google authorization
export const googleAuth = async (req: Request, res: Response) => {
  console.log('authorization from google>>>>>>>>>>>>>>>>>>>>', req)
  res.json(req.user)
}
