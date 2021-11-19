import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { AppState } from '../../Redux/Reducers'


function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const MessageBar = () => {
  const classes = useStyles()

  const { errorMessage, successMessage } = useSelector((state: AppState) => state.notificationReducer.message)

  const [open, setOpen] = React.useState(false)
  
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  if (errorMessage === '' && successMessage === '') {
    return null
  }

  if (errorMessage) {
    return (
      <div className={classes.root}>
        <Alert severity="error">{errorMessage}</Alert>
      </div>
    )
  } 
  else{
    return (
      <div>
        <Snackbar open={true} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {successMessage}
          </Alert>
        </Snackbar>
      </div>
    )
  }
}


export default MessageBar
