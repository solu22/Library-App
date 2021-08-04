/*React and redux */
import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'

/*Mui Imports */
import { TextField, Button, Typography, Paper, makeStyles } from '@material-ui/core'
import { register } from '../../../Redux/Actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import LinearWithValueLabel from '../Loader'
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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cpassword: '',
}

const Login = () => {
  const [formData, setFormData] = useState(initialState)
  const [message, setMessage]= useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  
  const userData = useSelector((state: AppState) => state.userReducer)
  const { loading} = userData

  

  //handle submit for form

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if(formData.password !== formData.cpassword) 
         {
         setMessage('Password do not match')
         }else{
          setMessage("") 
          e.currentTarget.textContent = 'Singing Up...'
          dispatch(register(formData))
          history.push('/login')
         }
}
  return (
    <>
      <Paper className={classes.paper}>

        <Typography className={classes.loginHead}>Sign Up</Typography>
        {message && <ErrorMessage variant= "filled" severity="error">{message}</ErrorMessage>}
        {loading && <LinearWithValueLabel />}

        <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <TextField
                autoComplete="fname"
                name="firstName"
                label="firstName"
                variant="outlined"
                required
                fullWidth
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
              />

              <TextField
                autoComplete="fname"
                name="lastName"
                label="lastName"
                variant="outlined"
                required
                fullWidth
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              />

          <TextField
            autoComplete="email"
            name="Email"
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
        
              <TextField
                autoComplete="confirm password"
                name="cpassword"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                onChange={e => setFormData({ ...formData, cpassword: e.target.value })}
              />

         
<Button variant="contained" type="submit" color="primary" >
           Sign Up
          </Button>
        

          
        </form>
      </Paper>
    </>
  )

}
export default Login

