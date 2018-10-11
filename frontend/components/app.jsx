import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <Route path="/auth/signup" component={SignupContainer} />
  </div>
);
