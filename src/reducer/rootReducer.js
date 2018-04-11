import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  books: bookReducer,
  cart: cartReducer
})