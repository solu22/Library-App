/*React and redux */
import React, { useState } from 'react'

/*Mui Imports */
import { TextField, Button, Typography, Paper, makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import LinearWithValueLabel from '../Loader'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import { localLogin } from '../../../Redux/Actions/auth'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  paper: {
    padding: '30px 20px',
    width: 300,
    margin: '50px auto',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  buttonSubmit: {
    marginBottom: 20,
  },

  loginHead: {
    textAlign: 'center',
  },
}))

/*Initial state of form data */
const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  const [formData, setFormData] = useState(initialState)
  const [message, setMessage] = useState('')
  const classes = useStyles()
  const authData = useSelector((state: AppState) => state.authReducer)
  const { loading, error } = authData
  const dispatch = useDispatch()
  const history = useHistory()

  //handle submit for form

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    // if(error){
    //   <p>{error}</p>
    // }
    e.currentTarget.textContent = 'Signing You In'
    dispatch(localLogin(formData))
    history.push('/homepage')
  }

  return (
    <>
      <Paper className={classes.paper}>
        {loading && <LinearWithValueLabel />}
        {message && (
          <ErrorMessage variant="filled" severity="error">
            {message}
          </ErrorMessage>
        )}

        <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <TextField
            autoComplete="email"
            name="email"
            variant="outlined"
            label="Email"
            required
            fullWidth
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />

          <TextField
            autoComplete="password"
            name="password"
            variant="outlined"
            label="Password"
            required
            fullWidth
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />

          <Button variant="contained" type="submit" 
           onClick={handleSubmit}  color="primary">
            Sign In
          </Button>
        </form>
      </Paper>
    </>
  )
}
export default Login
