import React, { useState, useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import GoogleButton from 'react-google-button'

import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles'

import ErrorMessage from './Error'
import LinearWithValueLabel from './Loader'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import { register } from '../../../Redux/Actions/user'
import { login } from '../../../Redux/Actions/auth'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cpassword: '',
}

const Auth = () => {
  const [isSignup, setisSignup] = useState(true)
  const [formData, setFormData] = useState(initialState)
  const [message, setMessage] = useState('')

  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()

  const authData = useSelector((state: AppState)=> state.authReducer)
  const{loading, error}= authData
  

  // useEffect(() => {
  //   if(users) {
  //      history.push('/homepage')
  //   }
  // }, [history, users])
  

  //const userData = useSelector((state: AppState)=> state.userReducer.users)

  const switchMode = () => {
    setisSignup(prev => !prev)
  }

  //Google responses
  const responseGoogleSuccess = async (response: any) => {
    console.log('REsponse is #### ', response)
    dispatch(login(response.tokenId))
    history.push('/homepage')
  }
  const responseGoogleFailure = (error: any) => {
    console.log('failure from google', error)
  }

  //handle submit for form

  const handleSubmit = async (e: React.SyntheticEvent) => {
    console.log("iam called")
    e.preventDefault()

    if (isSignup) {
      console.log("is here-->")
      if (formData.firstName === "" || formData.lastName === "" || formData.email ==="") {
        setMessage('field cannot be empty')
        return 
      }
      if (formData.password !== formData.cpassword) {
        setMessage('Password donot match')
        
      
      } else {
        e.currentTarget.textContent = 'Signing You Up'
        dispatch(register(formData))
        history.push('/homepage')
      }
    } else {
      if (!formData.email || !formData.password) {
        setMessage('field cannot be empty')
      } else {
        e.currentTarget.textContent = 'Signing You In'
        //dispatch(login(formData))
        history.push('/homepage')
      }
    }
  }
  return (
    <>
      <Paper className={classes.paper}>
        {loading && <LinearWithValueLabel />}
        {/* { error && <ErrorMessage variant="filled" severity="error">{error}</ErrorMessage>} */}
        {message && (
          <ErrorMessage variant="filled" severity="error">
            {message}
          </ErrorMessage>
        )}

        <Typography className={classes.loginHead}>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>

        <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <TextField
                autoComplete="fname"
                name="firstName"
                label="firstName"
                variant="outlined"
                fullWidth
                onChange={e => setFormData({...formData,firstName:e.target.value})}
              />

              <TextField
                autoComplete="fname"
                name="lastName"
                label="lastName"
                variant="outlined"
                fullWidth
                onChange={e => setFormData({...formData, lastName:e.target.value})}
              />
            </>
          )}

          <TextField
            autoComplete="email"
            name="Email"
            variant="outlined"
            label="Email"
            required
            fullWidth
            onChange={e => setFormData({...formData, email:e.target.value})}
          />

          <TextField
            autoComplete="password"
            name="password"
            variant="outlined"
            label="Password"
            required
            fullWidth
            onChange={e => setFormData({...formData,password:e.target.value})}
          />

          {isSignup && (
            <>
              <TextField
                autoComplete="confirm password"
                name="cpassword"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                onChange={e => setFormData({...formData, cpassword:e.target.value})}
              />
            </>
          )}

          <Button variant="contained" type="submit" color="primary">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <Button onClick={switchMode}>{isSignup ? 'Already have an account? Sign In' : 'Create One here'}</Button>

          <GoogleLogin
            clientId="244391030368-mhbd4icbeur977rvthmle9lt2b331s6t.apps.googleusercontent.com"
            render={renderProps => (
              <Button onClick={renderProps.onClick} disabled={renderProps.disabled} color="primary" variant="contained">
                Google Login In
              </Button>
            )}
            buttonText="Login"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailure}
            cookiePolicy={'single_host_origin'}
          />
        </form>
      </Paper>
    </>
  )
}


export default Auth
