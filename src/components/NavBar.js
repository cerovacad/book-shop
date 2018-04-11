import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    // flex: 1,
    cursor: 'pointer'
  },
  menuButton: {
    // visibility: 'hidden',
    display: 'none',
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      // visibility: 'visible',
      display: 'inline-block'
    }
  },
  button: {
    color: 'inherit',
  },
  nav: {
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      // visibility: 'visible',
      display: 'none'
    }
  },
  link: {
    textDecoration: 'none'
  }
});

class NavBar extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleAdd = () => {
    this.setState({ anchorEl: null });
    this.props.history.push('/addbook')
  };

  handleCart = () => {
    this.setState({ anchorEl: null });
    this.props.history.push('/cart')
  };

  handleTitleClick = () => {
    if(this.props.history){
      this.props.history.push('/');
    }
  }

  render() {

    const { anchorEl } = this.state;

    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu"
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleAdd}>My books</MenuItem>
              <MenuItem onClick={this.handleCart}>Cart</MenuItem>
            </Menu>
            <Typography onClick={this.handleTitleClick} variant="title" color="inherit" className={this.props.classes.flex}>
              BookShop
            </Typography>
            <div className={this.props.classes.nav}>
            <Button onClick={this.handleAdd} style={{marginLeft: '1em'}} className={this.props.classes.button}>My books</Button>
            <Button  onClick={this.handleCart} className={this.props.classes.button}>Cart</Button>
            </div>
            <Button style={{marginLeft: 'auto'}}color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);