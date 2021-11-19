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
import { Link, useHistory } from 'react-router-dom'
import React from 'react'
import { useParams } from 'react-router-dom'
import useBook from '../../../custom-hook/useBook'
import EditBookForm from '../Form/EditBookForm'
import { removeBookThunk } from '../../../Redux/Actions/book'
import { useDispatch } from 'react-redux'
import { Book } from '../../../types'
import { Container, Grid, Icon, Paper } from '@material-ui/core'
import {createTheme} from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      marginTop: 70,
      marginLeft: 270,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    button: {
        marginTop: '10',
        marginLeft: '250'
      },
  })
)
type Params = {
  title: string
}

type BookProps = {
  book: Book
}

const theme = createTheme({
    palette: {
      type: 'dark'
    }
  })

const SingleBookDetails = ({ book }: BookProps) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { title } = useParams<Params>()
  const bookData = useBook()
  const bookDetails = bookData.find((book: { title: string }) => book.title === title)

  return (
    <>

      {bookDetails && (
        <ThemeProvider theme={theme}>
            
        <Grid container spacing={2} justify="center">
            
        
          <Grid item xs={12} sm={8}>
            <Card className={classes.root}>
            <CardMedia className={classes.media} image="https://picsum.photos/200/300"  />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center' }}>
                 Title: {bookDetails.title}
                </Typography><p></p>

                <Typography variant="body2" component="p" color="textSecondary" style={{ textAlign: 'center' }}>
                 About: {bookDetails.description}
                </Typography><p></p>

                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center' }}>
                  ISBN: {bookDetails.ISBN}
                </Typography><p></p>

                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center' }}>
                Publisher: {bookDetails.publisher}
                </Typography><p></p>
                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center' }}>
                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center' }}>
                Authors: {bookDetails.authors.map((author)=> author.firstName).join(', ')}
                </Typography><p></p>    
                <Button
                  variant="contained"
                  onClick={() => history.push('/homepage')}
                  color="primary"
                  className={classes.button}
                >
                    Back
                </Button>

                </Typography><p></p>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </ThemeProvider>
      )}
    </>
  )
}

export default SingleBookDetails
