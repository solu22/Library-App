/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type AuthorDocument = Document & {
  name: string
  gender: 'male' | 'female'
  location: string
}

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Field Cannot be empty'],
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      lowercase: true,
      required: true,
    },

    location: String,
  },
  { timestamps: true }
)

authorSchema.virtual('booksWritten', {
  ref: 'Book', //The Model to use
  localField: '_id', //Find in Model, where localField
  foreignField: 'authors', // is equal to foreignField
})

// Set Object and Json property to true. Default is set to false
authorSchema.set('toObject', { virtuals: true })
authorSchema.set('toJSON', { virtuals: true })

export default mongoose.model<AuthorDocument>('Author', authorSchema)
