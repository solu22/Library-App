import mongoose, { Document } from 'mongoose'

export type BookDocument = Document & {
  title: string;
  description: string;
  status: boolean;
  ISBN: string;
  publisher: string;
  publishedDate: Date;
  authors: string[];
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
  publishedDate: {
    type: Date,
    required: false,
  },
  authors: {
    type: String,
    required: true,
  },
})

export default mongoose.model<BookDocument>('Book', bookSchema)
