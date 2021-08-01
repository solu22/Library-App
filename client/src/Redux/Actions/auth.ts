
import { Dispatch } from "redux"
import {  USER_LOGOUT, USER_LOGIN, USER_LOGIN_REQUEST, USER_LOGIN_FAIL, AuthActions } from "../../types"

import axios from "axios"


export const login = (tokenId: string)=> async (dispatch: Dispatch<AuthActions>)=>{
    try {

        dispatch({type: USER_LOGIN_REQUEST})


        const {data}= await axios.post("http://localhost:3000/api/v1/users/login", {id_token: tokenId})

        console.log("data from auth actions", data)
        localStorage.setItem('token', data.token)
        dispatch({
        type: USER_LOGIN,
        payload: data.user
    })
    
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data?
            error.response.data
            :error.message
            
        })
        
    }

}

export const logout= ()=> async(dispatch: Dispatch<AuthActions>)=>{
    localStorage.removeItem('users')
    dispatch({
        type: USER_LOGOUT
    })
}



