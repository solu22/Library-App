import jwt from 'jsonwebtoken'
import { jwtStrategy } from '../config/passport'
import { Request, Response, NextFunction } from 'express'
import User, { UserDocument } from '../models/User'
import { UnauthorizedError, ForbiddenError } from '../helpers/apiError'
import UserService from '../services/user'

export const checkRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user
    const foundUser = await UserService.findByEmail((user as any).email)
    console.log('>>>>>>>', foundUser)
    if (foundUser?.isAdmin === false) {
      next(new ForbiddenError('You do not have acces for this page'))
    } else {
      next()
    }
  } catch (err) {
    next(new UnauthorizedError('Unauthorized'))
  }
}
