import { setObservableConfig } from 'recompose';
import rxjsconfig from 'recompose/rxjsObservableConfig';
setObservableConfig(rxjsconfig);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Router from 'routes/index';

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
// import middleware from './middleware';
let middleware = [];
import * as reducers from './reducers';

export default (parent) => {
  let reducer = combineReducers(reducers);
  let enhancer = applyMiddleware(...middleware)

  let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let store = createStore(reducer, composeEnhancers(enhancer));

  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>
  , parent);
}
