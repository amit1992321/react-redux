import React from 'react';
// import ReactDOM from 'react-dom';

// Required for Redux store setup
import { Provider } from 'react-redux'
import configureStore from './store';

import './index.css';
import App from './component/App' ; 
import *  as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
// import App from './components/App'


const store = createStore(rootReducer)

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.register();