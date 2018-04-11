import { GET_BOOKS } from '../action/bookActions';
import { ADD_BOOK } from '../action/bookActions';
import { UPDATE_BOOK } from '../action/bookActions';
import { DELETE_BOOK } from '../action/bookActions';

export default (state =[], action) => {
  switch(action.type){
    case GET_BOOKS:
      console.log('Fetching books...');
      return state;
    case ADD_BOOK:
      return [...state, action.payload];
    case UPDATE_BOOK:
      return state.map((book) => {
        if(book.id === action.payload.id){
          return {...book, ...action.payload}
        }
        return 'Updated';
      });
    case DELETE_BOOK:
      return state.filter((book) => {
        return book.id !== action.id
      });
    default:
      return state
  }
}