import { RECEIVE_SKATE_ROUTE } from '../actions/skate_route_actions';
import merge from 'lodash/merge';

const skateRoutesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SKATE_ROUTE:
      return merge({}, state, { [action.skateRoute.id]: action.skateRoute });
    default:
      return state;
  }
};

export default skateRoutesReducer;
