/*React and Redux */
import React from 'react'
import SBook from '../../Components/Books/Book/Book'
import { AppState } from '../../Redux/Reducers'

/*Mui Imports */
import { CircularProgress, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import LinearWithValueLabel from '../LandingPage/Loader'
import Appbar from '../../Components/AppBar/Appbar'
import { Book } from '../../types'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}))

type BookProps ={
  book: Book[]
}

const errorText = "No book with such title";
const Books = ({book}: BookProps) => {
 
  const classes = useStyles()

  return (
    <>

      {!book.length ? (
        <div>
          {<p>{errorText}</p>}
        <LinearWithValueLabel />
        </div>
          
        ) : (
        <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
          {book.map(book => (
            <Grid key={book.title} item xs={12} sm={6}>
              <SBook key={book.title} book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Books
