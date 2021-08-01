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
  token: string;
  borrowedBookList: string[];
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
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

//hashing pasword

userSchema.pre('save', async function (next) {
  const user = this as UserDocument
  if (!user.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(12)
  user.password = await bcrypt.hash(user.password, salt)
})

userSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  const user = this as UserDocument
  return await bcrypt.compare(enteredPassword, user.password)
}

export default mongoose.model<UserDocument>('User', userSchema)
