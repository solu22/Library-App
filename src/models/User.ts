/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  gender: 'male' | 'female'
  password: string
  isAdmin: boolean
  bookList: string[]
}

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
    required: true,
  },
  lastName: {
    type: String,
    index: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },

  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  bookList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

export default mongoose.model<UserDocument>('User', userSchema)
