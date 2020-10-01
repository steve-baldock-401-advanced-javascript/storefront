let initialState = {
  cartItems: [],
  totalPrice: 0
}

export default (state=initialState, action) => {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch(type) {
    case 'ADDTOCART':
      let newCart = [...state.cartItems, payload];
      let newPrice = state.totalPrice + payload.price;

      return {cartItems: newCart, totalPrice: newPrice };

    case 'REMOVE':
      let updatedCart = state.cartItems.filter(item => {
        if(item.item !== payload.item){
          return item;
        }
      })
      let updatedPrice = state.totalPrice - payload.price;
      return {cartItems: updatedCart, totalPrice: updatedPrice };
    default:
      return state;
  }
}

export const addToCart = product => {
  return {
    type: 'ADDTOCART',
    payload: product,
  }
}

export const updateCart = product => {
  return {
    type: 'REMOVE',
    payload: product,
  }
}