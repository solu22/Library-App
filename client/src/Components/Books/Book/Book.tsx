/*Mui Imports */

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import { red } from '@material-ui/core/colors'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

/*React and Redux */
import React from 'react'
import EditBookForm from '../Form/EditBookForm'
import { removeBookThunk } from '../../../Redux/Actions/book'
import { useDispatch, useSelector } from 'react-redux'

import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

/*Types */
import { Book } from '../../../types'
import { AppState } from '../../../Redux/Reducers'
export type BookProps = {
  book: Book
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    avatar: {
      backgroundColor: red[500],
    },
  })
)

const theme = createTheme({
  palette: {
    type: 'dark',
  },
})

export default function SBook({ book }: BookProps) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { activeUser} = useSelector((state: AppState) => state.authReducer)
  const handleDelete = () => {
    if (window.confirm(`Do you really want to delete ${book.title}`)) {
      dispatch(removeBookThunk(book))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            Title: {book.title}
          </Typography>
          <p></p>

          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            <Link to={`/homepage/${book.title}`}>
              <Button variant="contained">Details</Button>
            </Link>
          </Typography><p></p>
        
           {activeUser && (<Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
            <IconButton style={{color:"whitesmoke"}}>
              <EditBookForm key={book._id} book={book} />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon />
            </IconButton>
          </Typography>
          )
           }
           
        
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
