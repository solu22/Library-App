import { ADD_NEW_AUTHOR, Author, AuthorActions, GET_ALL_AUTHORS } from "../../types"

type InitState = {
    authors: Author[]
}

export const initState: InitState={
    authors: []
}
    

const authorReducer = (state= initState, action: AuthorActions): InitState=> {
 switch (action.type) {
     case GET_ALL_AUTHORS:
      return { authors: action.payload}

     case ADD_NEW_AUTHOR:
     return {...state, authors: state.authors.concat(action.payload)
    }
      
      default:
      return state
 }
}

export default authorReducer