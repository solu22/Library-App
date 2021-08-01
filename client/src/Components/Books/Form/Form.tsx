import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch, useSelector} from 'react-redux'
//disable Eslint next line
//import FileBase  from 'react-file-base64'

import useStyles from './styles'
import { addBookThunk} from '../../../Redux/Actions/book'
import {NewBookFormValues } from '../../../types'
import { AppState } from '../../../Redux/Reducers'

const Form = (): JSX.Element=>{
const[newTitle, setNewTitle]= useState('')
const [newDescription, setNewDescription]= useState('')
const [ newISBN, setNewISBN]= useState('')
// const [newImage, setNewImage]= useState('')
const [newPublisher, setNewPublisher]= useState('')

const classes = useStyles()
const dispatch = useDispatch()

const bookState = useSelector((state:AppState)=> state.bookReducer.items)
console.log('bookstate', bookState)


const addNewBook = (e: React.FormEvent) => {
    e.preventDefault() 

    const createNewBook: NewBookFormValues = {
      title: newTitle,
      description: newDescription,
      ISBN: newISBN,
      publisher: newPublisher,
      // image: newImage ,
     
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
          fullWidth value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />

        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />

        <TextField
          name="ISBN"
          variant="outlined"
          label="ISBN"
          fullWidth value={newISBN}
          onChange={e => setNewISBN(e.target.value)}
        />

        <TextField
          name="publisher"
          variant="outlined"
          label="Publisher"
          fullWidth value={newPublisher}
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



