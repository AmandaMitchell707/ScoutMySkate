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
import RouteFormContainer from './routes/route_form_container';
import RouteShowContainer from './routes/route_show_container';
import RouteIndexContainer from './routes/route_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div id="app">
    <header>
      <Route path="/" component={NavBarContainer} />
    </header>

    <Switch>
      <Route exact path="/" component={Home} />
      <AuthRoute path="/auth/signup" component={SignupContainer} />
      <AuthRoute path="/auth/login" component={LoginContainer} />
      <ProtectedRoute path="/routes/create" component={RouteFormContainer} />
      <ProtectedRoute path="/routes/my_routes" component={RouteIndexContainer} />
      <Route path="/routes/view/:routeId" component={RouteShowContainer} />
      <Redirect to="/"></Redirect>
    </Switch>

  </div>
);

export default App;
