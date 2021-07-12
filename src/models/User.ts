/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  gender: 'male' | 'female'
  password: string
  isAdmin: boolean
  borrowedBookList: string[]
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

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
      unique: true,
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

    borrowedBookList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model<UserDocument>(
  'User',
  userSchema.plugin(uniqueValidator)
)
