import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Delete from '@material-ui/icons/Delete';
import Save from '@material-ui/icons/Save';
import uid from 'uid';
import { connect } from 'react-redux';
import { addBook, updateBook, deleteBook } from '../action/bookActions';
import FileUpload from '@material-ui/icons/FileUpload';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

const genres = [  
  {
    value: 'Drama',
    label: 'Drama',
  },
  {
    value: 'Comedy',
    label: 'Comedy',
  },
  {
    value: 'Romance',
    label: 'Romance',
  },
  {
    value: 'Biography',
    label: 'Biography',
  },
];

class AddBookForm extends React.Component {
  state = {
    id: uid(),
    title: '',
    author: '',
    description: '',
    genre: 'Drama',
    price: '',
  };

  componentDidMount = () => {
    if(this.props.edit){
      this.props.books.map((book) => {
        if(book.id === this.props.book){
          this.setState({
            ...book
          })
        }
        return 'Book loaded'
      })
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
    if(this.props.edit){
      this.props.dispatch(updateBook(this.state))
    }else{
    this.props.dispatch(addBook(this.state));
    }
    this.props.onSubmit();
  }

  handleCancel = () => {
    this.props.onSubmit();
  }

  handleDelete = () => {
    this.props.dispatch(deleteBook(this.state.id));
    this.props.onSubmit();
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
      <Button className={classes.button} variant="raised" color="default">
            Upload image
      <FileUpload className={classes.rightIcon} />
      </Button>
        <TextField
          id="title"
          label="Title"
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <TextField
          id="author"
          label="Author"
          className={classes.textField}
          value={this.state.author}
          onChange={this.handleChange('author')}
          margin="normal"
        />
        <TextField
          id="description"
          label="Desctiption"
          multiline
          className={classes.textField}
          value={this.state.description}
          onChange={this.handleChange('description')}
          margin="normal"
        />
        <TextField
          id="genre"
          select
          label="Genre"
          className={classes.textField}
          value={this.state.genre}
          onChange={this.handleChange('genre')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select genre"
          margin="normal"
        >
          {genres.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="price"
          label="Price"
          value={this.state.price}
          onChange={this.handleChange('price')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        
        <Button onClick={this.handleSubmit} className={classes.button} variant="raised" color="primary">
          Save
          <Save className={classes.rightIcon} />
        </Button>
        <Button onClick={this.handleCancel} className={classes.button} variant="raised">
          Cancel
          <Delete className={classes.rightIcon} />
        </Button>
        {this.props.edit && 
          <Button onClick={this.handleDelete} className={classes.button} variant="raised" color="secondary">
              Delete
            <Delete className={classes.rightIcon} />
          </Button>}
      </form>
    );
  }
}

AddBookForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const componentWithStyles = withStyles(styles)(AddBookForm)

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(componentWithStyles);


