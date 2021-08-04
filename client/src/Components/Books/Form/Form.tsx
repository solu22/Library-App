/*React and Redux*/
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import { addBookThunk } from '../../../Redux/Actions/book'

/*Types */
import { NewBookFormValues } from '../../../types'

/*Mui Imports */
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  paper: {
    padding: theme.spacing(),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
 
  buttonSubmit: {
    marginBottom: 10,
  },
}));


const Form = (): JSX.Element => {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newISBN, setNewISBN] = useState('')
  const [newPublisher, setNewPublisher] = useState('')

  const classes = useStyles()
  const dispatch = useDispatch()


 const addNewBook = (e: React.FormEvent) => {
    e.preventDefault()

    const createNewBook: NewBookFormValues = {
      title: newTitle,
      description: newDescription,
      ISBN: newISBN,
      publisher: newPublisher,
      
    }

    dispatch(addBookThunk(createNewBook))
    setNewTitle('')
    setNewDescription('')
    setNewISBN('')
    setNewPublisher('')
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={addNewBook}>
        <Typography variant="h6">Add a new Book Here</Typography>

        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />

        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />

        <TextField
          name="ISBN"
          variant="outlined"
          label="ISBN"
          fullWidth
          value={newISBN}
          onChange={e => setNewISBN(e.target.value)}
        />

        <TextField
          name="publisher"
          variant="outlined"
          label="Publisher"
          fullWidth
          value={newPublisher}
          onChange={e => setNewPublisher(e.target.value)}
        />

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Add Book
        </Button>
      </form>
    </Paper>
  )
}

export default Form
