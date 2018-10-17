import merge from 'lodash/merge';

import {
  RECEIVE_SKATE_ROUTE,
  RECEIVE_SKATE_ROUTES
} from '../actions/skate_route_actions';

const skateRoutesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SKATE_ROUTE:
      return merge({}, state, { [action.skateRoute.id]: action.skateRoute });
    case RECEIVE_SKATE_ROUTES:
      return action.skateRoutes;
    default:
      return state;
  }
};

export default skateRoutesReducer;
