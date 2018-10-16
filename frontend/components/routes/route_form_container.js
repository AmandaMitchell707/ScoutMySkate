import { connect } from 'react-redux';
import RouteForm from './route_form';
import { createSkateRoute } from '../../actions/skate_route_actions';

const mapStateToProps = ({ errors }) => ({
  errors,
});

const mapDispatchToProps = dispatch => ({
  createSkateRoute: skateRoute => dispatch(createSkateRoute(skateRoute)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);
