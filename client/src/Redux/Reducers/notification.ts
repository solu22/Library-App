import { ADD_NOTIFICATION, Message,NotificationAction } from "../../types"


type InitState = {
    message: Message[]
}

export const initState: InitState = {
    message: []
}

const notificationReducer = (state= initState, action: NotificationAction): InitState =>{
    switch( action.type){

    case ADD_NOTIFICATION:{
        return{...state, message: state.message.concat(action.payload)}
    }

    default:
    return state
}
}

export default notificationReducer

    