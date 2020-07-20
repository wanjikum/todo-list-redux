import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from './redux/reducers';
import App from './App.container';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant())));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
