import { BookActions, GET_ALL_BOOKS, Book, ADD_NEW_BOOK, UPDATE_BOOK, REMOVE_BOOK } from '../../types'

type InitState = {
  items: Book[]
}

export const initState: InitState = {
  items: [],
}

const bookReducer = (state = initState, action: BookActions): InitState => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return { items: action.payload }

    case ADD_NEW_BOOK:
      return { ...state, items: state.items.concat(action.payload) }

    case UPDATE_BOOK:
      return {
        ...state,
        items: state.items.map(existBook => (existBook._id === action.payload._id ? action.payload : existBook)),
      }

    case REMOVE_BOOK: {
      const leftBook = state.items.filter(item => item._id !== action.payload._id)
      return { ...state, items: leftBook }
    }

    default:
      return state
  }
}

export default bookReducer
