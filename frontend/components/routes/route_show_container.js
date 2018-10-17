import { connect } from 'react-redux';

import { fetchSkateRoute } from '../../actions/skate_route_actions';
import RouteShow from './route_show';

const mapStateToProps = (state, ownProps) => {
  const skateRoute = state.entities.skateRoutes[ownProps.match.params.routeId];
  return {
    skateRoute,
    author: state.entities.users[skateRoute.authorId],
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSkateRoute: id => dispatch(fetchSkateRoute(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow);
