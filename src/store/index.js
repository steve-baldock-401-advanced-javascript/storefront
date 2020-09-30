// Combines all bits of application state
// Inputs reducers and combines them
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';

//import reducers
import products from '../store/products';
import categories from '../store/categories';
import cart from '../store/cart';

let reducers = combineReducers({ products, categories, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();