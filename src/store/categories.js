// This is one of the reducers, also action creator and initial state
// this is a state management container for all products

const initialState = {
  // products: [
  //   { category: 'Turntables', item: 'Turntable', price: '$300'},
  //   { category: 'Speakers', item: 'Speakers', price: '$800'},
  //   { category: 'Amplifiers',  item: 'Amplifier', price: '$450'},
  //   { category: 'Headphones', item: 'Headphone', price: '$600'}
  // ], 
  categories: [
    { name: 'Turntables', description: 'vinyl supplies' },
    { name: 'Speakers', description: 'emit sound'},
    { name: 'Amplifiers', description: 'control sound quality'},
    { name: 'Headphones', description: 'personal sound '}
  ], 
    activeCategory: ['Turntables'],
};     

// define reducer
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE':
      return {...state, activeCategory: payload};
    default:
      return state;
  }
};

export const changeCategory = (name) => {
  return {
    type: 'CHANGE',
    payload: name
  }
}