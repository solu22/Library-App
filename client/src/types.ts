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

//Action type for users

export const USER_REGISTER_REQUEST ='USER_REGISTER_REQUEST'
export const USER_REGISTER_SUCCESS= 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'



//Single book
export type Book = {
  _id: string;
  title: string;
  description: string;
  status: boolean;
  ISBN: string;
  publisher: string;
  //image: string;
  // authors: string[];

}

//Bookform values
export type NewBookFormValues = Omit<Book, '_id'|'status'|'authors'> ; 

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
  _id: string,
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginData={
  users: User,
  token: string,
}


 export type loginRequest={
   type: typeof USER_LOGIN_REQUEST
 }
 
 export type loginUser={
   type: typeof USER_LOGIN
      payload: User
     }

 export type loginFail ={
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





export type AuthActions= loginRequest| loginUser | loginFail| logoutUser 

export type UserActions= registerRequest|registerUser| registerFail

export type BookActions= | getAllBooksAction| addNewBookAction| updateBookAction|removeBookAction



