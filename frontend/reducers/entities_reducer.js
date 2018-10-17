import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import skateRoutesReducer from './skate_routes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  skateRoutes: skateRoutesReducer,
});

export default entitiesReducer;
