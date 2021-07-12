/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type AuthorDocument = Document & {
  name: string
  gender: 'male' | 'female'
  location: string
  books: string[]
}

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true,
    },

    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
      },
    ],

    location: String,
  },
  { timestamps: true }
)

export default mongoose.model<AuthorDocument>('Author', authorSchema)
