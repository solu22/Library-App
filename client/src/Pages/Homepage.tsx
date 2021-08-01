import {Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect } from 'react'
import Books from '../Components/Books/Books'
import useStyles from '../styles'
import Form from '../Components/Books/Form/Form'
import Navbar from '../Components/Landing/Navbar'
import { fetchBookThunk } from '../Redux/Actions/book'
import { useDispatch } from 'react-redux'

const Homepage = (): JSX.Element => {
  
  const classes = useStyles()
  

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
               <Books />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default Homepage