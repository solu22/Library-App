/*React and redux */
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateLoginSchema } from '../../../FormValidation/ValidateSchema'

/*Mui Imports */
import { TextField, Button, Typography, Paper, makeStyles } from '@material-ui/core'
import LinearWithValueLabel from '../Loader'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import { localLogin } from '../../../Redux/Actions/auth'
import { useHistory } from 'react-router-dom'


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
  email: '',
  password: '',
}

const Login = () => {
  const classes = useStyles()
  const { activeUser, loading } = useSelector((state: AppState) => state.authReducer)

  const dispatch = useDispatch()
  const history = useHistory()

  if (activeUser) {
    if (activeUser.isAdmin) {
      history.push('/admin')
    } else {
      history.push('/homepage')
    }
  }

  const handleSubmit = (values: typeof initialState, props: any) => {
    dispatch(localLogin(values))

    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 100)
  }

  return (
    <>
      <Paper className={classes.paper}>
        {/* {alert(error)} */}
        {loading && <LinearWithValueLabel />}

        <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validateLoginSchema}>
          {props => (
            <Form className={`${classes.root} ${classes.form}`}>
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

              <Field
                as={TextField}
                autoComplete="password"
                name="password"
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                helperText={<ErrorMessage name="password" />}
                className={classes.textField}
              />

              <Button variant="contained" type="submit" disabled={props.isSubmitting} color="primary">
                {props.isSubmitting ? 'Signing In' : 'Sign In'}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
  )
}
export default Login
