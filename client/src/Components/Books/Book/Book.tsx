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

/*React and Redux */
import React from 'react'
import EditBookForm from '../Form/EditBookForm'
import { removeBookThunk } from '../../../Redux/Actions/book'
import { useDispatch } from 'react-redux'

/*Types */
import { Book } from '../../../types'
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

export default function SBook({ book }: BookProps) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeBookThunk(book))
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={book.title}
        subheader="September 14, 2016"
      />
      <CardMedia className={classes.media} image="https://picsum.photos/200/300" title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <EditBookForm key={book._id} book={book} />
        </IconButton>

        <IconButton color="primary" onClick={handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
