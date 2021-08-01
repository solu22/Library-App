import { combineReducers } from "redux";
import bookReducer from './book'
import authReducer from './auth'
import userReducer from './user'



const rootReducer = combineReducers({
    bookReducer,
    authReducer,
    userReducer,
    
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer