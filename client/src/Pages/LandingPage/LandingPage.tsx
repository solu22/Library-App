import React from 'react'
import AuthButton from './AuthButton'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
      },
    },
  })
)

const LandingPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" href="/register">
        Register
      </Button>
      <Button variant="contained" color="secondary" href="/login">
        Login
      </Button>
      <AuthButton />
    </div>
  )
}

export default LandingPage
