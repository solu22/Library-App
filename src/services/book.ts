import Book, { BookDocument } from '../models/Book'

//Post
const create = async (book: BookDocument) => {
  const createBook = await book.save()
  return createBook
}

const findById = async (bookId: string) => {
  const book = await Book.findById(bookId)
  if (!book) {
    throw new Error(`Book ${bookId} not found`)
  }
  return book
}

const findAll = async () => {
  const getBooks = await Book.find().populate('authors')
  return getBooks
}

async function update(
  bookId: string,
  update: Partial<BookDocument>
): Promise<BookDocument | null> {
  const book = await Book.findByIdAndUpdate(bookId, update, {
    new: true,
  }).exec()
  if (!book) {
    throw new Error(`Book ${bookId} not found`)
  }
  if (update.title) {
    book.title = update.title
  }
  if (update.description) {
    book.description = update.description
  }
  if (update.ISBN) {
    book.ISBN = update.ISBN
  }
  if (update.publisher) {
    book.publisher = update.publisher
  }

  return await book.save()
}

async function deleteBook(bookId: string): Promise<BookDocument | null> {
  return await Book.findByIdAndDelete(bookId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteBook,
}
