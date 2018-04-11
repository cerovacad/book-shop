import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../action/cartAction';


const styles = {
  card: {
    maxWidth: 345,
    marginTop: 10
  },
  media: {
    height: 200,
  },
  link: {
    textDecoration: 'none'
  }
};
class BookItem extends Component {
  state = {
    addedToCart: null
  }

  componentDidMount = () => {
    if(this.props.addedToCart === 'true'){
      this.setState({
        addedToCart: true
      })
    }
  }

  handleAddToCart = () => {
    this.props.dispatch(addToCart(this.props.id));
    this.setState({
      addedToCart: !this.state.addedToCart
    })
  }

  handleRemoveFromCart = () => {
    this.props.dispatch(removeFromCart(this.props.id));
    this.setState({
      addedToCart: !this.state.addedToCart
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/images/bookcover.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              <Link className={classes.link} to={`/editbook/${this.props.id}`} >{this.props.title}</Link>
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
          </CardContent>
          <CardActions>
            {!this.state.addedToCart ? 
            (<Button onClick={this.handleAddToCart} size="small" color="primary">
              Add to cart
            </Button>
            ) : ( 
            <Button onClick={this.handleRemoveFromCart} size="small" color="primary">
              Remove from cart
            </Button>
            )}
            <Button size="small" color="primary">
              Buy now
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

BookItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

const componentwithStyles = withStyles(styles)(BookItem);

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(componentwithStyles);