import mongoose, { Document } from 'mongoose'
//import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

export type UserDocument = Document & {
  email: string;

  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    //unique: true,
  },

  password: {
    type: String,
    required: true,
  },
})

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
