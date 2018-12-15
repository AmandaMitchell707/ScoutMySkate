import { connect } from 'react-redux';

import RouteIndex from './route_index';
import { fetchAllSkateRoutes } from '../../actions/skate_route_actions';

const mapStateToProps = state => ({
  skateRoutes: state.entities.skateRoutes
});

const mapDispatchToProps = dispatch => ({
  fetchAllSkateRoutes: () => dispatch(fetchAllSkateRoutes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteIndex);
