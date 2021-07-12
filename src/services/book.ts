import Book, { BookDocument } from '../models/Book'

function create(book: BookDocument): Promise<BookDocument> {
  return book.save()
}

function findById(bookId: string): Promise<BookDocument> {
  return Book.findById(bookId)
    .populate('authors')
    .exec() // .exec() will return a true Promise
    .then((book) => {
      if (!book) {
        throw new Error(`Book ${bookId} not found`)
      }
      return book
    })
}

function findAll(): Promise<BookDocument[]> {
  return Book.find().sort({ title: 1 }).exec() // Return a Promise
}

function update(
  bookId: string,
  update: Partial<BookDocument>
): Promise<BookDocument | null> {
  return Book.findByIdAndUpdate(bookId, update, { new: true }).exec()
}

function deleteBook(bookId: string): Promise<BookDocument | null> {
  return Book.findByIdAndDelete(bookId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteBook,
}
