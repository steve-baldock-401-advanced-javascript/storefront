// This is one of the reducers, also action creator and initial state
// this is a state management container for all products

const initialState = {
  products: [
    { category: 'Turntables', item: 'Technics', price: '$300'},
    { category: 'Turntables', item: 'Denon', price: '$300'},
    { category: 'Speakers', item: 'Speakers', price: '$800'},
    { category: 'Amplifiers',  item: 'Amplifier', price: '$450'},
    { category: 'Headphones', item: 'Headphone', price: '$600'}
  ], 
  activeProduct: 'Technics',
};     

// define reducer
export const products = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'PRODUCT':
      return {...state, activeProduct: payload};
    default:
      return state;
  }
};




