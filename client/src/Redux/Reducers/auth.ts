
import {  USER_LOGIN,USER_LOGOUT,  User, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, AuthActions, LOCAL_LOGIN } from '../../types'

type InitState = {
  activeUser: User| null,
  error: string,
  loading: boolean,

}

export const initState: InitState = {
  activeUser: null,
  error: "",
  loading: false,
  
  
}


const authReducer = (state= initState , action: AuthActions): InitState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    return {...state, loading:true}  

      case USER_LOGIN:
      return {activeUser: action.payload, loading: true, error:""}

      case LOCAL_LOGIN:
      return {activeUser: action.payload, loading: true, error:""}

      case USER_LOGIN_FAIL:
      return {...state, loading:false, error: action.payload}

      case USER_LOGOUT:
      return state

    default:
      return state
  }
}

export default authReducer

