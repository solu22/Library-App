import axios from "axios"
import { Dispatch } from "redux"
import {  USER_LOGOUT, USER_LOGIN, USER_LOGIN_REQUEST, USER_LOGIN_FAIL, AuthActions, LOCAL_LOGIN } from "../../types"


const loginFailed =(error:string):AuthActions=>{
    return {type: USER_LOGIN_FAIL, payload:error}
}


export const login = (tokenId: string)=> async (dispatch: Dispatch<AuthActions>)=>{
    try {

        dispatch({type: USER_LOGIN_REQUEST})


        const {data}= await axios.post("http://localhost:3000/api/v1/users/login", {id_token: tokenId})

        localStorage.setItem('token', data.token)
        dispatch({
        type: USER_LOGIN,
        payload: data
    })
    
    } catch (error) {
        dispatch(loginFailed(error))
        
    }

}

export const logout= ()=> async(dispatch: Dispatch<AuthActions>)=>{
    localStorage.removeItem('token')
    dispatch({
        type: USER_LOGOUT
    })
}

 export const localLogin = (values: {email: string; password: string})=> async(dispatch: Dispatch<AuthActions>)=>{

    try{

     const {data}= await axios.post("http://localhost:3000/api/v1/users/localLogin", values)
     localStorage.setItem('token', data.token)
    
     dispatch({
         type: LOCAL_LOGIN,
         payload: data
        })  
        
    }catch(error){
              let msg =""
              if(error.response.statusCode === 400){
              msg+= msg + "Invalid request"
               dispatch(loginFailed(msg))
           }
         }
         
    }
 
