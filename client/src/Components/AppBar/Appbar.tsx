/*Axios */
import axios from 'axios'

/*React Redux */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppState } from '../../Redux/Reducers'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/*Mui Imports */
import { AppBar, Button, Grid, TextField, Toolbar, Typography } from '@material-ui/core'
import { makeStyles,createStyles } from '@material-ui/core/styles'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { logout } from '../../Redux/Actions/auth'




const useStyles = makeStyles(theme => ({

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
}))

type AppbarProps ={
  handleSearch: any,
  search: any
}

const Appbar = ({handleSearch, search}: AppbarProps) => {
  const history = useHistory()
  const classes = useStyles()
  const dispatch = useDispatch()
  const currentUser = useSelector((state: AppState) => state.authReducer.activeUser)

  const logoutUser = () => {
    dispatch(logout())
    history.push('/')
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.profile}>
        <Typography className={classes.heading} variant="h2" align="center">
          <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
            Library App
          </Link>
        </Typography>
      </div>
      
      <div className={classes.appBar}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <MenuBookIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" 
            label="Search book here"
            onChange= {handleSearch}
            value= {search} />
          </Grid>
        </Grid>
      </div> 
     


      <Toolbar className={classes.toolbar}>
        {currentUser ? (
          <div className={classes.profile}>
            <Typography>{`Hello ${currentUser.firstName}`}</Typography>
            <Button variant="contained" color="secondary" onClick={logoutUser}>
              Logout
            </Button>
          </div>
        ) : (
          <div className={classes.profile}>
            <Button variant="contained" color="secondary">
              <Link to="/">Login</Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
