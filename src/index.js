import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';

import configureStore from './redux/store';
import initialStore from './redux/store/initial-store';

export const store = configureStore(initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);