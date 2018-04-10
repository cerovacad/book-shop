import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';

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
// <Link className={classes.link} to={} >{props.title}</Link>
function BookItem(props) {
  const { classes } = props;
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
            <Link className={classes.link} to={`/editbook/${props.id}`} >{props.title}</Link>
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Add to cart
          </Button>
          <Button size="small" color="primary">
            Buy now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

BookItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookItem);