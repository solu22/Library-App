import React from 'react'


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/*Google Button */

import { login } from '../../Redux/Actions/auth'
import AuthButton from './AuthButton'

//import { useDispatch } from 'react-redux'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
      },
    },
  })
)

//Google responses

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
