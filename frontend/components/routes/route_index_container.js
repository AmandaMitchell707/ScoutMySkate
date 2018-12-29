import { connect } from 'react-redux';

import RouteIndex from './route_index';
import {
  fetchSkateRoutes,
  deleteSkateRoute
} from '../../actions/skate_route_actions';

const mapStateToProps = state => {
  const skateRoutes = state.entities.skateRoutes;

  return ({
    skateRoutes
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSkateRoutes: () => dispatch(fetchSkateRoutes()),
  deleteSkateRoute: (id) => dispatch(deleteSkateRoute(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteIndex);
