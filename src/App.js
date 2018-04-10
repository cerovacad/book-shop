import React from 'react';
import AppRouter from './router/AppRouter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootReducer';
import ReduxLogger from 'redux-logger';

import { addBook } from './action/bookActions'; 

const store = createStore(rootReducer, applyMiddleware(ReduxLogger));

const book = {
  id: 'eqw32',
  title: 'Aajao ajao',
  author: 'Nikola Cerovac',
  description: 'QWe eqwieqwjio eqoijioeqwjiojeoiqwjeioqwjio jioeqwjiow jqoiejqiwo jeiojqw ioj',
  genre: 'Drama',
  price: '12',
}

store.dispatch(addBook(book));

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;