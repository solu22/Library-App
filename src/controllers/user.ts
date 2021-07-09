import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user'
import User from '../models/User'
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '../helpers/apiError'

//Create User/Post Method
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = new User({
      ...req.body,
    })

    const createdUser = await UserService.create(user)
    res.json(createdUser)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
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
    console.log('err', error)
    next(new InternalServerError('Internal Server Error', error))
  }
}
