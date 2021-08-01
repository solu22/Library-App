import React from 'react'
//import GoogleLogin from 'react-google-login'
import {Paper, TextField, Button, Typography,  Grid } from '@material-ui/core'
import useStyles from './styles'


const Login = ()=>{
    const classes= useStyles()
    const isSignup = false
    
    const handleSubmit = ()=>{

    }

    const handleChange = ()=>{
      console.log("hello")

    }

   return(
    <Paper className={classes.paper}>
      <Typography variant ="h5">{isSignup ? 'Sign Up': 'Sign In'}</Typography>
          

    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}> onSubmit={handleSubmit} 
      <Grid container spacing = {2}>
        {
          isSignup && (
            <>
            <TextField name ="firstName" label="firstName" onChange= {handleChange} />
            <TextField name ="lastName" label="lastName"   onChange= {handleChange} />
            </>
          )
        }

      </Grid>

      <TextField
        name="Firstname"
        variant="outlined"
        label="Firstname"
        //fullWidth value={email}
        //onChange={e => setNewTitle(e.target.value)}
      />

      <TextField
        name="description"
        variant="outlined"
        label="Description"
        //fullWidth value={newDescription}
        //onChange={e => setNewDescription(e.target.value)}
      />

      {/* <TextField
        name="ISBN"
        variant="outlined"
        label="ISBN"
        fullWidth value={newISBN}
        onChange={e => setNewISBN(e.target.value)}
      />

      <TextField
        name="publisher"
        variant="outlined"
        label="Publisher"
        fullWidth value={newPublisher}
        onChange={e => setNewPublisher(e.target.value)}
      /> */}


      <Button className={classes.buttonSubmit} color="primary" size="large" variant ="contained" type="submit" >
        SignIn
      </Button>
    </form>
  </Paper>
)

}
    

export default Login