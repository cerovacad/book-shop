import React, { Component } from 'react';
import NavBar from './NavBar';
import Grid from 'material-ui/Grid';
import BookItem from './BookItem';
import { connect } from 'react-redux';
import { getBooks } from '../action/bookActions';
import { getCart } from '../action/cartAction';


class Home extends Component {
  state = { 
    books: [],
    cart: []
  }

  componentDidMount = () => {
    this.props.dispatch(getBooks());
    this.props.dispatch(getCart());
  }

  render() {
    const books = this.props.books;
    const cart = [];
    this.props.cart.map((book) => {
      return cart.push(book.id);
    });
    return (
      <div>
        <NavBar history={this.props.history}/>
        <Grid container spacing={16}>
        {books.map((book) => {
          if(cart.indexOf(book.id) > -1){
            return (
              <Grid item xs={6} key={book.id}>
                <BookItem {...book} addedToCart='true'/>
              </Grid>
            );
          }else{
            return (
              <Grid item xs={6} key={book.id}>
                <BookItem {...book}/>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Home);