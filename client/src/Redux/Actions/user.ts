//register

import axios from "axios"
import { Dispatch } from "react"
import { UserActions, USER_LOGIN, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../../types"

export const register = (formData: { firstName: string; lastName: string; email: string; password: string; cpassword: string })=> async (dispatch: Dispatch<UserActions>)=>{
    try {

        dispatch({type: USER_REGISTER_REQUEST})

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        }

        const {data}= await axios.post("http://localhost:3000/api/v1/users/register", formData,config)

        console.log("data from user actions", data)
      
        dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
    })


       localStorage. setItem("users", JSON.stringify(data))
    
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data?
            error.response.data
            :error.message
            
        })
        console.log("error from user registration action", error)
    }

}

