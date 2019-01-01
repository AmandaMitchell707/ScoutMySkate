import merge from 'lodash/merge';

import {
  RECEIVE_SKATE_ROUTE,
  RECEIVE_SKATE_ROUTES,
  REMOVE_SKATE_ROUTE
} from '../actions/skate_route_actions';

const skateRoutesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_SKATE_ROUTE:
      newState = merge({}, state);
      newState[action.skateRoute.id] = action.skateRoute;
      return newState;
    case RECEIVE_SKATE_ROUTES:
      return action.skateRoutes;
    case REMOVE_SKATE_ROUTE:
      newState = merge({}, state);
      delete newState[action.routeId];
      return newState;
    default:
      return state;
  }
};

export default skateRoutesReducer;
