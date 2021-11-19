import { ADD_NOTIFICATION, Message, NotificationAction } from "../../types";


export const addNotification =(message: Message): NotificationAction =>{
    return{
        type: ADD_NOTIFICATION,
        payload: message
    }
}