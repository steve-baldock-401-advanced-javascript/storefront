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
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
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

  const items = props.products.map((item, i) => {
    if(props.activeCategory === item.category){
      return (
        <Card key={i} className={classes.card}>
          <CardMedia 
            className={classes.cardMedia}/>
          <CardContent
            className={classes.cardContent}>
            <Typography variant="h5" color="textPrimary">
            {item.item}
            </Typography>
            <Typography variant="p" color="textSecondary">
            ${item.price}
          </Typography>
          </CardContent>
          <CardActions>
            <Button color="default" variant="outlined"onClick={() => props.addToCart(item) }>Add To Cart</Button>
            <Button color="default" variant="outlined">View Details</Button>
          </CardActions>
        </Card>);
    } else {
      return null;
    }
  })


  return (
    <Container className={classes.cardGrid} maxWidth="md" component="main">
      <Grid container spacing={5}>
        {items}
      </Grid>
    </Container> 
  );
};

  const mapStateToProps = state => {
    // console.log(state.products)
    return {
      products: state.products.products,
      activeCategory: state.categories.activeCategory
    }
  }

  const mapDispatchToProps = { addToCart }

export default connect(mapStateToProps, mapDispatchToProps )(Products);