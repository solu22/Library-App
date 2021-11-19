import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Button, Container, Grid, Paper, TextField, Toolbar } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import useBook from '../../custom-hook/useBook'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../Redux/Reducers'
import { logout } from '../../Redux/Actions/auth'
import useAuthor from '../../custom-hook/useAuthor'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(9),
      },
    },

    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 720,
      textAlign: 'center',
      margin: '130px auto',
    },

  })
)

export default function Admin() {
  const classes = useStyles()
  const bookData = useBook()
  const history = useHistory()
  const dispatch = useDispatch()
  const { activeUser } = useSelector((state: AppState) => state.authReducer)
  const authorData = useAuthor()

  const logoutUser = () => {
    dispatch(logout())
    history.push('/')
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item>
              <Typography>Welcome To Admin Page</Typography>
            </Grid>

            <Grid item>
              <div>
                {activeUser ? (
                  <Grid item>
                    <Button style={{color:'white'}} onClick={logoutUser}>Logout</Button>
                  </Grid>
                ) : (
                  <Button onClick={() => history.push('/')} style={{color:'white'}}>Login</Button>
                )}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: 100, marginLeft: 100 }}>
          <div className={classes.root}>
                      <Button variant="contained"  onClick={() => history.push('admin/addBook')} type="submit" color="primary">
                        Add Book
                      </Button>
                      <Button variant="contained"  onClick={() => history.push('admin/addAuthor')} type="submit" color="primary">
                        Add Author
                      </Button>
                      <Button variant="contained"  onClick={() => history.push('admin/User')} type="submit" color="primary">
                        Add User
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        onClick={() => history.push('/homepage')}
                      >
                        Show HomePage
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        onClick={() => history.push('/admin/authorList')}
                      >
                        Show AuthorList
                      </Button>

                      <form className={classes.form}>
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 9 }}
                      value={`The number of Books: ${bookData.length}`}
                      variant="filled"
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                    />

                    
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 9 }}
                      value={`The number of Authors: ${authorData.length}`}
                      variant="filled"
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                    />
                  </form>
          </div>
        </div>

    </>
  )
}

