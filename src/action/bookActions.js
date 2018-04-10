export const GET_BOOKS = 'GET BOOKS'; 
export const ADD_BOOK = 'ADD BOOK'; 
export const UPDATE_BOOK = 'UPDATE BOOK'; 
export const DELETE_BOOK = 'DELETE BOOK'; 
//----GET BOOKS
export const getBooks = () => {
  return {
    type: GET_BOOKS
  }
}
//----ADD BOOK
export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: {...book}
  }
}
//----UPDATE BOOK
export const updateBook = (book) => {
  return {
    type: UPDATE_BOOK,
    payload: {
      ...book
    }
  }
}
//----DELETE BOOK
export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    id
  }
}