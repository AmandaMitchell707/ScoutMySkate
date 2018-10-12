import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// testing imports:
import { countries } from './util/signup_form_util';
import { createNewUser, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.countries = countries;
  window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
