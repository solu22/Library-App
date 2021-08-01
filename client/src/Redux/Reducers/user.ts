
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, UserActions, User  } from '../../types'

type InitState = {
  users: User[] | User,
  error: string
  loading: boolean

}

export const initState: InitState = {
  users: [],
  error: "",
  loading: false,
  
}


const userReducer = (state= initState , action: UserActions): InitState => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    return {...state, loading:true}  

      case USER_REGISTER_SUCCESS:
      return {users: action.payload, loading: false, error:""}

      case USER_REGISTER_FAIL:
      return {...state, loading:false, error: action.payload}


    default:
      return state
  }
}

export default userReducer