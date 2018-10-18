import { connect } from 'react-redux';

import { fetchSkateRoute } from '../../actions/skate_route_actions';
import { fetchUser } from '../../actions/session_actions';
import RouteShow from './route_show';

const mapStateToProps = (state, ownProps) => {
  const skateRoute = state.entities.skateRoutes[ownProps.match.params.routeId];
  let author;

  if (skateRoute) {
    author = state.entities.users[skateRoute.authorId];
  }

  return {
    skateRoute,
    author,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSkateRoute: id => dispatch(fetchSkateRoute(id)),
  fetchUser: id => dispatch(fetchUser(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteShow);
