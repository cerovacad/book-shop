import { GET_CART } from '../action/cartAction';
import { ADD_TO_CART } from '../action/cartAction';
import { REMOVE_FROM_CART } from '../action/cartAction';
import { INCREMENT_QUANTITY } from '../action/cartAction';
import { DECREMENT_QUANTITY } from '../action/cartAction';

export default (state = [], action) => {
  switch(action.type){
    case GET_CART:
      console.log('Fetching cart');
      return state;
    case ADD_TO_CART:
      return [...state, {id: action.id, quantity: 1}];
    case REMOVE_FROM_CART:
      return state.filter((book) => {
        return book.id !== action.id
      });
    case INCREMENT_QUANTITY:
      return state.map((book) => {
        if(book.id === action.id){
          return {id: book.id, quantity: book.quantity + 1}
        }else{
          return book;
        }
      })
    case DECREMENT_QUANTITY:
      return state.map((book) => {
        if(book.id === action.id){
          if(book.quantity > 1){
            return {id: book.id, quantity: book.quantity - 1}
          }else{
            return book;
          }
        }else{
          return book;
        }
      })
    default:
      return state;
  }
}
