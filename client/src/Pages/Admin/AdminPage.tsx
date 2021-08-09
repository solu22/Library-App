import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import { Button, Container, Paper, TextField } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import useBook from '../../custom-hook/useBook'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(9),
      },
    },

    paper: {
      padding: theme.spacing(8),
      textAlign: 'center',
    },

    appBar: {
      padding: 10,
    },

    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 720,
      textAlign: 'center',
      margin: '130px auto',
    },
  })
)

export default function Admin() {
  const classes = useStyles()
  const bookData = useBook()

  return (
    <>
      <Container maxWidth="lg" style={{ textAlign: 'center' }}>
        <AppBar className={classes.appBar}>
          <Typography variant="h4" style={{ textAlign: 'center', padding: '20' }}>
            Welcome To Admin Page
          </Typography>
        </AppBar>

        <div style={{ marginTop: 100, marginLeft: 100 }}>
          <div className={classes.root}>
            <Button variant="contained" href="admin/addBook" type="submit" color="primary">
              Add Book
            </Button>
            <Button variant="contained"  color="primary">
              Add Author
            </Button>
            <Button variant="contained"  color= "primary">
              Add User
            </Button>
          </div>
        </div>

        <form className={classes.form}>
          <TextField
            id="filled-full-width"
            style={{ margin: 9 }}
            value={`The number of books: ${bookData.length}`}
            variant="filled"
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
          />

          <TextField
            id="filled-full-width"
            style={{ margin: 9 }}
            value={`The number of books: ${bookData.length}`}
            variant="filled"
            inputProps={{ min: 0, style: { textAlign: 'center' } }}
          />
        </form>
      </Container>
    </>
  )
}
