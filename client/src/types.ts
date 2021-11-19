/*Action types for all entities */

//Action type for books
export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK'
export const UPDATE_BOOK= 'UPDATE_BOOK'
export const REMOVE_BOOK= 'REMOVE_BOOK'

//Action type  Auth

export const USER_LOGIN_REQUEST= 'USER_LOGIN_REQUEST'
export const USER_LOGIN ='USER_LOGIN'
export const  USER_LOGIN_FAIL= 'USER_LOGIN_FAIL'
export const USER_LOGOUT ='USER_LOGOUT'
export const LOCAL_LOGIN= 'LOCAL_LOGIN'

//Action type for users

export const USER_REGISTER_REQUEST ='USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS= 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

//Action type for authors
export const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS'
export const ADD_NEW_AUTHOR = 'ADD_NEW_AUTHOR'
export const UPDATE_AUTHOR= 'UPDATE_AUTHOR'
export const REMOVE_AUTHOR= 'REMOVE_AUTHOR'

//Single book
export type Book = {
  _id: string;
  title: string;
  description: string;
  status: boolean;
  ISBN: string;
  publisher: string;
  authors: Array<{firstName: string, _id: string}>;

}


export type EditBookFormValues = Omit<Book, 'authors'> ; 

//Book actions
export type getAllBooksAction = {
    type: typeof GET_ALL_BOOKS
    payload: Book[]
}

export type addNewBookAction= {
  type: typeof ADD_NEW_BOOK
  payload: Book
}

export type updateBookAction ={
  type: typeof UPDATE_BOOK
  payload: Book
}


export type removeBookAction ={
  type: typeof REMOVE_BOOK
  payload: Book
}



/*user actions */
export type User ={
  _id: string
  firstName: string
  lastName: string
  email: string
  password: string
  isAdmin: boolean
}




 export type loginRequest={
   type: typeof USER_LOGIN_REQUEST
 }
 
 export type loginUser={
   type: typeof USER_LOGIN
      payload: User
     }

 export type loginFailed ={
   type: typeof USER_LOGIN_FAIL
   payload: string
 }


 export type logoutUser={
      type: typeof USER_LOGOUT
}

//user types
export type registerRequest={
  type: typeof USER_REGISTER_REQUEST
}

export type registerUser={
  type: typeof USER_REGISTER_SUCCESS
     payload: User
    }

export type registerFail ={
  type: typeof USER_REGISTER_FAIL
  payload: string
}


/*Local login */
export type localLogin={
  type: typeof LOCAL_LOGIN
  payload: User
}

//An Author

export type Author ={
  _id: string,
  firstName: string,
  lastName: string,
}

/*Authors actions */
export type getAllAuthorsAction = {
  type: typeof GET_ALL_AUTHORS
  payload: Author[]
}

export type addNewAuthorAction= {
type: typeof ADD_NEW_AUTHOR
payload: Author
}

export type updateAuthorAction ={
type: typeof UPDATE_AUTHOR
payload: Author
}


export type removeAuthorAction ={
type: typeof REMOVE_AUTHOR
payload: Author
}

//Action type for Notifications

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'

//A message
export type Message ={
  errorMessage: string
  successMessage: string
}

export type addNotificationAction ={
  type: typeof ADD_NOTIFICATION
  payload: Message
}

export type NotificationAction= addNotificationAction


export type AuthActions= loginRequest| loginUser | loginFailed| logoutUser | localLogin

export type UserActions= registerRequest|registerUser| registerFail

export type BookActions=  getAllBooksAction| addNewBookAction| updateBookAction|removeBookAction

export type AuthorActions= getAllAuthorsAction | addNewAuthorAction | updateAuthorAction | removeAuthorAction



