// Example middleware
// Resource = reduxjs/redux-thunk - GitHub
// How can we use Redux asynchronously? With Redux Thunk
// import ReduxThunk = require('redux-thunk');

// function incremenet(){
// Immediate calculation
let x = 1 + 2;

// calculation waits for function call
let foo = () => 1 + 2;

// Enable Redux Thunk - In Index.js store
import { createStore, combineReducers, applyMiddleware} from 'redux';
// import ReduxThunk = require('redux-thunk');
let reducers = combineReducers({ reducerA, reducerB });
const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


  // To Do List - Wednesday

  // Monday
  // Render Products on screen

  // Tuesday
  // Build Cart and ability to place products in cart
  // Ability to view items in cart by clicking cart
  // Add counter to cart
  // Add delete function to cart to change the items and count

  // Wednesday
  // Connect store to api for persistence
  // Add live inventory
  // When item is moved to cart, it is removed from inventory so that no others can purchase it