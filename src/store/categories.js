// This is one of the reducers, also action creator and initial state
// this is a state management container for all products

const initialState = {
  categories: [
    { name: 'Turntables', description: 'vinyl supplies' },
    { name: 'Speakers', description: 'emit sound'},
    { name: 'Amplifiers', description: 'control sound quality'},
    { name: 'Headphones', description: 'personal sound '}
  ], 
    activeCategory: 'Turntables',
};     

// define reducer
export const categories = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CHANGE':
      return {...state, activeCategory: payload};
    default:
      return state;
  }
};

export const changeCategory = (name) => {
  // Here is thunk 
  return async function(dispatch){

    await later(1000);

    dispatch({
      type: 'CHANGE',
      payload: name
    })
  }
  // return {
  //   type: 'CHANGE',
  //   payload: name
  // }
}

// This is a thunk function 
function later(delay, value){
  return new Promise(resolve => setTimeout(resolve, delay, value))
}
