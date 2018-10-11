import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// testing imports:
import { day, month, year } from './util/birthday_util';
import { createNewUser, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;
  // window.day = day;
  // window.year = year;
  window.month = month;

  const store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
