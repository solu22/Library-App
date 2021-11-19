import mongoose, { Document } from 'mongoose'

export type BookDocument = Document & {
  title: string;
  description: string;
  status: boolean;
  ISBN: string;
  publisher: string;
  //authors: string[];
}

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Field cannot be empty'],
      index: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please enter some description'],
    },
    status: {
      type: Boolean,
      default: true,
    },
    ISBN: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },

    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
      },
    ],
  },
  { timestamps: true }
)

export default mongoose.model<BookDocument>('Book', bookSchema)
