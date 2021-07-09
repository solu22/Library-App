import { Request, Response, NextFunction } from 'express'
import AuthorService from '../services/author'
import Author from '../models/Author'

import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
} from '../helpers/apiError'

//Create author/Post Method
export const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = new Author({
      ...req.body,
    })

    const createdAuthor = await AuthorService.create(author)
    res.json(createdAuthor)
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(new InternalServerError('Internal Server Error', error))
    }
  }
}

//Get all Authors
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allAuthor = await AuthorService.findAll()
    res.json(allAuthor)
  } catch (error) {
    next(new NotFoundError('Authors Not Found', error as Error))
  }
}

//Get Author by Id
export const findAuthorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorId = req.params['authorId']
    const author = await AuthorService.findById(authorId)
    res.json(author)
  } catch (error) {
    next(new NotFoundError('author not found', error))
  }
}

//Update author

export const updateAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const authorId = req.params['authorId']
    const updatedauthor = await AuthorService.update(authorId, update)
    res.json(updatedauthor)
  } catch (error) {
    next(new NotFoundError('author not found', error))
  }
}

//Delete author

export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await AuthorService.deleteAuthor(req.params['authorId'])
    res.status(204).end()
  } catch (error) {
    next(new NotFoundError('Author not found', error))
  }
}
