import { connect } from 'react-redux';
import RouteForm from './route_form';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createRoute: skateRoute => dispatch(createRoute(skateRoute)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteForm);
