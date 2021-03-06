import { Request, Response, NextFunction } from 'express'
import BookService from '../services/book'
import Book from '../models/Book'
import mongoose from 'mongoose'
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '../helpers/apiError'

//Create new book,POST
export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = new Book({
      ...req.body,
    })

    const createdBook = await BookService.create(book)
    res.json(createdBook)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

//Get all books
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.findAll())
  } catch (error) {
    next(new NotFoundError('Books not found', error))
  }
}

//Get books by Id
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BookService.findById(req.params.bookId))
  } catch (error) {
    next(new NotFoundError('Book not found', error))
  }
}

//Update book
export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const bookId = req.params.bookId
    if (!mongoose.Types.ObjectId.isValid(bookId))
      return res.status(404).send('No book with such id')
    const updatedBook = await BookService.update(bookId, update)
    res.json(updatedBook)
  } catch (error) {
    next(new NotFoundError('Book not found', error))
  }
}

//Delete book

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //console.log('The file is here...')
  try {
    // console.log('The paras mare ', req.params)
    const updateBook = await BookService.deleteBook(req.params.bookId)
    //res.send({"bookId": req.params.bookId})
    res.json(updateBook)
  } catch (error) {
    next(new NotFoundError('Book not found', error))
  }
}
