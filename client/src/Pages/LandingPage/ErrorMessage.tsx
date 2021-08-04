import React from 'react'
import Alert from '@material-ui/lab/Alert'

type ErrorMessageProps={
    variant: string,
    children: any,
    severity:any,
}

const ErrorMessage = ({variant, children, severity}: ErrorMessageProps)=>{
    return(
        <Alert variant="filled" severity="error">
          <strong>{children} </strong> 
        </Alert>
    )
}

export default ErrorMessage