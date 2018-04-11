import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { getCart, removeFromCart, incrementQuantity, decrementQuantity } from '../action/cartAction';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  button: {
    margin: theme.spacing.unit,
  },
  quantity: {
    marginRight: '2.5em'
  }
});

class InteractiveList extends Component {
  state = {
    dense: false,
    secondary: false,
    sum: this.props.cart
  };

  // componentDidMount = () => {
  //   this.props.dispatch(getCart())
  //   let cartSum = 0;
  //   this.props.books.map((book) => {
  //     if(this.props.cart.indexOf(book.id)){
  //       return cartSum += parseInt(book.price);
  //     }
  //   })
  //   this.setState({
  //     sum: cartSum
  //   })
  // }

  handleIncrement = (id) => {
    
    this.props.dispatch(incrementQuantity(id));
  }

  handleDecrement = (id) => {
    this.props.dispatch(decrementQuantity(id));
  }

  handleRemoveFromCart = (id) => {
    this.props.dispatch(removeFromCart(id));
  }

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;
    const books = this.props.books;
    const cart = [];
    this.props.cart.map((book) => {
      cart.push(book.id);
      return 'webpack';
    });
    return (
      <div className={classes.root}>
        <NavBar history={this.props.history} />
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="title" className={classes.title}>
              Your cart:
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>

              {books.map((book) => {
                if(cart.indexOf(book.id) > -1){
                  return ( 
                    <ListItem key={book.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={book.title}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                      <ListItemText
                        primary={book.price + '$'}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                      {this.props.cart.map((cartItem) => {
                        if(cartItem.id === book.id){
                          return (
                           <ListItemText
                              key={cartItem.id}
                              className={classes.quantity}
                              primary={`Quantity:  ${cartItem.quantity}`}
                              secondary={secondary ? 'Secondary text' : null}
                            />
                          );
                        }
                      })}
                      <ListItemSecondaryAction>
                        <Button onClick={() => { this.handleDecrement(book.id)}} variant="fab" mini color="default" aria-label="add" className={classes.button}>
                          <RemoveIcon />
                        </Button>
                        <Button onClick={() => { this.handleIncrement(book.id)} } variant="fab" mini color="default" aria-label="add" className={classes.button}>
                          <AddIcon />
                        </Button>
                        <IconButton onClick={() => {this.handleRemoveFromCart(book.id)}} aria-label="Delete">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                }
              })}
                  <Typography variant="title" className={classes.title}>
                    Sum:  $
                  </Typography>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};


const componentWithStyles =  withStyles(styles)(InteractiveList);


const mapStateToProps = (state) => {
  return {
    books: state.books,
    cart: state.cart
  }
}

export default connect(mapStateToProps)(componentWithStyles);

// <span className={classes.span} color='inherit' >{this.props.cart.map((cartItem) => {
//   if(cartItem.id === book.id){
//     return cartItem.quantity; 
//   }
// })}
// </span>

// {this.props.cart.map((cartItem) => {
//   if(cartItem.id === book.id){
//     return (
//      <ListItemText
//         className={classes.quantity}
//         primary={cartItem.quantity}
//         secondary={secondary ? 'Secondary text' : null}
//       />
//     );
//   }
// })}
