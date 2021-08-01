import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { Paper } from '@material-ui/core'

import useStyles from './styles'



const Signup = () => {
    const classes = useStyles() 

  return (
      <>
         <Paper className={classes.paper}>
        <form noValidate className={`${classes.root} ${classes.form}`} > 
         {/* //onSubmit={updateBook}> */}

          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            //value={newTitle}
            //onChange={(e) => setNewTitle(e.target.value)}
          />

          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            //value={newDescription}
            //onChange={(e) => setNewDescription(e.target.value)}
          />

          <TextField
            name="ISBN"
            variant="outlined"
            label="ISBN"
            fullWidth
            //value={newISBN}
            //onChange={(e) => setNewISBN(e.target.value)}
          />

          <TextField
            name="publisher"
            variant="outlined"
            label="Publisher"
            fullWidth
            //value={newPublisher}
            //onChange={(e) => setNewPublisher(e.target.value)}
          />


        </form>
        </Paper>
    </>
  )
}
export default Signup