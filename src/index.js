import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.css';
import registerServiceWorker from './registerServiceWorker'
//import { Provider } from 'react-redux';
//import { store } from './helpers/store';

/*Create the logger and middleware */
/*Create the store */
/*Create Provider and pass store */

/*Enable the following after store is implemented*/
/*<Provider store={ store }>
  <App />
</Provider>,*/
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

registerServiceWorker();
