//disable eslint next line

import mongoose, { Document } from 'mongoose'
//import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  gender: 'male' | 'female';
  password: string;
  cpassword: string;
  isAdmin: boolean;
  //token: string;
  borrowedBookList: string[];
}

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      //unique: true,
    },

    gender: {
      type: String,
      enum: ['male', 'female'],
      required: false,
    },

    password: {
      type: String,
      required: false,
    },

    cpassword: {
      type: String,
      required: false,
    },

    token: {
      type: String,
      required: false,
    },

    isAdmin: {
      type: Boolean,
     // default: true,
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

export default mongoose.model<UserDocument>('User', userSchema)
