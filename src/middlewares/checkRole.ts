import { Request, Response, NextFunction } from 'express'
import User, { UserDocument } from '../models/User'
import { UnauthorizedError, ForbiddenError } from '../helpers/apiError'

export const checkRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user as UserDocument
    if (user?.isAdmin === false) {
      next(new ForbiddenError('You do not have acces for this page'))
    } else {
      next()
    }
  } catch (err) {
    next(new UnauthorizedError('Unauthorized'))
  }
}
