/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type AuthorDocument = Document & {
  firstName: string
  lastName: string
  gender: 'male' | 'female'
}

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
      ref: 'Author',
    },
  ],
})

export default mongoose.model<AuthorDocument>('Author', authorSchema)
