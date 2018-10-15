import React from 'react';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NewRouteMap from './new_route_map';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
      <AuthRoute path="/auth/signup" component={SignupContainer} />
      <AuthRoute path="/auth/login" component={LoginContainer} />
      <ProtectedRoute path="/routes/create" component={NewRouteMap} />
      <Redirect to="/"></Redirect>
    </Switch>

  </div>
);

export default App;
