import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store/index';

function Main(){
  return (
  <Provider store={store}>
    <App />
  </Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
