/*React and Redux*/
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'

import { Formik, Form, Field, ErrorMessage } from 'formik'

/*Types */


/*Mui Imports */
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { validateAuthorSchema } from '../../../FormValidation/ValidateSchema'
import { useHistory } from 'react-router-dom'
import { addAuthorThunk } from '../../../Redux/Actions/author'
import MessageBar from '../../Notification/Notification'


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  paper: {
    padding: theme.spacing(),
    minWidth: 120,
    maxWidth: 300,
    margin: '70px auto'
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minWidth: 120,
    maxWidth: 300,
    
  },

  buttonSubmit: {
    marginBottom: 10,
  },
  textField: {
    '& p': {
      color: 'red',
    },
  },
}))

/*Form data initial State*/
const initialState = {
  firstName: '',
  lastName: '',
}

const AddAuthorForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = (values: typeof initialState, props: any) => {
    dispatch(addAuthorThunk(values))
    setTimeout(() => {
      history.push('/admin')
    }, 9000);

    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (
  
    
    <Paper className={classes.paper} elevation= {20}>
    <Typography variant="h6" style={{textAlign:"center"}}>Add a new Book Here</Typography>
      <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validateAuthorSchema}>
        {props => (
          <Form className={`${classes.root} ${classes.form}`}>
            

            <Field
              as={TextField}
              name="firstName"
              variant="outlined"
              label="FirstName"
              fullWidth
              helperText={<ErrorMessage name="firstName" />}
              className={classes.textField}
            />

            <Field
              as={TextField}
              name="lastName"
              variant="outlined"
              label="LastName"
              fullWidth
              helperText={<ErrorMessage name="lastName" />}
              className={classes.textField}
            />

            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? 'Adding Author' : 'Add Author'}
            </Button>
          </Form>
        )}
      </Formik>
      <MessageBar />
    </Paper>
  )
}

export default AddAuthorForm