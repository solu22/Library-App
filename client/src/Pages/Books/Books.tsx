/*React and Redux */
import React from 'react'
import SBook from '../../Components/Books/Book/Book'
import { AppState } from '../../Redux/Reducers'

/*Mui Imports */
import { CircularProgress } from '@material-ui/core'

import LinearWithValueLabel from '../LandingPage/Loader'
import Appbar from '../../Components/AppBar/Appbar'
import { Book } from '../../types'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    singleBook:{
      textAlign: 'center',
    }
  }),
);


type BookProps ={
  book: Book[]
}

const errorText = "No book with such title";
const Books = ({book}: BookProps) => {
 
  const classes = useStyles()

  return (
    <>
       <div>
      {!book.length ? (
        <div>
          {<p>{errorText}</p>}
        <LinearWithValueLabel />
        </div>
          
        ) : (
         
        <Grid container spacing={4}>
          {book.map(book => (
            <Grid key={book._id} item xs className="singleBook">
               <SBook key={book._id} book={book} />
            </Grid>
          ))}
        </Grid>
        
      )}
      </div>
    </>
  )
}

export default Books
