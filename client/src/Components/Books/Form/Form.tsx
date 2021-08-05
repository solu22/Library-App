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

/*Form data initial State*/
const initialState= {
  title: '',
  description: '',
  ISBN: '',
  publisher: '',

}


const Form = (): JSX.Element => {
  
  const [bookFormData, setBookFormData]= useState(initialState)
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange= (e: any)=>{
    const name = e.target.name
    const value= e.target.value
    setBookFormData({...bookFormData, [name]: value})
  }  

  const addNewBook = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(addBookThunk(bookFormData))
    setBookFormData(initialState)
   
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
          value={bookFormData.title}
          onChange={handleChange}
        />

        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={bookFormData.description}
          onChange={handleChange}
        />

        <TextField
          name="ISBN"
          variant="outlined"
          label="ISBN"
          fullWidth
          value={bookFormData.ISBN}       
          onChange={handleChange}
        />

        <TextField
          name="publisher"
          variant="outlined"
          label="Publisher"
          fullWidth
          value={bookFormData.publisher}
          onChange={handleChange}
        />

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
          Add Book
        </Button>
      </form>
    </Paper>
  )
}

export default Form
