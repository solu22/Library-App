import { ADD_NOTIFICATION, Message,NotificationAction } from "../../types"


type InitState = {
    message: {
        errorMessage: string, 
        successMessage: string
    }
}

export const initState: InitState = {
    message: {errorMessage:'', successMessage:''}
}

const notificationReducer = (state= initState, action: NotificationAction): InitState =>{
    switch( action.type){

    case ADD_NOTIFICATION:{
        return{...state, 
        message: action.payload
    }
    }

    default:
    return state
}
}

export default notificationReducer

    