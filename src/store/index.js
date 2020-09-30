// Combines all bits of application state
// Inputs reducers and combines them
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

//import reducers
import { products } from '../store/products';
import { categories } from '../store/categories';
import cart from '../store/cart';

let reducers = combineReducers({ products, categories, cart });

const store = () => {
  return createStore(reducers, composeWithDevTools (applyMiddleware(thunk)));
};


export default store();