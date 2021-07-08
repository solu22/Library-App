import mongoose, { Document } from 'mongoose'

export type BookDocument = Document & {
  bookId: number;
  title: string;
  description: string;
  status: boolean;
  ISBN: string;
  publisher: string;
  publishedDate: Date;
}

const bookSchema = new mongoose.Schema({
  bookId: {
    type: Number,
    required: true,
  },
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
    required: true,
  },
})

export default mongoose.model<BookDocument>('Book', bookSchema)
