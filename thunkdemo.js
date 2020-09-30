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