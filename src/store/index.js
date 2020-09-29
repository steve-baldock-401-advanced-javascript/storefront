// Combines all bits of application state
// Inputs reducers and combines them
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';

//import reducers
import products from '../store/products';

let reducers = combineReducers({ products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();