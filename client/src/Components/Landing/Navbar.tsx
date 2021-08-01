import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
//import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../Redux/Reducers'
import useStyles from './styles'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/Actions/auth'
import { isJSDocNullableType } from 'typescript'


const Navbar = () => {
  const classes = useStyles()
  const history= useHistory()

  const dispatch= useDispatch()

 const currentUser= useSelector((state:AppState)=> state.authReducer.activeUser)
 

  


  const logoutUser = ()=>{
    dispatch(logout())
    history.push('/')
  }
  

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className= {classes.brandContainer}>
        <Typography  className={classes.heading} variant="h2" align="center">
        <Link to="/" style={{textDecoration: 'none', cursor:'pointer'}}>Library App</Link>
      </Typography>


        </div>

        <Toolbar className= {classes.toolbar}>
   
           {currentUser ?(
            <div className={classes.profile}>
              <Typography>heloo</Typography>
                <Button variant = "contained" color="secondary" onClick={logoutUser}>Logout</Button>
             </div>
           ):(
            <div className={classes.profile}>
            <Button variant = "contained" color="secondary" ><Link to ="/">Login</Link></Button>
         </div>
           )}

      
        </Toolbar>
      
    </AppBar>
  )
}

export default Navbar
