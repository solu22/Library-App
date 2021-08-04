import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Books from '../Pages/Books/Books'
import { fetchBookThunk } from '../Redux/Actions/book'
import { AppState } from '../Redux/Reducers'

const useBook = () => {
  const dispatch = useDispatch()
  const bookData = useSelector((state:AppState)=> state.bookReducer.items)

  useEffect(() => 
  {
    dispatch(fetchBookThunk())
  }, [dispatch])

  return bookData
}



export default useBook


