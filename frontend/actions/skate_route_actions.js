import React from 'react';
import * as APIUtil from '../util/skate_route_api_util';

export const RECEIVE_SKATE_ROUTES = 'RECEIVE_SKATE_ROUTES';
export const RECEIVE_SKATE_ROUTE = 'RECEIVE_SKATE_ROUTE';
export const REMOVE_SKATE_ROUTE = 'REMOVE_SKATE_ROUTE';

const receiveSkateRoute = skateRoute => ({
  type: RECEIVE_SKATE_ROUTE,
  skateRoute,
});

const receiveSkateRoutes = skateRoutes => ({
  type: RECEIVE_SKATE_ROUTES,
  skateRoutes,
});

const removeSkateRoute = (routeId) => ({
  type: REMOVE_SKATE_ROUTE,
  routeId,
});

export const createSkateRoute = skateRoute => dispatch => (
  APIUtil.createSkateRoute(skateRoute).then(route => (
    dispatch(receiveSkateRoute(route))
  ))
);

export const fetchAllSkateRoutes = () => dispatch => (
  APIUtil.fetchAllSkateRoutes().then(routes => (
    dispatch(receiveSkateRoutes(routes))
  ))
);

export const fetchSkateRoute = (routeId) => dispatch => (
  APIUtil.fetchSkateRoute(routeId).then(route => (
    dispatch(receiveSkateRoute(route))
  ))
);

export const updateSkateRoute = skateRoute => dispatch => (
  APIUtil.updateSkateRoute(skateRoute).then(route => (
    dispatch(receiveSkateRoute(route))
  ))
);

export const deleteSkateRoute = routeId => dispatch => (
  APIUtil.deleteSkateRoute(routeId).then(() => (
    dispatch(removeSkateRoute(routeId))
  ))
);
