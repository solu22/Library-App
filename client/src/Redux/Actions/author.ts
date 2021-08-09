import {Dispatch} from "redux"
import axios from 'axios'
import {  GET_ALL_AUTHORS } from "../../types"
import { addNotification } from "./notification"

export const fetchAuthorThunk = ()=> async(dispatch: Dispatch)=>{
    try{
        const response = await axios.get('/authors')
        dispatch({
            type: GET_ALL_AUTHORS,
            payload: response.data
        })
    }
    catch(error){
        dispatch(addNotification({
            errorMessage: `Error ${error}`,
            successMessage: "",
        })
        )
    }
}
