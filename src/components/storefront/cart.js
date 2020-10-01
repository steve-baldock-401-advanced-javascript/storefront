import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { updateCart } from '../../store/cart'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    right: 0,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around'
  }
}));

const SimpleCart = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const body = props.cartItems.map((item, i) => 
      <Card key={i}>
        <CardContent className={classes.card}>
          <Typography>
            {`${item.item}: $${item.price}`}
          </Typography>
          <Button onClick={() => props.updateCart(item)}>Remove</Button>
        </CardContent>
      </Card>
    );
  

  console.log('cart', props)
  return (
    <>
    <Button onClick={handleOpen} variant="outlined" color="default">
     Cart({props.cartItems.length})
    </Button>
    <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h2>Shopping Cart</h2>
          {body}
          <p strong>Total: ${props.itemPrice}</p>
        </div>
      </Modal>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    itemPrice: state.cart.totalPrice
  }
}

const mapDispatchToProps = { updateCart }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart); 