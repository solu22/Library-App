//register

import axios from "axios"
import { Dispatch } from "react"
import { UserActions, AuthActions, USER_LOGIN, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../types"

export const register = (values: { firstName: string; lastName: string; email: string; password: string; cpassword: string })=> async (dispatch: Dispatch<UserActions>)=>{
    try {

        dispatch({type: USER_REGISTER_REQUEST})

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        }

        const {data}= await axios.post("http://localhost:3000/api/v1/users/register", values,config)
        dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
    })
 
    
    } catch (error) {
        //alert(error)
    
    }
   
}

