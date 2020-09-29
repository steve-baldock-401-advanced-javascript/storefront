// This is one of the reducers, also action creator and initial state
// this is a state management container for all products

const initialState = {
  products: [
    { category: 'vinyl', item: 'Turntable', price: '$300'},
    { category: 'sound', item: 'Speakers', price: '$800'},
    { category: 'handling', item: 'Receiver', price: '$500'},
    { category: 'power',  item: 'Amplifier', price: '$450'}
  ], 
  displayedProducts : []
  // categories: [
  //   { vinyl: 'vinyl', description: 'vinyl supplies' },
  //   { sound: 'audio', description: 'emit sound'},
  //   { handling: 'handling', description: 'connect devices'},
  //   { power: 'power', description: 'control sound quality'}
  // ], 
}

// define reducer
export default (state = initialState, action) => {

  const { type, payload } = action;
  switch(type){
    case 'Change':
      let displayedProducts = state.products.filter(product => {
        return product.category === payload;
      })
      return {...state, displayedProducts }
      default:
        return state;
  }

}

export const toggleCategory = (item) => {
  return {
    type: 'Change',
    payload: item
  }
}
