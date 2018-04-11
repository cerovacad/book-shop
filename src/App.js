import React from 'react';
import AppRouter from './router/AppRouter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootReducer';
import ReduxLogger from 'redux-logger';

import { addBook } from './action/bookActions'; 
import { addToCart } from './action/cartAction';

const store = createStore(rootReducer, applyMiddleware(ReduxLogger));

const book = {
  id: 'eqw32',
  title: 'Aajao ajao',
  author: 'Nikola Cerovac',
  description: 'QWe eqwieqwjio eqoijioeqwjiojeoiqwjeioqwjio jioeqwjiow jqoiejqiwo jeiojqw ioj',
  genre: 'Drama',
  price: '12',
}

const book2 = {
  id: 'eqw321qweqwewqe',
  title: 'Majao mjao',
  author: 'Nikola Cerovac',
  description: 'QWe eqwieqwjio eqoijioeqwjiojeoiqwjeioqwjio jioeqwjiow jqoiejqiwo jeiojqw ioj',
  genre: 'Drama',
  price: '7',
}

store.dispatch(addBook(book));
store.dispatch(addBook(book2));
store.dispatch(addToCart(book.id));
store.dispatch(addToCart(book2.id));


const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;