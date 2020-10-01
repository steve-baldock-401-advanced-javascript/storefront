// This is one of the reducers, also action creator and initial state
// this is a state management container for all products

const initialState = {
  products: [
    { category: 'Turntables', item: 'Technics', price: 400},
    { category: 'Turntables', item: 'Denon', price: 300},
    { category: 'Turntables', item: 'Sony', price: 200},
    { category: 'Speakers', item: 'JBL Monitors', price: 800},
    { category: 'Speakers', item: 'Sonos Move', price: 300},
    { category: 'Speakers', item: 'Speakers', price: 800},
    { category: 'Amplifiers',  item: 'McIntosh', price: 700},
    { category: 'Amplifiers',  item: 'PeachTree', price: 450},
    { category: 'Amplifiers',  item: 'PS Audio', price: 699},
    { category: 'Headphones', item: 'Sony', price: 399},
    { category: 'Headphones', item: 'Grado', price: 850},
    { category: 'Headphones', item: 'Focal', price: 1200}
  ], 
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




