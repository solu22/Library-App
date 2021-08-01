/* eslint-disable */
import { NotFoundError } from '../helpers/apiError'
import User, { UserDocument } from '../models/User'
import Book from '../models/Book'

const create = async (user: UserDocument) => {
  const createUser = await user.save()
  return createUser
}

const findAll = async () => {
  const findAllUser = await User.find().populate({
    path: 'borrowedBookList',
    populate: { path: 'authors' },
  })
  return findAllUser
}

const findById = async (userId: string) => {
  const user = await User.findById(userId).populate({
    path: 'borrowedBookList',
    populate: { path: 'authors' },
  })
  if (!user) {
    throw new Error(`User ${userId} not found`)
  }
  return user
}

const findByEmail = async (email: string) => {
  const user = await User.findOne({ email })
  return user
  // if(!user){
  //   throw new NotFoundError(`User ${email} not found `)
  // }
  // return user
}

const update = async (userId: string, update: Partial<UserDocument>) => {
  const userUpdate = await User.findByIdAndUpdate(userId, update, {
    new: true,
  }).exec()
  return userUpdate
}

const deleteUser = async (userId: string) => {
  const deletedUser = await User.findByIdAndDelete(userId)
  return deletedUser
}

//add book borrowed
const addBook = async (bookId: string, userId: string) => {
  const foundUser = await User.findById(userId)
  const book = await Book.findById(bookId)
  if (!book) {
    throw new NotFoundError('Book not found')
  }

  if (!book.status) {
    throw new NotFoundError('Book is not available for borrowing')
  }

  if (!foundUser) {
    throw new NotFoundError('User not found')
  }

  foundUser.borrowedBookList.push(bookId)
  book.status = false
  book.save()
  return foundUser.save()
}

//check if user exits with given email else create new user with google Auth
const findOrCreate = async (parsedToken: any) => {
  const { email, given_name, family_name } = parsedToken.payload
  const user = await User.findOne({ email: email })
  if (user) {
    return user
  }

  const createNewUser = new User({
    firstName: given_name,
    lastName: family_name,
    email: email,
  })
  await createNewUser.save()
  return createNewUser
}

export default {
  create,
  findAll,
  findById,
  findByEmail,
  update,
  deleteUser,
  addBook,
  findOrCreate,
}
