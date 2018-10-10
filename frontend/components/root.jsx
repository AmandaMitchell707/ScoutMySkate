import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <h1>Scout My Skate!</h1>
    </HashRouter>
  </Provider>
);

export default Root;
