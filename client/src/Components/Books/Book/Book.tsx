import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import useStyles from './styles'
import EditBookForm from '../Form/EditBookForm'
import { removeBookThunk } from '../../../Redux/Actions/book'

import { useDispatch } from 'react-redux'
import { Book } from '../../../types'

export type BookProps = {
  book: Book,
}

export default function SBook({ book }: BookProps) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDelete = ()=>{ dispatch(removeBookThunk(book)) }

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
        
        <IconButton >
          <EditBookForm key ={book._id} book={book} />
          </IconButton>
      
        <IconButton color="primary" onClick= {handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
}


