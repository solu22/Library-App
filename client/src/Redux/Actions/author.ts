import {Dispatch} from "redux"
import axios from 'axios'
import {  ADD_NEW_AUTHOR, GET_ALL_AUTHORS } from "../../types"
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

export const addAuthorThunk = (values: { firstName: string; lastName: string })=> async(dispatch: Dispatch)=>{
    try {
    const {data} = await axios.post('/authors', values)

    dispatch({
        type: ADD_NEW_AUTHOR,
        payload: data
    })
    dispatch( addNotification({
        errorMessage:"",
        successMessage: " Successfully added new Author"
    }))
    } catch (error) {
      dispatch(addNotification({
          errorMessage: `Error ${error}`,
          successMessage: "",
      }))
    }
}
