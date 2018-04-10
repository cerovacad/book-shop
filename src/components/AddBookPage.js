import React, { Component } from 'react';
import AddBookForm from './AddBookForm';
import NavBar from './NavBar';

class AddBookPage extends Component {
  state = {  }

  handleSubmit = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <AddBookForm onSubmit={this.handleSubmit} />
      </div>      
    );
  }
}


export default AddBookPage;