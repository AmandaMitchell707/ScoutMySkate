import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// testing imports:
import { createNewUser, login, logout } from './actions/session_actions';
import * as sessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.postUser = sessionApiUtil.postUser;
  window.postSession = sessionApiUtil.postSession;
  window.deleteSession = sessionApiUtil.deleteSession;


  window.createNewUser = createNewUser;
  window.login = login;
  window.logout = logout;

  const store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
