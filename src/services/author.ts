import Author, { AuthorDocument } from '../models/Author'

function create(author: AuthorDocument): Promise<AuthorDocument> {
  return author.save()
}

function findById(authorId: string): Promise<AuthorDocument> {
  return Author.findById(authorId)
    .populate('books')
    .exec() //returns true promise
    .then((author) => {
      if (!author) {
        throw new Error(`Author ${authorId} not found`)
      }
      return author
    })
}

function findAll(): Promise<AuthorDocument[]> {
  return Author.find()
  .exec() // Return a Promise
}

function update(
  authorId: string,
  update: Partial<AuthorDocument>
): Promise<AuthorDocument | null> {
  return Author.findByIdAndUpdate(authorId, update, { new: true }).exec()
}

function deleteAuthor(authorId: string): Promise<AuthorDocument | null> {
  return Author.findByIdAndDelete(authorId).exec()
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteAuthor,
}
