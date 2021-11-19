import React from 'react'
import Alert from '@material-ui/lab/Alert'

type ErrorMessageProps={
    variant: string,
    children: any,
    severity:any,
}

const Message = ({variant, children, severity}: ErrorMessageProps)=>{
    return(
        <Alert variant="filled" severity="error">
          <strong>{children} </strong> 
        </Alert>
    )
}

export default Message