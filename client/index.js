import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './history';
import store from './store';
import app from './app';

ReactDOM.render(
  <Provider store = {store}>
    <Router history = {history}>
      <app />
    </Router>
  </Provider>,
  document.getElementById('app')
);