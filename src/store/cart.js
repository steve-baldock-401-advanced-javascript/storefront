let initialState = {
  cartItems: [],
  totalPrice: 0
}

export default (state=initialState, action) => {
  const { type, payload } = action;

  // eslint-disable-next-line default-case
  switch(type) {
    case 'ADDTOCART':
      let totalCartItems = state.cartItems + 1;

      return totalCartItems;

    case 'RESET':
      return initialState;
    
    default:
      return state;
  }
}

export  const addToCart = product => {
  return {
    type: 'ADDTOCART',
    payload: product,
  }
}

export  const emptyCart = product => {
  return {
    type: 'RESET',
    payload: product,
  }
}