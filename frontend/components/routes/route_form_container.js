import { connect } from 'react-redux';
import RouteForm from './route_form';
import { createSkateRoute } from '../../actions/skate_route_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.routes,
});

const mapDispatchToProps = dispatch => ({
  createSkateRoute: skateRoute => dispatch(createSkateRoute(skateRoute)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);
