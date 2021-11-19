/*React and Redux*/
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../Redux/Reducers'
import { addBookThunk } from '../../../Redux/Actions/book'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'

/*Mui Imports */
import { TextField, Button, Typography, Paper, MenuItem, useTheme} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { validateBookSchema } from '../../../FormValidation/ValidateSchema'
import { useHistory } from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import useAuthor from '../../../custom-hook/useAuthor'

import {Select} from 'formik-material-ui'
import MuiTextField from '@material-ui/core/TextField';
import {
  Autocomplete,
  AutocompleteRenderInputParams
 
} from 'formik-material-ui-lab'
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

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  chip: {
    margin: 2,
  },

  buttonSubmit: {
    marginBottom: 10,
  },
  
  formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },

  textField: {
    '& p': {
      color: 'red',
    },
  },
}))


type FormValues ={
  title: string
  description: string
  ISBN: string
  publisher: string
  authors: Array<{_id: string}> 

}

/*Form data initial State*/
const initialState: FormValues = {
  title: '',
  description: '',
  ISBN: '',
  publisher: '',
  authors: [] 
}




const AddBookForm = () => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
   const theme = useTheme();
  const authorData = useAuthor()

  const handleSubmit = (values: FormValues, props: any) => {
       dispatch(addBookThunk(values))
       setTimeout(() => {
        history.push('/admin')
      }, 3000);
     
    setTimeout(() => {
      const authorIds = values.authors.map(author => author._id)
      JSON.stringify({...values, authors: authorIds}, null, 2)
      props.resetForm()
      props.setSubmitting(false)
    }, 100)
  }

  return (
  
    
    <Paper className={classes.paper} elevation= {20}>
    <Typography variant="h6" style={{textAlign:"center"}}>Add a new Book Here</Typography>
      <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={validateBookSchema}>
        {props => (
          <Form className={`${classes.root} ${classes.form}`}>
            

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
           
           
           <Field
              name="authors"
              multiple
              component={Autocomplete}
              options={authorData}
              getOptionLabel={(option: any) => option.firstName}
              style={{width: 300}}
              renderInput={(params: AutocompleteRenderInputParams) => (
                <MuiTextField
                  {...params}
                 
                  label="Select Authors"
                  variant="outlined"
                />
              )}
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
      <MessageBar/>
    </Paper>
  )
}

export default AddBookForm
