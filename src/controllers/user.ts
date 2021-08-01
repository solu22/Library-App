import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user'
import User from '../models/User'
import generateToken from '../util/generateToken'
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
    const { firstName, lastName, email, password, cpassword } = req.body

    const checkUser = await User.findOne({ email: email })

    if (checkUser) {
      return res.status(422).json({ error: 'Email already Exist' })
    }

    const user = new User({
      firstName,
      lastName,
      email,
      password,
      cpassword,
    })

    const createdUser = await UserService.create(user)

    if (createdUser) {
      res.status(201).json({
        message: req.body,
        //token: generateToken(createdUser._id),
        successMesage: 'successfully registered',
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

//login user

// export const loginUser= async(req: Request, res:Response)=>{
//   try{
//     const {email, password}= req.body

//     if(! email || !password){
//       return res.status(400).json({error: "please filled the data"})
//     }
//     const checkUser= await User.findOne({email})

//     //console.log("checkMohko", checkUser)
//     if(checkUser && ( await checkUser.matchPassword(password))){
//       res.status(201).json({

//       message: "Successfully Logged In",
//       userdata: req.body,
//       token: generateToken(checkUser._id)
//     })
//   }
//     else{
//       return res.status(400).json({error: "Invalid Email or Password"})
//     }

//   } catch(error){
//     console.log(error)
//   }
// }

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
