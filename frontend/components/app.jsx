import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/auth/signup" component={SignupContainer} />
  </div>
);
