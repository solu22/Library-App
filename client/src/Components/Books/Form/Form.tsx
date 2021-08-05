/*React and Redux*/
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import { addBookThunk } from '../../../Redux/Actions/book'

import { Formik, Form, Field, ErrorMessage } from 'formik'

/*Types */
import { NewBookFormValues } from '../../../types'

/*Mui Imports */
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { validateBookSchema } from '../../../FormValidation/ValidateSchema'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(),
    },
  },
  paper: {
    padding: theme.spacing(),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
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
  title: '',
  description: '',
  ISBN: '',
  publisher: '',
}

const AddBookForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleSubmit = (values: typeof initialState, props: any) => {
    dispatch(addBookThunk(values))
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (
    <Paper className={classes.paper}>
      <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validateBookSchema}>
        {props => (
          <Form className={`${classes.root} ${classes.form}`}>
            <Typography variant="h6">Add a new Book Here</Typography>

            <Field
              as={TextField}
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              helperText={<ErrorMessage name="title" />}
              className={classes.textField}
            />

            <Field
              as={TextField}
              name="description"
              variant="outlined"
              label="Description"
              fullWidth
              helperText={<ErrorMessage name="description" />}
              className={classes.textField}
            />

            <Field
              as={TextField}
              name="ISBN"
              variant="outlined"
              label="ISBN"
              fullWidth
              helperText={<ErrorMessage name="ISBN" />}
              className={classes.textField}
            />

            <Field
              as={TextField}
              name="publisher"
              variant="outlined"
              label="Publisher"
              fullWidth
              helperText={<ErrorMessage name="publisher" />}
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
              {props.isSubmitting ? 'Adding Book' : 'Add Book'}
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}

export default AddBookForm
