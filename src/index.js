import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';
import { logActions, reportError } from './middlewares';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhacers = composeAlt(
  applyMiddleware(thunk,logActions, reportError)
) 

const store = createStore(rootReducer, composedEnhacers)

ReactDOM.render(
  <Provider store={store}>
    <App />  
  </Provider>
  , document.getElementById('root'));
