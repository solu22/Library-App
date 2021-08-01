import React from 'react'
import SBook from './Book/Book'
import { AppState } from '../../Redux/Reducers'
import useStyles from './styles'
import { CircularProgress, Grid } from '@material-ui/core'
import useBook from '../../custom-hook/useBook'



const Books = ()=> {
    const bookData = useBook()


    const classes = useStyles()
     
    return (
        <>
            {!bookData.length ? <CircularProgress />:(
               <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                   {bookData.map((book)=>(
                       <Grid key={book.title} item xs={12} sm={6}>
                           <SBook key={book.title} book ={book} />
                       </Grid>
                   ))}

               </Grid>
           )}
           
        
        </>
    )
}

export default Books
