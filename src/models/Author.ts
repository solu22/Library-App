/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type AuthorDocument = Document & {
  firstName: string
  lastName: string
  gender: 'male' | 'female'
  location: string
}

const authorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Field Cannot be empty'],
    },
    lastName: {
      type: String,
      required: true
    },
   
   books: [
     {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Book',
     }
   ]
  },
  { timestamps: true }
)


export default mongoose.model<AuthorDocument>('Author', authorSchema)
