import { combineReducers } from "redux";
import bookReducer from './book'
import authReducer from './auth'
import userReducer from './user'
import authorReducer from "./author";
import notificationReducer from "./notification"



const rootReducer = combineReducers({
    bookReducer,
    authReducer,
    userReducer,
    authorReducer,
    notificationReducer,
    
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer