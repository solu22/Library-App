import * as Yup from 'yup'


export const validateLoginSchema = Yup.object().shape({
    email:Yup.string().email('Please enter valid email address').required('Email is required'),
    password: Yup.string().required('Please enter your password with given criteria')
})

export const validateRegisterSchema=Yup.object().shape({
    firstName: Yup.string().required('Field cannot be empty'),
    lastName: Yup.string().required('Field cannot be empty'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Required')
      .required('Required'),
    password: Yup.string()
      .min(7, 'Password minimum length should be 7')
      .required('Please enter your password with given criteria'),
    cpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'password do not match')
      .required('Please confirm your password'),
  })

  export const validateBookSchema= Yup.object().shape({
    title: Yup.string().required('Field cannot be empty'),
    description: Yup.string().required('Field cannot be empty'),
    ISBN: Yup.string().required('Field cannot be empty'),
    publisher: Yup.string().required('Field cannot be empty')
    
   })

  export const validateAuthorSchema = Yup.object().shape({
    firstName: Yup.string().required('Field cannot be empty'),
    lastName: Yup.string().required('Field cannot be empty'),
  })


      