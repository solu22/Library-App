import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer, { AppState } from './Reducers/index'
import { composeWithDevTools} from 'redux-devtools-extension'


const userInfoFromStorage = localStorage.getItem('users')
? JSON.parse(localStorage.getItem('userInfo') || '{}')
:null


const storeInitialState: AppState={
    bookReducer: {
        items: [],
    },

    authReducer:{
        activeUser: userInfoFromStorage,
        loading:false,
        error:"",
        
   },

    userReducer:{
         users: [],
         loading: false,
         error:"",
         
    },

}

const middlewares = [thunk]

const store = createStore(rootReducer, storeInitialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store

