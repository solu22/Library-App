import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer, { AppState } from './Reducers/index'
import { composeWithDevTools} from 'redux-devtools-extension'


const userInfoFromStorage = localStorage.getItem('token')

const storeInitialState: AppState={
    bookReducer: {
        items: [],
    },

    authReducer:{
        activeUser: null,
        loading:false,
        error:"",
        
   },
    userReducer:{
         users: [],
         loading: false,
         error:"",
         
    },

    authorReducer:{
        authors: []
    },

    notificationReducer:{
        message: {errorMessage: "", successMessage:""}
    },

}

const middlewares = [thunk]

const store = createStore(rootReducer, storeInitialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store

