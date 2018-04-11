export const GET_CART = 'GET CART';
export const ADD_TO_CART = 'ADD TO CART';
export const REMOVE_FROM_CART ='REMOVE FROM CART';
export const INCREMENT_QUANTITY = 'INCREMENT QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT QUANTITY';

export const getCart = () => {
  return {
    type: GET_CART,
  }
}
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const incrementQuantity = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    id
  }
}

export const decrementQuantity = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    id
  }
}