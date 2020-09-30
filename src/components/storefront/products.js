import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { addToCart } from '../../store/cart';

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));


function Products(props) {

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md" component="main">
      <Grid container spacing={5}>
        <Card className={classes.card}>
          <CardMedia 
            className={classes.cardMedia}
            image={`https://source.unsplash.com/random?${props.activeProduct}`}
          />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" color="textPrimary">
            {/* {props.products} */}
          </Typography>
          <Typography variant="p" color="textSecondary">
            {props.products.products}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outline" color="primary">Add To Cart</Button>
          <Button variant="outline" color="primary">View Details</Button>
        </CardActions>
        </Card>
      </Grid>
    </Container> 
  );
};

  const mapStateToProps = state => {
    console.log(state)
    return {
      activeProduct: state.products.activeProduct,
      products: state.products.products
    }
  }

  const mapDispatchToProps = { addToCart }


export default connect(mapStateToProps, mapDispatchToProps )(Products);