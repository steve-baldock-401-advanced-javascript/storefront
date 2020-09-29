// This is one of the reducers, also action creator and initial state
// this is a state management container for all products

const initialState = {
  categories: [
    { name: 'vinyl', description: 'vinyl supplies' },
    { name: 'audio', description: 'emit sound'},
    { name: 'handling', description: 'connect devices'},
    { name: 'power', description: 'control sound quality'}
  ], 
}

// define reducer
export default (state = initialState, action) => {

  const { type, payload } = action;
  switch(type){
    case 'Change':
      let categories = state.categories.filter(category => {
        return category.name === payload;
      })
      return {...state, categories }
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