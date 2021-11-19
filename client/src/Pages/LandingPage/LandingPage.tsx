import React from 'react'
import AuthButton from './AuthButton'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(4),
        alignItems: 'center',
      
      },
    },
  })
)

const LandingPage = () => {
  const classes = useStyles()

  return (

    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
  <Button variant="contained" color="primary" href="/register">Register</Button>
  </Grid><p></p>  

   <Grid item xs={3}>
  <Button variant="contained" color="primary" href="/login">Login</Button>
  </Grid><p></p>   

   <Grid item xs={3}>
   <AuthButton />
  </Grid>    

</Grid> 

  )
}

export default LandingPage
