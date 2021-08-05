import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

/*React and redux */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

/*Mui Imports */
import {
  TextField,
  Button,
  Typography,
  Paper,
  makeStyles,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@material-ui/core'
import { register } from '../../../Redux/Actions/user'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import LinearWithValueLabel from '../Loader'
import { validateRegisterSchema } from '../../../FormValidation/ValidateSchema'

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
  textField: {
    '& p': {
      color: 'red',
    },
  },
}))

/*Initial state of form data */
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  password: '',
  cpassword: '',
}

const Register = () => {
  const [message, setMessage] = useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const userData = useSelector((state: AppState) => state.userReducer)
  const { loading } = userData

 

  //handle submit for form
  const handleSubmit = (values: typeof initialState, props: any) => {
    dispatch(register(values))
    history.push('/login')
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }
  return (
    <>
      <Paper className={classes.paper}>
        <Typography className={classes.loginHead}>Sign Up</Typography>
        {loading && <LinearWithValueLabel />}

        <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validateRegisterSchema}>
          {props => (
            <Form className={`${classes.root} ${classes.form}`}>
              <Field
                as={TextField}
                autoComplete="fname"
                name="firstName"
                label="firstName"
                variant="outlined"
                fullWidth
                helperText={<ErrorMessage name="firstName" />}
                className={classes.textField}
              />

              <Field
                as={TextField}
                autoComplete="fname"
                name="lastName"
                label="lastName"
                variant="outlined"
                fullWidth
                helperText={<ErrorMessage name="lastName" />}
              />

              <Field
                as={TextField}
                autoComplete="email"
                name="email"
                variant="outlined"
                label="Email"
                fullWidth
                helperText={<ErrorMessage name="email" />}
                className={classes.textField}
              />

              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                  <FormControlLabel value="male" control={<Radio />} label="male" />
                  <FormControlLabel value="female" control={<Radio />} label="female" />
                </Field>
              </FormControl>
              <FormHelperText>
                <ErrorMessage name="gender" />
              </FormHelperText>
              <Field
                as={TextField}
                autoComplete="password"
                name="password"
                variant="outlined"
                label="Password"
                fullWidth
                type="password"
                helperText={<ErrorMessage name="password" />}
                className={classes.textField}
              />

              <Field
                as={TextField}
                autoComplete="confirm password"
                name="cpassword"
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type="password"
                helperText={<ErrorMessage name="cpassword" />}
                className={classes.textField}
              />

              <Button variant="contained" type="submit" disabled={props.isSubmitting} color="primary">
                {props.isSubmitting ? 'Signing Up ' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  )
}
export default Register
