import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthorThunk } from '../Redux/Actions/author'
import { AppState } from '../Redux/Reducers'

const useAuthor = () => {
    const dispatch = useDispatch()
    const authorData = useSelector((state: AppState)=> state.authorReducer.authors)

    useEffect(() => {
        dispatch(fetchAuthorThunk())
        
    }, [dispatch])
    
    return authorData
}

export default useAuthor

