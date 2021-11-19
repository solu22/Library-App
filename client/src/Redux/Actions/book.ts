
import { Dispatch } from "redux"
import { ADD_NEW_BOOK, Book, BookActions, GET_ALL_BOOKS, UPDATE_BOOK, REMOVE_BOOK } from "../../types"

import axios from "axios"
import axiosInterceptor from "../../util/axiosInterceptor"
import { addNotification } from "./notification"

const baseURL = "http://localhost:3000/api/v1/books"


export const fetchBookThunk = ()=> async (dispatch: Dispatch<BookActions>)=>{
        try {
            const {data} = await axios.get(baseURL)
            dispatch({
                type: GET_ALL_BOOKS,
                payload: data,
            })
        } catch (e) {
            return e
        }

    }


    export const addBookThunk = (values: { title: string; description: string; ISBN: string; publisher: string })=> async (dispatch: Dispatch)=>{
        
        try {
            const {data} = await axiosInterceptor.post(baseURL, values)
    
            dispatch({
                type: ADD_NEW_BOOK,
                payload: data,
            })
            dispatch( addNotification({
                errorMessage:"",
                successMessage: " Successfully added new Book"
            }))  
        } catch (error) {
            dispatch(addNotification({
                errorMessage: `Error ${error}`,
                successMessage: "",
            }))
        }

    }

    export const updateBookThunk = (book: Book)=> async (dispatch: Dispatch)=>{
        
        try {
            const {data} = await axiosInterceptor.put(`${baseURL}/${book._id}`,book)
            dispatch({
                type: UPDATE_BOOK,
                payload: data,
            })
            dispatch( addNotification({
                errorMessage:"",
                successMessage: " Successfully updated Book"
            }))  
        } catch (error) {
            dispatch(addNotification({
                errorMessage: `Error ${error}`,
                successMessage: "",
            }))
        }

    }


  export const removeBookThunk = (book: Book)=> async (dispatch: Dispatch)=>{
      try {
          const {data}= await axiosInterceptor.delete(`${baseURL}/${book._id}`,{data: book})
          dispatch({
              type: REMOVE_BOOK,
              payload: data,
          })
          dispatch( addNotification({
            errorMessage:"",
            successMessage: " Successfully removed Book"
        }))  
      } catch (error) {
        dispatch(addNotification({
            errorMessage: `Error ${error}`,
            successMessage: "",
        }))
      }
  }







