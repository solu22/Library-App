
import { Dispatch } from "redux"
import { ADD_NEW_BOOK, Book, BookActions, GET_ALL_BOOKS, UPDATE_BOOK, REMOVE_BOOK, NewBookFormValues } from "../../types"

import axios from "axios"
import axiosInceptor from "../../axiosInceptor"

const baseURL = "http://localhost:3000/api/v1/books"


export const fetchBookThunk = ()=> async (dispatch: Dispatch<BookActions>)=>{
        try {
            const {data} = await axios.get(baseURL)
            dispatch({
                type: GET_ALL_BOOKS,
                payload: data,
            })
        } catch (e) {
            console.log("error message", e)
        }

    }


    export const addBookThunk = (book: NewBookFormValues)=> async (dispatch: Dispatch<BookActions>)=>{
        
        try {
            const {data} = await axiosInceptor.post(baseURL, book)
            console.log("data from addbookThunk", data)
            dispatch({
                type: ADD_NEW_BOOK,
                payload: data,
            })
        } catch (e) {
            console.log("error message", e)
        }

    }

    export const updateBookThunk = (book: Book)=> async (dispatch: Dispatch<BookActions>)=>{
        
        try {
            const {data} = await axiosInceptor.put(`${baseURL}/${book._id}`,book)
            dispatch({
                type: UPDATE_BOOK,
                payload: data,
            })
        } catch (e) {
            console.log("error message", e)
        }

    }


  export const removeBookThunk = (book: Book)=> async (dispatch: Dispatch<BookActions>)=>{
      try {
          const {data}= await axios.delete(`${baseURL}/${book._id}`,{data: book})
          dispatch({
              type: REMOVE_BOOK,
              payload: data,
          })
      } catch (error) {
          console.log("error message",error)
      }
  }







