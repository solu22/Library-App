import { NotFoundError } from '../helpers/apiError'
import User, { UserDocument } from '../models/User'

function create(user: UserDocument): Promise<UserDocument> {
  return user.save()
}

function findById(userId: string): Promise<UserDocument> {
  return User.findById(userId)
    .populate('bookList')
    .exec() //returns true promise
    .then((user) => {
      if (!user) {
        throw new Error(`User ${userId} not found`)
      }
      return user
    })
}

function findAll(): Promise<UserDocument[]> {
  return User.find().exec() // Return a Promise
}

function update(
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> {
  return User.findByIdAndUpdate(userId, update, { new: true }).exec()
}

function deleteUser(userId: string): Promise<UserDocument | null> {
  return User.findByIdAndDelete(userId).exec()
}

//add book borrowed
const addBook = async (bookId: string, userId: string) => {
  const foundUser = await User.findById(userId)
  if (!foundUser) {
    throw new NotFoundError('User not found')
  }

  foundUser.bookList.push(bookId)
  return foundUser.save()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
  addBook,
}
