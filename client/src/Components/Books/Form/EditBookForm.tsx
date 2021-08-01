import { updateBookThunk } from '../../../Redux/Actions/book'
import { Book } from '../../../types'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import EditSharpIcon from '@material-ui/icons/EditSharp';
import { Paper } from '@material-ui/core'

import useStyles from './styles'

export type EditBookFormProps = {
  book: any
}

const EditBookForm = ({ book }: EditBookFormProps) => {
  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(book.title)
  const [newDescription, setNewDescription] = useState(book.description)
  const [newISBN, setNewISBN] = useState(book.ISBN)
  //const [newImage, setNewImage] = useState('')
  const [newPublisher, setNewPublisher] = useState(book.publisher)
  //const [newAuthors, setNewAuthors] = useState('')

  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const updateBook = (e: React.FormEvent) => {
    handleClose();
    e.preventDefault()

    const newBook: Book = {
      _id: book._id,
      title: newTitle,
      description: newDescription,
      ISBN: newISBN,
      status: false,
      publisher: newPublisher,
    }

    dispatch(updateBookThunk(newBook))

  }

  return (
      <>
      <Button  color="primary" onClick={handleClickOpen}>
      <EditSharpIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
         <Paper className={classes.paper}>
        <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={updateBook}>

          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />

          <TextField
            name="ISBN"
            variant="outlined"
            label="ISBN"
            fullWidth
            value={newISBN}
            onChange={(e) => setNewISBN(e.target.value)}
          />

          <TextField
            name="publisher"
            variant="outlined"
            label="Publisher"
            fullWidth
            value={newPublisher}
            onChange={(e) => setNewPublisher(e.target.value)}
          />
         <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit"  className={classes.buttonSubmit} variant="contained" color="primary">
            Edit & Save
          </Button>
        </DialogActions>
      

        </form>
        </Paper>
        </Dialog>
    </>
  )
}
export default EditBookForm

