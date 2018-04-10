import React, { Component } from 'react';
import NavBar from './NavBar';
import Grid from 'material-ui/Grid';
import BookItem from './BookItem';
import { connect } from 'react-redux';
import { getBooks } from '../action/bookActions';


class Home extends Component {
  state = { books: [] }

  componentDidMount = () => {
    console.log('Fetching books...');
    const books = this.props.dispatch(getBooks());
    this.setState({
      books
    });
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <Grid container spacing={16}>
        {this.props.books.map((book) => {
          return (
            <Grid item xs={6} key={book.id}>
              <BookItem {...book}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(Home);