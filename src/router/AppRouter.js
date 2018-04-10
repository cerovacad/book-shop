import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
// import NavBar from '../components/NavBar';
import NotFound from '../components/NotFound';
import AddBookPage from '../components/AddBookPage';
import EditBookPage from '../components/EditBookPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>

    <Switch>
      <Route path='/' component={Home} exact={true} />
      <Route path='/addbook' component={AddBookPage} exact={true} />
      <Route path='/editbook/:id' component={EditBookPage} exact={true} />
      <Route component={NotFound} exact={true} />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

