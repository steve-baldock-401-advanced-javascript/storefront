import React from 'react';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';


const SimpleCart = (props) => {
  return (
    <Link variant="button" color="textPrimary" href="#">
     Cart({props.shoppingCart.length})
    </Link>
  )
}


const mapStateToProps = state => {
  return {
    shoppingCart: state.cart.cartItems,
  }
}


export default connect(mapStateToProps)(SimpleCart); 